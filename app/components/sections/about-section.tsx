import Image from "next/image"
import SingleMorphingShape from "../features/single-morphing-shape"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">About Me</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <div>
            <p className="mb-4">
            I'm an architectural designer with a natural ability to adapt to emerging technologies while maintaining focus on thoughtful design outcomes. My career has progressed from remedial drafting and landscaping to developing sophisticated architectural projects at H&E Architects, where I navigate between technical precision and creative vision.
            </p>
            <p className="mb-4">
            I've embraced tools like Rhino/Grasshopper and Revit alongside AI and other digital innovations, seeing each new technology as an opportunity to enhance rather than replace traditional architectural thinking. This adaptability has proven valuable across diverse projects—from industrial retrofits to complex parametric structures—where I've leveraged both digital fluency and hands-on experience to solve design challenges. Throughout my professional journey, I've maintained that good architecture emerges from understanding both the technical systems and human experiences that shape our built environment, using whatever tools best serve the project at hand.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4"> {/* Added grid layout */}
            <Image
              src="/images/profile_image.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <div className="relative aspect-square">
              <SingleMorphingShape />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

