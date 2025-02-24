import type React from "react"
interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>{children}</div>
}

