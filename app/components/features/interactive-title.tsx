"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Slider } from "@/components/ui/slider"

// Constants
const NUM_SHAPES = 3
const NUM_POINTS = 8
const MIN_BOUNDARY_RADIUS = 50
const MAX_BOUNDARY_RADIUS = 150
const SPRING_STRENGTH = 0.03
const REPULSION_STRENGTH = 0.9
const MORPH_STRENGTH = 2
const MORPH_SPEED = 0.01
const RIGIDITY_STRENGTH = 0.4
const TRANSITION_DURATION = 1.2 // Slightly reduced for better responsiveness
const ARRAY_CENTER_X = 0
const ARRAY_CENTER_Y = 0
const MAX_SHAPE_COUNT = 6

// Helper functions
const seedRandom = (seed: number) => () => {
  seed = (seed * 9301 + 49297) % 233280
  return seed / 233280
}

const generatePoints = (random: () => number, radius: number) =>
  Array.from({ length: NUM_POINTS }, () => {
    const angle = random() * Math.PI * 2
    const r = radius * (0.6 + random() * 0.4)
    return {
      x: r * Math.cos(angle),
      y: r * Math.sin(angle),
      originalX: r * Math.cos(angle),
      originalY: r * Math.sin(angle),
      phase: random() * Math.PI * 2,
    }
  })

const interpolatePoints = (points1: any[], points2: any[], progress: number) =>
  points1.map((p1, i) => {
    const p2 = points2[i]
    return {
      x: p1.x + (p2.x - p1.x) * progress,
      y: p1.y + (p2.y - p1.y) * progress,
      originalX: p1.originalX + (p2.originalX - p1.originalX) * progress,
      originalY: p1.originalY + (p2.originalY - p1.originalY) * progress,
      phase: p1.phase + (p2.phase - p1.phase) * progress,
    }
  })

const createSmoothPath = (points: { x: number; y: number }[]) => {
  const path = points.map((p, i) => {
    const p0 = points[(i - 1 + points.length) % points.length]
    const p1 = p
    const p2 = points[(i + 1) % points.length]
    const p3 = points[(i + 2) % points.length]

    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6

    return i === 0 ? `M ${p1.x},${p1.y}` : `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`
  })

  return path.join(" ") + "Z"
}

const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r, g, b
  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255]
}

const rgbToHex = (r: number, g: number, b: number): string =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

const generateAnalogousColors = (baseHue: number): string[] =>
  Array.from({ length: NUM_SHAPES }, (_, i) => {
    const hue = (baseHue + i * 30) % 360
    const [r, g, b] = hslToRgb(hue, 0.4, 0.5)
    return rgbToHex(Math.round(r), Math.round(g), Math.round(b))
  })

const calculateBoundaryRadius = (sizeValue: number): number =>
  MIN_BOUNDARY_RADIUS + (MAX_BOUNDARY_RADIUS - MIN_BOUNDARY_RADIUS) * (sizeValue / 99)

export default function InteractiveTitle() {
  const [baseSeed] = useState(() => Math.floor(Math.random() * 1000000))
  const [seed, setSeed] = useState(0)
  const [size, setSize] = useState(50)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [shapeCount, setShapeCount] = useState(1)
  const [arrayDistance, setArrayDistance] = useState(25)
  const [pathData, setPathData] = useState<Array<{ 
    path: string; 
    color: string; 
    id: string;
    angle?: number;
    radius?: number;
    initialAngle?: number;
    initialRadius?: number;
    isNew?: boolean;
    isCollapsing?: boolean;
  }>>([])
  
  // Track previous values for smoother transitions
  const prevSeedRef = useRef(seed)
  const prevSizeRef = useRef(size)
  const prevArrayDistanceRef = useRef(arrayDistance)
  
  // For throttling updates
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isUpdatingRef = useRef(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)
  const shapesRef = useRef<Array<{ points: any[]; color: string; targetPoints?: any[] }>>([])
  const transitionRef = useRef({ progress: 0, active: false })

  const boundaryRadius = useMemo(() => calculateBoundaryRadius(size), [size])

  // Throttled update function to prevent excessive recalculations
  const throttledUpdate = useCallback((type: 'seed' | 'size' | 'distance') => {
    if (isUpdatingRef.current) return
    
    isUpdatingRef.current = true
    
    // Clear any pending updates
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current)
    }
    
    // Set a short timeout to allow for small pauses in slider movement
    updateTimeoutRef.current = setTimeout(() => {
      const needsSeedUpdate = type === 'seed' && prevSeedRef.current !== seed
      const needsSizeUpdate = type === 'size' && prevSizeRef.current !== size
      
      if (needsSeedUpdate) {
        prevSeedRef.current = seed
        regenerateShapes()
      } else if (needsSizeUpdate) {
        prevSizeRef.current = size
        regenerateShapes()
      } else if (type === 'distance') {
        prevArrayDistanceRef.current = arrayDistance
        updatePathData()
      }
      
      isUpdatingRef.current = false
    }, 25) // Short delay for better responsiveness
  }, [seed, size, arrayDistance])

  // Store previous shape count for transition effects
  const prevShapeCountRef = useRef<number>(1)
  // Store previous path data for smooth transitions
  const prevPathDataRef = useRef<Array<{ path: string; color: string; id: string; angle: number; radius: number }>>([])
  
  const updatePathData = useCallback(() => {
    // Keep track of existing paths for smooth transitions
    const previousPathData = prevPathDataRef.current
    const previousShapeCount = prevShapeCountRef.current
    const isIncreasing = shapeCount > previousShapeCount
    const isResetting = previousShapeCount === MAX_SHAPE_COUNT && shapeCount === 1
    
    prevShapeCountRef.current = shapeCount
    
    // Generate new paths
    const newPathData = shapesRef.current.slice(0, 3).flatMap((shape, shapeIndex) =>
      Array.from({ length: shapeCount }, (_, arrayIndex) => {
        const angle = (arrayIndex / shapeCount) * Math.PI * 2
        const arrayRadius = (arrayDistance / 100) * 200
        
        // For animation purpose, we need to know the start position
        let startAngle = angle
        let startRadius = arrayRadius
        
        // If we're increasing, new shapes come from the center
        if (isIncreasing && arrayIndex >= previousShapeCount) {
          startAngle = 0
          startRadius = 0
        }
        
        // If we're resetting to 1, all shapes collapse to the center
        if (isResetting && arrayIndex === 0) {
          startAngle = angle
          startRadius = arrayRadius
        }
        
        const translatedPoints = shape.points.map((point) => {
          const rotatedX = point.x * Math.cos(angle) - point.y * Math.sin(angle)
          const rotatedY = point.x * Math.sin(angle) + point.y * Math.cos(angle)
          return {
            x: ARRAY_CENTER_X + rotatedX + arrayRadius * Math.cos(angle),
            y: ARRAY_CENTER_Y + rotatedY + arrayRadius * Math.sin(angle),
          }
        })
        
        // Create a unique ID for this path that persists across updates
        const pathId = `shape-${shapeIndex}-array-${arrayIndex}`
        
        return {
          path: createSmoothPath(translatedPoints),
          color: shape.color,
          id: pathId,
          angle: angle,
          radius: arrayRadius,
          initialAngle: startAngle,
          initialRadius: startRadius,
          isNew: isIncreasing && arrayIndex >= previousShapeCount,
          isCollapsing: isResetting && arrayIndex > 0
        }
      }),
    )
    
    // Store the new path data for next update
    prevPathDataRef.current = newPathData
    
    setPathData(newPathData)
  }, [shapeCount, arrayDistance])

  // Function to smoothly regenerate shapes
  const regenerateShapes = useCallback(() => {
    if (shapesRef.current.length === 0) return

    const random = seedRandom(baseSeed + seed)
    const baseHue = random() * 360
    const colors = generateAnalogousColors(baseHue)
    const newTargetPoints = shapesRef.current.map(() => generatePoints(random, boundaryRadius))

    shapesRef.current = shapesRef.current.map((shape, i) => ({
      ...shape,
      targetPoints: newTargetPoints[i],
      color: colors[i % colors.length],
    }))

    transitionRef.current = { progress: 0, active: true }
    updatePathData()
  }, [seed, baseSeed, boundaryRadius, updatePathData])

  // Initial setup
  useEffect(() => {
    const random = seedRandom(baseSeed)
    const baseHue = random() * 360
    const colors = generateAnalogousColors(baseHue)
    shapesRef.current = Array.from({ length: 6 }, (_, i) => ({
      points: generatePoints(random, boundaryRadius),
      color: colors[i % colors.length],
    }))
    updatePathData()
  }, [baseSeed, boundaryRadius, updatePathData])

  // Handle slider value changes
  useEffect(() => {
    throttledUpdate('seed')
  }, [seed, throttledUpdate])

  useEffect(() => {
    throttledUpdate('size')
  }, [size, throttledUpdate])

  useEffect(() => {
    throttledUpdate('distance')
  }, [arrayDistance, throttledUpdate])
  
  // Handle shape count changes
  useEffect(() => {
    // Force path data update when shape count changes
    updatePathData()
  }, [shapeCount, updatePathData])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 400,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 400,
        })
      }
    }

    const container = containerRef.current
    container?.addEventListener("mousemove", handleMouseMove)
    return () => container?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Main animation loop
  useEffect(() => {
    const updateShapes = () => {
      timeRef.current += MORPH_SPEED

      if (transitionRef.current.active) {
        transitionRef.current.progress += 1 / (60 * TRANSITION_DURATION)
        if (transitionRef.current.progress >= 1) {
          transitionRef.current.active = false
          transitionRef.current.progress = 1
          shapesRef.current = shapesRef.current.map((shape) => ({
            ...shape,
            points: shape.targetPoints || shape.points,
          }))
        }
      }

      shapesRef.current = shapesRef.current.map((shape) => {
        let currentPoints = shape.points

        if (transitionRef.current.active && shape.targetPoints) {
          currentPoints = interpolatePoints(shape.points, shape.targetPoints, transitionRef.current.progress)
        }

        const newPoints = currentPoints.map((point, index) => {
          const dx = mousePosition.x - point.x
          const dy = mousePosition.y - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const repulsion = REPULSION_STRENGTH / (distance + 1)

          let newX = point.x - dx * repulsion
          let newY = point.y - dy * repulsion

          newX += (point.originalX - newX) * RIGIDITY_STRENGTH
          newY += (point.originalY - newY) * RIGIDITY_STRENGTH

          newX += (ARRAY_CENTER_X - newX) * SPRING_STRENGTH
          newY += (ARRAY_CENTER_Y - newY) * SPRING_STRENGTH

          const morphFactor = Math.sin(timeRef.current + point.phase + index * ((Math.PI * 2) / NUM_POINTS))
          newX += morphFactor * MORPH_STRENGTH
          newY += morphFactor * MORPH_STRENGTH

          const distanceFromCenter = Math.sqrt(newX ** 2 + newY ** 2)
          if (distanceFromCenter > boundaryRadius) {
            const angle = Math.atan2(newY, newX)
            newX = Math.cos(angle) * boundaryRadius
            newY = Math.sin(angle) * boundaryRadius
          }

          return { ...point, x: newX, y: newY }
        })

        return { ...shape, points: newPoints }
      })

      updatePathData()
      animationRef.current = requestAnimationFrame(updateShapes)
    }

    updateShapes()
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, updatePathData, boundaryRadius])

  // Smoothly handle shape count changes with duplication effect
  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target as HTMLElement).closest(".slider-container")) {
      // First apply any pending transitions
      if (transitionRef.current.active) {
        shapesRef.current = shapesRef.current.map((shape) => ({
          ...shape,
          points: shape.targetPoints || shape.points,
        }))
        transitionRef.current.active = false
      }
      
      // Update shape count with duplication effect
      setShapeCount((prevCount) => {
        const newCount = (prevCount % MAX_SHAPE_COUNT) + 1
        
        // The duplication effect happens in the updatePathData function
        // which has access to both old and new counts
        return newCount
      })
      
      // Force an immediate update of the path data
      requestAnimationFrame(() => {
        updatePathData()
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={handleContainerClick}
    >
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ml-24 select-none"
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Lewis Conte
            </h1>
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
              Portfolio.
            </h2>
          </motion.div>
        </div>
      </div>

      <svg width="100%" height="100%" viewBox="-200 -200 400 400" className="absolute inset-0">
        <AnimatePresence mode="sync">
          {pathData.map((data) => {
            // Calculate transform properties
            const centerX = data.initialRadius ? Math.cos(data.initialAngle!) * data.initialRadius : 0
            const centerY = data.initialRadius ? Math.sin(data.initialAngle!) * data.initialRadius : 0
            const targetX = data.radius ? Math.cos(data.angle!) * data.radius : 0
            const targetY = data.radius ? Math.sin(data.angle!) * data.radius : 0
            
            // Determine animation settings based on the shape's status
            let initialProps = {}
            let exitProps = {}
            
            if (data.isNew) {
              // New shapes start from the center with 0 opacity
              initialProps = { 
                x: centerX - targetX, 
                y: centerY - targetY, 
                opacity: 0, 
                scale: 0.2 
              }
            } else if (data.isCollapsing) {
              // Collapsing shapes animate to the center
              exitProps = { 
                x: 0 - targetX, 
                y: 0 - targetY, 
                opacity: 0, 
                scale: 0.2 
              }
            } else {
              // Default animations
              initialProps = { opacity: 0, scale: 0.8 }
              exitProps = { opacity: 0, scale: 0.8 }
            }
            
            return (
              <motion.path
                key={data.id}
                d={data.path}
                fill={data.color}
                style={{ mixBlendMode: "screen" }}
                initial={initialProps}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                exit={exitProps}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25,
                  duration: 0.7
                }}
              />
            )
          })}
        </AnimatePresence>
      </svg>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 z-20 flex flex-col items-center gap-4">
        <div className="slider-container flex flex-col items-center gap-4 w-full backdrop-blur-sm bg-black/20 p-4 rounded-lg">
          {[
            { value: seed, setValue: setSeed, label: "Seed" },
            { value: size, setValue: setSize, label: "Size" },
            { value: arrayDistance, setValue: setArrayDistance, label: "Array Distance" },
          ].map(({ value, setValue, label }) => (
            <div key={label} className="flex items-center gap-4 w-full">
              <span className="text-white text-xs opacity-60 w-24">{label}</span>
              <Slider
                value={[value]}
                onValueChange={(values) => setValue(values[0])}
                min={0}
                max={99}
                step={1}
                className="flex-grow opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-white text-sm opacity-60 w-8 text-right">
                {value.toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
        <span className="text-white text-sm opacity-40 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
          Shape Count: {shapeCount} (Click to change)
        </span>
      </div>
    </div>
  )
}