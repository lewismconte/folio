"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Mail } from "lucide-react"
import Header from "@/app/components/layout/header"
import PageContainer from "@/app/components/layout/page-container"
import { projects } from "@/app/projects"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Lightbox } from "@/app/components/ui/lightbox"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState("")
  const [lightboxAlt, setLightboxAlt] = useState("")

  if (!project) {
    notFound()
  }
  
  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src)
    setLightboxAlt(alt)
    setLightboxOpen(true)
  }

  // Helper function for object fit classes
  const getObjectFitClass = (objectFit?: string) => {
    switch (objectFit) {
      case "contain": return "object-contain"
      case "fill": return "object-fill"
      case "none": return "object-none"
      default: return "object-cover"
    }
  }

  // Helper function for margin classes
  const getMarginClass = (margin?: string) => {
    switch (margin) {
      case "small": return "my-2"
      case "medium": return "my-4"
      case "large": return "my-8"
      default: return ""
    }
  }

  // Helper function for height classes
  const getHeightClass = (height?: string, customHeight?: string, orientation?: string) => {
    if (height === "custom" && customHeight) {
      return customHeight
    }
    
    // Apply different heights based on orientation
    if (orientation === "portrait") {
      switch (height) {
        case "small": return "h-64 md:h-80" // Taller for portrait small
        case "large": return "h-96 md:h-[40rem]" // Much taller for portrait large
        default: return "h-80 md:h-[32rem]" // medium is default for portrait
      }
    }
    
    // Default height classes for landscape and undefined orientation
    switch (height) {
      case "small": return "h-40 md:h-64"
      case "large": return "h-96 md:h-[32rem]"
      default: return "h-64 md:h-96" // medium is default
    }
  }

  // Helper function for shadow classes
  const getShadowClass = (shadow?: string) => {
    switch (shadow) {
      case "sm": return "shadow-sm"
      case "md": return "shadow-md"
      case "lg": return "shadow-lg"
      case "xl": return "shadow-xl"
      default: return ""
    }
  }

  // Helper function for alignment classes
  const getAlignmentClass = (alignment?: string) => {
    switch (alignment) {
      case "center": return "mx-auto"
      case "right": return "ml-auto"
      default: return "" // left is default
    }
  }

  // Helper function for max-width classes
  const getMaxWidthClass = (maxWidth?: string, customWidth?: string) => {
    if (customWidth) {
      return customWidth
    }
    
    switch (maxWidth) {
      case "xs": return "max-w-xs"
      case "sm": return "max-w-sm"
      case "md": return "max-w-md"
      case "lg": return "max-w-lg"
      case "xl": return "max-w-xl"
      case "2xl": return "max-w-2xl"
      case "3xl": return "max-w-3xl"
      case "4xl": return "max-w-4xl"
      case "5xl": return "max-w-5xl"
      case "full": return "max-w-full"
      default: return "" // No max-width by default
    }
  }

  // Orientation-specific container classes
  const getOrientationClass = (orientation?: string) => {
    switch (orientation) {
      case "portrait": return "portrait-image-container"
      case "square": return "square-image-container"
      default: return "" // landscape or undefined
    }
  }

  return (
    <>
      <Header />
      <PageContainer className="pt-16">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div 
            className="relative h-96 md:h-[70vh] cursor-pointer transition-all hover:opacity-90" 
            onClick={() => openLightbox(project.image || "/placeholder.svg", project.title)}
            aria-label="Click to enlarge image"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <Badge variant="secondary" className="mb-6">
              {project.category}
            </Badge>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.sections.map((section, index) => (
                <div key={index} className={section.fullWidth ? "md:col-span-2" : ""}>
                  {section.type === "text" && (
                    <div>
                      {section.title && <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>}
                      <p className="text-lg mb-6 leading-relaxed">{section.content}</p>
                    </div>
                  )}
                  {section.type === "image" && section.src && (
                    <div className={cn(
                      getMarginClass(section.margin),
                      "w-full"
                    )}>
                      <div 
                        className={cn(
                          "relative cursor-pointer transition-all hover:opacity-90",
                          getHeightClass(section.height, section.customHeight, section.orientation),
                          getShadowClass(section.shadow),
                          getAlignmentClass(section.alignment),
                          getMaxWidthClass(section.maxWidth, section.customWidth),
                          getOrientationClass(section.orientation)
                        )}
                        onClick={() => openLightbox(section.src || "/placeholder.svg", section.alt || "")}
                        aria-label="Click to enlarge image"
                      >
                        <Image
                          src={section.src || "/placeholder.svg"}
                          alt={section.alt || ""}
                          fill
                          className={cn(
                            "rounded-lg",
                            getObjectFitClass(section.objectFit),
                            section.orientation === "portrait" ? "object-contain" : ""
                          )}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {project.details && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details.map((detail, index) => (
                    <div key={index}>
                      <dt className="font-semibold">{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">
            Interested in discussing this project or have questions about my work? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="mailto:lewismconte@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">
                View Contact Information
              </Link>
            </Button>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox 
          src={lightboxSrc} 
          alt={lightboxAlt} 
          isOpen={lightboxOpen} 
          onClose={() => setLightboxOpen(false)} 
        />
      </PageContainer>
    </>
  )
}