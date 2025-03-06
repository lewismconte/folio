import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  className?: string
}

export default function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section id="contact" className={className}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Get in Touch</h2>
      <p className="mb-4">Interested in collaborating or just want to chat? Let's connect:</p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="mailto:lewismconte@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://github.com/lewismconte/" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://www.linkedin.com/in/lewis-conte-514aa7174" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
        </Button>
      </div>
    </section>
  )
}