"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import MorphingIcon from "../features/morphing-icon"

export default function Header() {
  const pathname = usePathname()
  const isProjectPage = pathname.startsWith('/projects/')
  
  // Prefix with homepage URL if we're on a project page
  const getHref = (anchor: string) => {
    return isProjectPage ? `/${anchor}` : anchor
  }
  
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
          <MorphingIcon />
          <span>Lewis Conte</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href={getHref("#projects")} className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href={getHref("#about")} className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href={getHref("#contact")} className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}