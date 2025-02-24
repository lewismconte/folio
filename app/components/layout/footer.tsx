import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

