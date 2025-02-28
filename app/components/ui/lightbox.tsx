"use client"

import React, { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-screen-lg w-[90vw] h-[90vh] p-0 bg-black/90 border-none">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative h-full w-full flex items-center justify-center p-4">
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
