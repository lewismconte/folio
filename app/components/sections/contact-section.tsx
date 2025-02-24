import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Get in Touch</h2>
      <p className="mb-4">Interested in collaborating on computational design projects? Let's connect:</p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="mailto:contact@example.com">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
        </Button>
      </div>
    </section>
  )
}

