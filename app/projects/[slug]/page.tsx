import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import Header from "@/app/components/layout/header"
import PageContainer from "@/app/components/layout/page-container"
import { projects } from "@/app/projects"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <PageContainer>
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-96 md:h-[70vh]">
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
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={section.src || "/placeholder.svg"}
                        alt={section.alt || ""}
                        fill
                        className="object-cover rounded-lg"
                      />
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
      </PageContainer>
    </>
  )
}

