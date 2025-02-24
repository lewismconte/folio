"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const NUM_POINTS = 5
const MORPH_SPEED = 0.02
const MORPH_STRENGTH = 3
const SPRING_STRENGTH = 0.01
const RIGIDITY_STRENGTH = 0.1

const generatePoints = (radius: number) =>
  Array.from({ length: NUM_POINTS }, () => {
    const angle = Math.random() * Math.PI * 2
    const r = radius * (0.6 + Math.random() * 0.4)
    return {
      x: r * Math.cos(angle),
      y: r * Math.sin(angle),
      originalX: r * Math.cos(angle),
      originalY: r * Math.sin(angle),
      phase: Math.random() * Math.PI * 2,
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

export default function MorphingIcon() {
  const [pathData, setPathData] = useState("")
  const pointsRef = useRef(generatePoints(10))
  const timeRef = useRef(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    const updateShape = () => {
      timeRef.current += MORPH_SPEED

      const newPoints = pointsRef.current.map((point, index) => {
        const morphFactor = Math.sin(timeRef.current + point.phase + index * ((Math.PI * 2) / NUM_POINTS))
        let newX = point.x + morphFactor * MORPH_STRENGTH
        let newY = point.y + morphFactor * MORPH_STRENGTH

        newX += (point.originalX - newX) * RIGIDITY_STRENGTH
        newY += (point.originalY - newY) * RIGIDITY_STRENGTH

        newX += (0 - newX) * SPRING_STRENGTH
        newY += (0 - newY) * SPRING_STRENGTH

        return { ...point, x: newX, y: newY }
      })

      setPathData(createSmoothPath(newPoints))
      animationRef.current = requestAnimationFrame(updateShape)
    }

    updateShape()
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="-12 -12 24 24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.path
        d={pathData}
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.svg>
  )
}

