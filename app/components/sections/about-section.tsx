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
            I'm an architectural designer that strives to bridge traditional architectural principles with computational innovation, exploring the rich territory where technical precision meets creative expression. My approach is grounded in systematic problem-solving while remaining open to cultural influences and unexpected connections that enrich the design process.
            </p>
            <p className="mb-4">
            My practice is guided by a belief that thoughtful architecture emerges from the balance between technical rigor and human experience. Whether working with parametric tools or traditional documentation, I see each design challenge as an opportunity to create spaces that are not only functional and structurally sound, but also meaningful and responsive to their context.
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

