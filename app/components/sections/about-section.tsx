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
              I'm an architect specializing in computational design and sustainable architecture. My work spans from
              complex infrastructure projects like the Richmond Regen water treatment facility to detailed commercial
              renovations such as the Wentworth Hotel Mezzanine. Each project demonstrates my commitment to integrating
              innovative design with practical functionality.
            </p>
            <p className="mb-4">
              My practice is enriched by diverse interests including parametric design, architectural photography, and
              technical documentation. I use tools like Grasshopper for computational design, drawing inspiration from
              geometric patterns observed during my travels in India. This multidisciplinary approach allows me to
              create unique solutions that bridge the gap between traditional architectural principles and contemporary
              design methods.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/images/profile-photo.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="relative aspect-square">
          <SingleMorphingShape />
        </div>
      </div>
    </section>
  )
}

