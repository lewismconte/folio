import type { Project } from "./data/types"

export const projects: Project[] = [
  {
    slug: "richmond-regen",
    title: "Richmond Regen",
    description: "Created for Studio 5:Temples of the Periphery during my bachelors at UTS. Transforming water treatment infrastructure into an ecological parkland.",
    image: "/images/Richmond_Model_Aerial.jpg",
    category: "Built Projects & Professional Work",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "The Richmond Regen project is a visionary transformation of existing water treatment infrastructure into a vibrant ecological parkland. This studio project showcases innovative design solutions that blend functionality with environmental consciousness.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/richmond-regen-detail.jpg",
        alt: "Richmond Regen Detail",
      },
      {
        type: "text",
        content:
          "The centerpiece of the design features cutting-edge pump towers that not only serve their practical purpose but also stand as architectural marvels. These towers are complemented by a series of rammed earth weirs, which not only manage water flow but also create diverse habitats for local flora and fauna.",
      },
      {
        type: "image",
        src: "/images/richmond-regen-overview.jpg",
        alt: "Richmond Regen Overview",
      },
      {
        type: "text",
        title: "Environmental Impact",
        content:
          "The project demonstrates how industrial sites can be reimagined to serve both utility and community needs, turning a once purely functional space into a public amenity that celebrates the intersection of technology and nature.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Location", value: "Richmond, Australia" },
      { label: "Year", value: "2023" },
      { label: "Type", value: "Infrastructure Transformation" },
      { label: "Size", value: "50 hectares" },
    ],
  },
  {
    slug: "wentworth-hotel-mezzanine",
    title: "Wentworth Hotel Level 5 Canopy",
    description: "A technical renovation featuring an aircraft wing like radiating copper canopy to protect patrons from the elements.",
    image: "/images/Wentworth_Aerial.jpg",
    category: "Built Projects & Professional Work",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "The Wentworth Hotel Mezzanine project is a stunning renovation of the hotel's fifth level, bringing a touch of modern sophistication to the historic building.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/wentworth-hotel-canopy.jpg",
        alt: "Wentworth Hotel Copper Canopy",
      },
      {
        type: "text",
        content:
          "The centerpiece of this renovation is an exquisite copper canopy that serves both aesthetic and functional purposes. This canopy incorporates an innovative grid shell structure, pushing the boundaries of architectural design and engineering.",
      },
      {
        type: "image",
        src: "/images/Wentworth_Wide.jpg",
        alt: "Wentworth Hotel Interior",
        fullWidth: true
      },
      {
        type: "text",
        title: "Design Philosophy",
        content:
          "The integration of glass skylights within this structure bathes the space in natural light, creating an airy and inviting atmosphere. This project showcases the perfect balance between preserving the hotel's heritage and introducing contemporary design elements, resulting in a space that is both luxurious and welcoming.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Location", value: "Sydney, Australia" },
      { label: "Year", value: "2022" },
      { label: "Type", value: "Commercial Renovation" },
      { label: "Size", value: "500 sq meters" },
    ],
  },
  {
    slug: "condell-park-office",
    title: "Condell Park Office",
    description: "Industrial building transformation with innovative design elements.",
    image: "/images/Condell_Hori_01.jpg",
    category: "Built Projects & Professional Work",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "The Condell Park Office project involved the transformation of an existing industrial building into a modern, functional office space. This renovation showcases the potential for adaptive reuse in urban environments.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/Condell_Ext_Hori.jpg",
        alt: "Condell Park Office Exterior",
      },
      {
        type: "text",
        content:
          "The design approach focused on preserving the industrial character of the building while introducing contemporary elements to create a unique and inspiring workspace. Large windows were introduced to flood the interior with natural light, while exposed structural elements were retained to maintain the building's original essence.",
      },
      {
        type: "image",
        src: "/images/Condell_Int01.jpg",
        alt: "Condell Park Office Interior",
      },
      {
        type: "text",
        title: "Innovative Features",
        content:
          "The project incorporates several innovative design elements, including a central atrium that serves as a collaborative hub, flexible workspaces that can be reconfigured based on changing needs, and sustainable features such as rainwater harvesting and energy-efficient lighting systems.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Location", value: "Condell Park, Sydney, Australia" },
      { label: "Year", value: "2021" },
      { label: "Type", value: "Commercial Renovation" },
      { label: "Size", value: "1,200 sq meters" },
    ],
  },
  {
    slug: "parametric-design-studies",
    title: "Parametric Design Studies",
    description: "Computational design experiments inspired by Indian architecture.",
    image: "/images/para02.png",
    category: "Computational Design",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "This series of parametric design studies represents an exploration into the possibilities of computational design, with a particular focus on patterns inspired by Indian architecture.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/parametric-design-1.jpg",
        alt: "Parametric Design Study 1",
      },
      {
        type: "text",
        content:
          "Using Grasshopper, a visual programming language for Rhino 3D, these experiments push the boundaries of what's possible in architectural form-finding and pattern generation.",
      },
      {
        type: "image",
        src: "/images/parametric-design-2.jpg",
        alt: "Parametric Design Study 2",
      },
      {
        type: "text",
        title: "Cultural Influence",
        content:
          "The studies draw upon the rich geometric traditions found in Indian architecture, from intricate jali screens to complex mandala forms, and reinterpret them through a contemporary, computational lens. This work not only showcases technical proficiency in parametric design tools but also demonstrates a deep appreciation for cultural heritage and its potential to inform modern design practices.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Tools", value: "Grasshopper, Rhino 3D" },
      { label: "Year", value: "2020-2023" },
      { label: "Type", value: "Computational Design Research" },
      { label: "Inspiration", value: "Indian Architectural Patterns" },
    ],
  },
  {
    slug: "architectural-photography",
    title: "Architectural Photography",
    description: "Photographic exploration of architectural monuments in North India.",
    image: "/images/raja01_1920x1273.jpg",
    category: "Creative Practice",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "This architectural photography series captures the essence and grandeur of North India's most iconic monuments.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/taj-mahal.jpg",
        alt: "Taj Mahal",
      },
      {
        type: "text",
        content:
          "With a keen eye for composition and a masterful use of natural light, these photographs go beyond mere documentation to reveal the soul of each structure.",
      },
      {
        type: "image",
        src: "/images/humayuns-tomb.jpg",
        alt: "Humayun's Tomb",
      },
      {
        type: "text",
        title: "Photographic Approach",
        content:
          "The collection includes studies of famous sites such as the Taj Mahal, Humayun's Tomb, and the ghats of Varanasi, as well as lesser-known architectural gems. Each image is carefully crafted to highlight the interplay of light and shadow, the intricacy of ornamental details, and the monumental scale of these architectural marvels.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Location", value: "North India" },
      { label: "Year", value: "2019" },
      { label: "Type", value: "Photography Series" },
      { label: "Focus", value: "Historical Monuments" },
    ],
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    description: "Detailed architectural drawings for Project Remediate.",
    image: "/images/dwg.png",
    category: "Technical Documentation",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "This technical documentation project was part of Project Remediate, a large-scale initiative to address combustible cladding in residential apartment buildings across New South Wales.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/technical-drawing-1.jpg",
        alt: "Technical Drawing Example 1",
      },
      {
        type: "text",
        content:
          "The work involved creating detailed architectural drawings and specifications for the removal and replacement of combustible cladding. These documents were crucial for ensuring the safe and compliant execution of remediation works.",
      },
      {
        type: "image",
        src: "/images/technical-drawing-2.jpg",
        alt: "Technical Drawing Example 2",
      },
      {
        type: "text",
        title: "Impact and Importance",
        content:
          "This project demonstrates the critical role of precise technical documentation in addressing significant safety concerns in the built environment. The drawings and specifications produced serve as a vital link between design intent and on-site implementation, ensuring that remediation works are carried out to the highest standards of safety and quality.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Project", value: "Project Remediate" },
      { label: "Year", value: "2022" },
      { label: "Type", value: "Technical Documentation" },
      { label: "Focus", value: "Combustible Cladding Remediation" },
    ],
  },
]

