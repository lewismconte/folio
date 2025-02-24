export const projectCategories = [
  "Built Projects & Professional Work",
  "Computational Design",
  "Research & Concept Projects",
  "Technical Documentation",
  "Creative Practice",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export interface ProjectSection {
  type: "text" | "image"
  title?: string
  content?: string
  src?: string
  alt?: string
  fullWidth?: boolean
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

