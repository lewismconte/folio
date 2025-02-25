import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { projects } from "../projects"

export function ProjectCard({ slug, title, description, image, category }: Project) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </CardContent>
        <CardFooter className="px-4 py-2 bg-gray-50">
          <Badge variant="secondary">{category}</Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}

