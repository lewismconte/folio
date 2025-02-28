import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon } from "lucide-react"
import type { Project } from "@/app/data/types"

export function ProjectCard({ slug, title, description, image, category }: Project) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
        <div className="relative h-60 group">
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 z-10 bg-white/90 text-xs font-medium"
          >
            {category}
          </Badge>
          <Image 
            src={image || "/placeholder.svg"} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="px-4 py-3 border-t bg-gray-50 flex justify-between items-center">
          <span className="text-sm font-medium text-primary flex items-center">
            View Project
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}