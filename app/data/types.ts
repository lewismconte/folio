export const projectCategories = [
  "Built Projects & Professional Work",
  "Computational Design",
  "Research & Concept Projects",
  "Technical Documentation",
  "Creative Practice",
  "BIM",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export interface ProjectSection {
  type: "text" | "image"
  title?: string
  content?: string
  src?: string
  alt?: string
  fullWidth?: boolean
  // Image formatting options
  height?: "small" | "medium" | "large" | "custom"
  customHeight?: string // For when height is "custom", e.g. "h-40 md:h-80"
  objectFit?: "cover" | "contain" | "fill" | "none" 
  alignment?: "left" | "center" | "right"
  margin?: "none" | "small" | "medium" | "large"
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  // New option for portrait images
  orientation?: "landscape" | "portrait" | "square"
  // Width option for portrait images
  maxWidth?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full"
  customWidth?: string // For custom width classes
}

export interface ProjectDetail {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  sections: ProjectSection[]
  details: ProjectDetail[]
}