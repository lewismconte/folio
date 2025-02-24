"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"
import { type Project, type ProjectCategory, projectCategories } from "@/app/data/types"

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All")

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          key="All"
          variant={activeCategory === "All" ? "default" : "outline"}
          onClick={() => setActiveCategory("All")}
        >
          All
        </Button>
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  )
}

