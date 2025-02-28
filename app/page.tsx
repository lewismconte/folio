import Header from "./components/layout/header"
import PageContainer from "./components/layout/page-container"
import Footer from "./components/layout/footer"
import { ProjectGrid } from "./components/projects/project-grid"
import ContactSection from "./components/sections/contact-section"
import AboutSection from "./components/sections/about-section"
import HeroSection from "./components/sections/hero-section"
import { projects } from "./projects"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <main className="flex-1">
        <PageContainer>
          <section id="projects" className="py-12 sm:py-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Projects</h2>
            <ProjectGrid projects={projects} />
          </section>
          <AboutSection className="py-12 sm:py-16" />
          <ContactSection className="py-12 sm:py-16" />
        </PageContainer>
      </main>
      <Footer />
    </div>
  )
}