import type { Project } from "./data/types"

export const projects: Project[] = [
  {
    slug: "wentworth-hotel-mezzanine",
    title: "Sofitel Wentworth Hotel Level 5 Canopy",
    description: "A sophisticated renovation featuring a complex radiating copper canopy with an aircraft wing-like form that protects guests from the elements.",
    image: "/images/Wentworth_Aerial.jpg",
    category: "Built Projects & Professional Work",
    sections: [
      {
        type: "text",
        title: "Architectural Challenge",
        content:
          "The level 5 mezzanine for the Wentworth Hotel in Sydney's CBD was experiencing severe wind issues. The property had sustained multiple instances of damage where chairs had been blown by the wind into the glass surrounding the courtyard. H&E Architects proposed a range of canopies to protect people in the courtyard from the elements and to potentially extend the bar and restaurant space on Level 5.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/wentworth-hotel-canopy.jpg",
        alt: "Wentworth Hotel Copper Canopy",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        title: "Design Inspiration",
        content:
          "The design draws inspiration from the existing building's copper awning on Phillip St and the bronze-finished fluted columns at its base. The primary design concept bridges the gap from the existing curved profile of the building to a circle at its center. The centerpiece of this renovation is an exquisite copper canopy that serves both aesthetic and functional purposes, incorporating an innovative grid shell structure that pushes the boundaries of architectural design and engineering.",
      },
      {
        type: "image",
        src: "/images/Wentworth_Construction.jpg",
        alt: "Wentworth Hotel Construction Progress",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl"
      },
      // Adding smaller images in a two-column layout
      {
        type: "image",
        src: "/images/wentworth-detail-1.jpg",
        alt: "Copper Connection Detail",
        height: "small",
        objectFit: "cover",
        shadow: "md",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/wentworth-detail-2.jpg",
        alt: "Edge Treatment Detail",
        height: "small",
        objectFit: "cover",
        shadow: "md",
        margin: "small"
      },
      {
        type: "text",
        content: "When I joined H&E, the development application for the building had just been accepted. The firm needed someone in Sydney with the skills to create the required geometry to accurately model the canopy shape. This shape is a complex radiating shell structure in which its section not only changes in height and width but also transitions from a truncated dome to an aircraft wing shape at its centre, then back to a truncated dome at a different width.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/Wentworth_Sections.jpg",
        alt: "Wentworth Hotel Canopy Sections",
        height: "medium",
        objectFit: "contain",
        shadow: "md",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/Wentworth_grid.jpg",
        alt: "Wentworth Hotel Canopy Sections",
        height: "medium",
        objectFit: "contain",
        shadow: "md",
        margin: "medium"
      },
      {
        type: "text",
        title: "Technical Innovation",
        content:
          "Documenting such a structure was challenging, with grid lines that were simultaneously radial and circular, overlapping and linear. Once this grid system was in place, the structure could be designed. Cantilever Consulting Engineers assisted us here, with the Director Damian Hadley providing an immense source of knowledge that greatly impressed me. The project scope included not only the canopy but also the ground surfaces, which required a tile setout plan to replace the Greek-inspired heritage tiling—a challenge in itself to document.",
        fullWidth: true,
      },
      // Adding two side-by-side images showing different angles
      {
        type: "image",
        src: "/images/wentworth-view-1.jpg",
        alt: "Canopy View from Below",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/wentworth-view-2.jpg",
        alt: "Canopy Side Perspective",
        height: "medium",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/wentworth-view-3.jpg",
        alt: "Canopy View from Above",
        height: "medium",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "text",
        title: "Computational Approach",
        content: "I would be remiss if I didn't mention the role of technology in bringing the project together. The final version of the massive Grasshopper script generated a flexible version of the canopy shape and also allowed me to reference the Revit model using Rhino.Inside.Revit. Another challenge for this project lay here, both in convincing the firm that we needed to use this tool to generate the geometry and in learning what was, at the time (and remains), an incomplete and partially implemented workflow. Despite the struggles, this technology allowed for unparalleled flexibility and the possibility for highly agile testing for compliance and clash detection.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/Wentworth_Technology.jpg",
        alt: "Parametric Design Technology",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
      {
        type: "image",
        src: "/images/Wentworth_Clash.jpg",
        alt: "Clash Detection in Rhino.Inside.Revit",
        height: "medium",
        objectFit: "cover",
        shadow: "md",
        margin: "medium"
      },
      // Adding a set of smaller process images
      {
        type: "image",
        src: "/images/wentworth-process-1.jpg",
        alt: "Digital Model Process",
        height: "medium",
        objectFit: "cover",
        shadow: "md",
        margin: "medium"
      },
    ],
    details: [
      { label: "Location", value: "Sydney CBD, Australia" },
      { label: "Year", value: "2022-2023" },
      { label: "Type", value: "Commercial Renovation" },
      { label: "Role", value: "Parametric Design & Documentation" },
      { label: "Tools", value: "Grasshopper, Rhino.Inside.Revit, Revit" },
    ],
  },
  {
    slug: "condell-park-office",
    title: "Condell Park Office",
    description: "Adaptive reuse project transforming a warehouse into modern office space for ShoreHire, featuring innovative industrial materials and distinctive design elements.",
    image: "/images/Condell_Hori_01.jpg",
    category: "Built Projects & Professional Work",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "The Condell Park project, as it was known around the office, was an adaptive reuse project for our client ShoreHire, an engineering company specialising in the manufacture and installation of shoring equipment for worksites. The brief was to create an office space using a warehouse that the company had recently purchased to replace their existing offices in the same suburb, as part of larger company changes.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/Condell_Ext_Hori.jpg",
        alt: "Condell Park Office Exterior",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "medium"
      },
      {
        type: "text",
        content:
          "I took on this project right after the concept development stage and carried it through AD to CD, assisting on-site as needed and documenting changes and developments throughout the process. The client favoured a clean industrial look, which was carried through the design process to completion in all aspects.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/Condell_Int01.jpg",
        alt: "Condell Park Office Interior",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        title: "Distinctive Design Elements",
        content:
          "The sweeping matte black spiral staircase is one of two feature staircases. It is set against semi-transparent polycarbonate panelling and feature aluminium block panelling, which is heavily featured in the design. This aluminium panelling is actually a ShoreHire product, originally designed for trenches, reimagined here as an architectural feature.",
      },
      {
        type: "image",
        src: "/images/Condell_Stairs.jpg",
        alt: "Feature Staircase",
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "medium"
      },
      {
        type: "text",
        title: "Innovative Material Use",
        content:
          "The polycarbonate panel extension to the building houses the reception area and amenities on the ground level, while on Level 01, large, bright meeting and conference rooms are housed. The documentation shows the Danpalon polycarbonate panels in elevation, configured in a 'brick' tiling pattern. The window boxes featured here and on the front facade of the project are sized to be as wide as the Danpal panels to seamlessly fit into the design. This required some non-standard fixing methods, which were integrated into the design.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/Condell_Interior_Wide.jpg",
        alt: "Interior Workspace",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        title: "Workspace Innovation",
        content:
          "Possibly the most unique part of the project is inside the warehouse: a large glass and aluminium box housing the main workspace. The proprietary aluminium and channel system were employed in various ways to create a modular walling and glazing system, which was then arrayed to create the office space. The raw milled aluminium finish of these boxes is endlessly interesting, with all of the factory imperfections showing in rainbow colours, which are unfortunately very difficult to capture with a camera. Additionally, the panels were employed in multiple pivot doors, arrayed to create a large, solid, and operable wall.",
        margin: "medium"
      },
    ],
    details: [
      { label: "Location", value: "Condell Park, Sydney, Australia" },
      { label: "Client", value: "ShoreHire" },
      { label: "Year", value: "2021-2022" },
      { label: "Type", value: "Adaptive Reuse / Commercial Renovation" },
      { label: "Role", value: "Documentation & Construction Administration" },
    ],
  },
  {
    slug: "interactive-portfolio-site",
    title: "Interactive Portfolio Website",
    description: "A creative portfolio website featuring dynamic, color-shifting artwork in the hero section, developed in under a week using Next.js, Vercel, and AI assistance.",
    image: "/images/para02.jpg",
    category: "Computational Design",
    sections: [
      {
        type: "text",
        title: "Creative Approach to Web Development",
        content:
          "This portfolio website was conceived and built in under a week by leveraging AI tools to help with coding and design challenges. Though I'm not a full-stack developer, I wanted to create a personalized showcase that would reflect both my architectural design sensibilities and computational interests. I used multiple AI agents to generate much of the code while maintaining creative direction over the project.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/website-overview.jpg",
        alt: "Portfolio Website Overview",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
      {
        type: "text",
        title: "Interactive Hero Section",
        content:
          "The centerpiece of the website is the dynamic hero section featuring color-shifting, morphing shapes that respond to user interaction. Inspired by the fluid, organic forms found in nature and the precision of parametric design, I worked with AI tools to translate my creative vision into functioning code that creates an engaging visual experience.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/hero-interaction.jpg",
        alt: "Interactive Hero Section",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        title: "Collaborative Development",
        content:
          "Rather than writing all the code myself, I took a collaborative approach with AI. I described the desired behavior and aesthetic for the interactive elements, then worked with AI tools to generate the necessary React and Framer Motion code. I then adapted and refined this code to achieve the specific visual effects I wanted, learning about web development concepts along the way.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/hero-code.jpg",
        alt: "Hero Section Code",
        fullWidth: true,
        height: "medium",
        objectFit: "contain",
        shadow: "md",
        margin: "medium"
      },
      {
        type: "text",
        title: "Design-First Approach",
        content:
          "My architectural background informed the visual hierarchy and composition of the site. I focused on creating a coherent user experience that would showcase my work effectively while maintaining visual interest. By combining my design sensibilities with AI-generated code, I was able to create a site that exceeded what I could have built with my coding skills alone.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/responsive-views.jpg",
        alt: "Responsive Design Across Devices",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        title: "Bridging Design and Technology",
        content:
          "This project exemplifies my approach to bridging design and technology - using available tools creatively to realize ideas that might otherwise be beyond my technical capabilities. While I didn't write every line of code, I directed the entire process, made critical design decisions, and learned valuable lessons about web development that will inform future projects.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/content-integration.jpg",
        alt: "Content Integration with Interactive Elements",
        fullWidth: true,
        height: "medium",
        objectFit: "cover",
        shadow: "xl",
        margin: "medium"
      },
      {
        type: "text",
        title: "Learning Outcomes",
        content:
          "This project demonstrated the power of combining architectural thinking with AI tools to create digital experiences. The rapid development timeline forced me to focus on the most impactful elements while delegating technical challenges to AI assistance. The result showcases not just my architectural work, but also my ability to adapt and leverage new technologies to bring creative visions to life.",
        margin: "small"
      },
    ],
    details: [
      { label: "Timeline", value: "Under 1 week" },
      { label: "Technologies", value: "Next.js, React, Framer Motion, Tailwind CSS, Vercel" },
      { label: "Features", value: "AI-assisted development, Interactive hero section, Responsive design" },
      { label: "Role", value: "Creative direction, Design, AI prompt engineering" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    slug: "pyrevit-and-knowledge-management",
    title: "H&E Suite: PyRevit Tools & Knowledge Management",
    description: "Development of custom PyRevit tools and an internal knowledge wiki to streamline workflows, preserve institutional knowledge, and enhance collaboration.",
    image: "/images/pyrevit-tools.jpg",
    category: "Computational Design",
    sections: [
      {
        type: "text",
        title: "Technical Innovation",
        content:
          "After attending the BILT conference in Melbourne in 2024, our tech team was inspired to address the repetitive inefficiencies in our daily workflows. Many tasks, such as setting north points and scale bars across drawing sets of over 130 sheets, were causing significant fatigue among team members. This led to the creation of the H&E Suite, a collection of custom PyRevit tools designed to automate routine tasks and enhance productivity.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/pyrevit-interface.jpg",
        alt: "H&E Suite PyRevit Interface",
        fullWidth: true,
        height: "medium",
        objectFit: "contain",
        shadow: "lg",
        margin: "large"
      },
      {
        type: "text",
        title: "Learning Through Development",
        content:
          "Despite having limited programming experience initially, our team embraced the challenge of creating these tools. We relied heavily on documentation, AI assistance, and collaborative problem-solving. By loading relevant documentation and code into AI tools like Claude, we were able to prototype and generate working code that could be distributed across the office. This process not only produced valuable tools but also expanded our technical capabilities as a team.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/pyrevit-code.jpg",
        alt: "PyRevit Code Development Process",
        height: "medium",
        objectFit: "contain",
        shadow: "md"
      },
      {
        type: "text",
        title: "Measurable Impact",
        content:
          "The implementation of the H&E Suite had a tangible impact on our workflow efficiency. By automating repetitive tasks, we saved our team valuable time that could be redirected toward design development and problem-solving. The tools also ensured greater consistency across projects and reduced the likelihood of human error in repetitive tasks.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/workflow-comparison.jpg",
        alt: "Before and After Workflow Comparison",
        fullWidth: true,
        height: "medium",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "text",
        title: "Knowledge Management Challenge",
        content:
          "In parallel with the PyRevit initiative, I identified a critical need for better knowledge management at H&E. With my planned relocation to Melbourne approaching, there was a risk of losing accumulated knowledge. Additionally, the firm struggled with disparate information sources—valuable expertise existed primarily in the directors' minds or was scattered across an archaic file management system.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/wiki-structure.jpg",
        alt: "Wiki Structure and Organization",
        height: "large",
        objectFit: "cover",
        shadow: "md"
      },
      {
        type: "text",
        title: "Building the Internal Wiki",
        content:
          "Using Microsoft SharePoint, I developed a comprehensive internal wiki that served as a centralized repository for institutional knowledge. The wiki featured detailed procedures and processes, tutorials, technical tips, and helpful links to resources. Although there was initial resistance to adoption, the immediate utility of having information readily accessible eventually won over skeptics, leading to widespread adoption across the firm.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/wiki-interface.jpg",
        alt: "Internal Wiki Interface",
        fullWidth: true,
        height: "medium",
        objectFit: "contain",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "text",
        title: "Overcoming Challenges",
        content:
          "Both initiatives faced significant challenges. Our limited Python expertise initially slowed development of the PyRevit tools, while organizational resistance and risk aversion to new technologies threatened to derail both projects. Through persistence, demonstration of value, and incremental implementation, we were able to overcome these hurdles and create lasting improvements to the firm's technological infrastructure and knowledge management practices.",
        margin: "small"
      },
    ],
    details: [
      { label: "Year", value: "2024" },
      { label: "Technologies", value: "Python, PyRevit, Microsoft SharePoint" },
      { label: "Role", value: "Technical Lead & Knowledge Management Architect" },
      { label: "Impact", value: "Increased workflow efficiency, Preserved institutional knowledge" },
      { label: "Challenges", value: "Limited programming experience, Organizational resistance" },
    ],
  },
  {
    slug: "richmond-regen",
    title: "Richmond Regen",
    description: "Transforming water treatment infrastructure into an ecological parkland with innovative pump towers and rammed earth weirs for natural water filtration.",
    image: "/images/Richmond_Model_Aerial.jpg",
    category: "Research & Concept Projects",
    sections: [
      {
        type: "text",
        title: "Conceptual Framework",
        content:
          "Richmond Regen was my 5th studio assignment at UTS. The brief challenged us to create 'temples at the periphery of society' - beautiful and interesting infrastructural buildings. Our site was a massive plot of land in Richmond, Western Sydney. It was barren except for a water treatment plant.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/richmond-regen-aerial.jpg",
        alt: "Aerial View of Richmond Regen",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
      {
        type: "text",
        title: "Environmental Vision",
        content:
          "We reimagined the water treatment plant as a place that could systematically restore water cleanliness through a series of pump towers and rammed earth weirs. These structures would use gravity and plants to filter the water.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/richmond-regen-tower.jpg",
        alt: "Pump Tower Design",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        content:
          "The project dotted numerous hills with towers and inbuilt weirs across the landscape, forming the foundation of a larger bush regeneration project. The area is surrounded by new housing developments. Our goal was to capture the toxic runoff from the stormwater systems of the built area, clean it, and return it to the Nepean River.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/richmond-regen-overview.jpg",
        alt: "Richmond Regen Overview",
        fullWidth: true,
        height: "medium",
        objectFit: "cover",
        shadow: "xl",
        margin: "medium"
      },
      {
        type: "text",
        title: "Public Amenity",
        content:
          "We envisioned the project as a parkland with a large reservoir for swimming and winding bushwalks, allowing people to interact with both the architecture and landscape. This creates a dual-purpose infrastructure that serves both ecological restoration and community recreation.",
        margin: "small"
      },
    ],
    details: [
      { label: "Location", value: "Richmond, Western Sydney, Australia" },
      { label: "Year", value: "2018" },
      { label: "Type", value: "Academic Studio Project" },
      { label: "Studio", value: "Temples at the Periphery of Society, UTS" },
      { label: "Focus", value: "Infrastructure & Ecological Restoration" },
    ],
  },
  {
    slug: "parametric-design-studies",
    title: "Parametric Design Studies",
    description: "Computational design experiments inspired by Indian architecture and geometric patterns, exploring the possibilities of parametric modeling.",
    image: "/images/para02.png",
    category: "Computational Design",
    sections: [
      {
        type: "text",
        title: "Discovering Parametric Design",
        content:
          "I first discovered Grasshopper when I was at UTS. My initial reaction was, 'Wow, this looks crazy - I don't get it.' I put it in my back pocket. After finishing uni I got a job -- then the pandemic hit and I lost it before I'd even started. I returned to landscaping, but, craving more stimulation, I began learning the tool in earnest.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/parametric-pattern-01.jpg",
        alt: "Parametric Pattern Study",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
      {
        type: "text",
        title: "Pattern Inspirations",
        content:
          "I'm particularly fond of creating patterns, inspired by my trip to India around the time I left uni. Patterns were my entry point into Grasshopper. I studied a book by Hans Hinterreiter, an early geometric artist, and translated his methods into grasshopper scripts. These patterns were further incorporated into object design such as lamps and other applications.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/parametric-lamp.jpg",
        alt: "Parametric Lamp Design",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        content:
          "These experiments have taught me a great deal about parametric geometric design, lessons that have served me well in professional practice, particularly in projects like the Wentworth Hotel canopy where complex geometries needed to be precisely controlled and documented.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/parametric-texture.jpg",
        alt: "Parametric Texture Studies",
        height: "medium",
        objectFit: "contain",
        shadow: "md",
        margin: "medium"
      },
      {
        type: "text",
        title: "Personal Explorations",
        content:
          "This work showcases several experiments I've done in my own time over the years. These include texture studies as well as an experiment turning my partner's handwriting into a jewelry piece using a grasshopper script. I've also experimented with physics plugins, testing catenary arches and combining them with panelization tools to create interesting forms.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/parametric-jewelry.jpg",
        alt: "Parametric Jewelry Design",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
    ],
    details: [
      { label: "Focus", value: "Pattern Generation & Form Finding" },
      { label: "Tools", value: "Grasshopper, Rhino 3D" },
      { label: "Years", value: "2019-Present" },
      { label: "Influences", value: "Indian Architecture, Hans Hinterreiter" },
      { label: "Applications", value: "Object Design, Architectural Elements, Jewelry" },
    ],
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    description: "Detailed architectural drawings for Project Remediate and various other projects, showcasing technical precision and documentation skills.",
    image: "/images/dwg.png",
    category: "Technical Documentation",
    sections: [
      {
        type: "text",
        title: "Professional Drafting",
        content:
          "These drawings were completed over the course of my employment at Northrop Consulting Engineers as a draftsperson in the remedial architecture team. They showcase a mixture of sections and detail drawings from a variety of projects. Interestingly, some of these drawings didn't necessarily warrant the level of visual detail I provided. In fact, the Remedial Engineering Lead, Leo, once commented that my drawings were 'too pretty.' This feedback highlights the balance between aesthetic presentation and practical functionality in technical drawings.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/technical-drawing-1.jpg",
        alt: "Detailed Technical Drawing",
        fullWidth: true,
        height: "large",
        objectFit: "contain",
        shadow: "md",
        margin: "large"
      },
      {
        type: "text",
        title: "Automation Initiatives",
        content:
          "A recurring element in many of these drawings is filled concrete block walls. I drew these so frequently that I eventually automated the section drawings. This was my first venture into task automation in the workplace, an initiative that may have contributed to my selection for the Disruption Lab at Northrop.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/technical-drawing-2.jpg",
        alt: "Concrete Block Wall Detail",
        height: "medium",
        objectFit: "contain",
        shadow: "md"
      },
      {
        type: "text",
        title: "Project Remediate",
        content:
          "The drawings presented here include various specifications for retaining walls. Additionally, you'll find waterproofing details for ACP (Aluminum Composite Panel) cladding systems. These were part of Project Remediate, an Australian initiative to replace flammable cladding materials in buildings.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/technical-drawing-3.jpg",
        alt: "Waterproofing Detail",
        height: "medium",
        objectFit: "contain",
        shadow: "md",
        margin: "medium"
      },
      {
        type: "text",
        title: "Technical Precision",
        content:
          "This work demonstrates the critical role of precise technical documentation in addressing significant safety concerns in the built environment. The drawings and specifications produced serve as a vital link between design intent and on-site implementation, ensuring that remediation works are carried out to the highest standards of safety and quality.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Employer", value: "Northrop Consulting Engineers" },
      { label: "Position", value: "Draftsperson, Remedial Architecture Team" },
      { label: "Years", value: "2020-2022" },
      { label: "Project Focus", value: "Project Remediate, Retaining Walls, Waterproofing Details" },
      { label: "Tools", value: "AutoCAD, Revit" },
    ],
  },
  {
    slug: "architectural-photography",
    title: "Architectural Photography",
    description: "Photographic exploration of architectural monuments in North India and Spain, capturing the essence of historical structures through a personal lens.",
    image: "/images/raja01_1920x1273.jpg",
    category: "Creative Practice",
    sections: [
      {
        type: "text",
        title: "Photographic Approach",
        content:
          "Many of the photos here were captured at architectural monuments in North India during my travels, with the exception of the photo on the right, which was taken at the Alhambra in Granada. I shoot with an SLR camera, using a 50mm lens and a red light filter.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/photo-india-fort.jpg",
        alt: "Red Fort, North India",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
      {
        type: "text",
        content:
          "When photographing, I avoid the classic magazine shots. Instead, I focus on the fundamentals of framing and lighting, waiting for something to catch my eye - an interesting angle, unique lighting, or an atmospheric haze.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/photo-fatehpur.jpg",
        alt: "Fatehpur Sikri",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        title: "Personal Connection",
        content:
          "My favorite photo, shown at the bottom, was taken in a state forest near Batemans Bay. Though I've yet to surpass it, I keep striving to improve. The other images were taken at Red Fort and Fatehpur Sikri, North India. I had studied Fatehpur Sikri as a precedent in my capstone studio at UTS, so visiting it was a profound experience. The red filter on my camera made the granite glow beautifully. All images are unedited, apart from cropping.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/photo-batemans.jpg",
        alt: "Batemans Bay State Forest",
        height: "large",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/photo-alhambra.jpg",
        alt: "Alhambra, Granada",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
    ],
    details: [
      { label: "Locations", value: "North India, Spain, Australia" },
      { label: "Year", value: "2019-2021" },
      { label: "Equipment", value: "SLR Camera, 50mm Lens, Red Light Filter" },
      { label: "Style", value: "Unedited, Focus on Framing and Lighting" },
      { label: "Subject Focus", value: "Historical Monuments, Natural Landscapes" },
    ],
  },
  {
    slug: "sketches-and-drawings",
    title: "Sketches & Drawings",
    description: "A collection of hand drawings showcasing traditional skills and a variety of subjects from botanical studies to pattern explorations.",
    image: "/images/sketch-botanical.jpg",
    category: "Creative Practice",
    sections: [
      {
        type: "text",
        title: "Drawing Practice",
        content:
          "I maintain a sketching practice, finding it both rewarding and helpful in processing the visual world. Most sketches here were created on an e-ink tablet. The botanical and still life sketches are particularly interesting, as they challenge me to capture organic shapes - a departure from the rectilinear nature of architectural drawing.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/sketch-pumpkin.jpg",
        alt: "Butternut Pumpkin Sketch",
        fullWidth: true,
        height: "medium",
        objectFit: "contain",
        shadow: "md",
        margin: "large"
      },
      {
        type: "text",
        content:
          "A wide range of subjects interests me in sketching. Recently, I attempted portrait sketching after my partner laughed at a poor attempt I made of her face. I still have a long way to go in that area!",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/sketch-portrait.jpg",
        alt: "Portrait Sketch",
        height: "medium",
        objectFit: "contain",
        shadow: "md"
      },
      {
        type: "text",
        title: "Pattern Studies",
        content:
          "At the bottom are some pattern studies I have done. I have at this point well over 300 pages of these, too many to show here. So I chose a 3D one, a radial composition and a study of celtic embroidery. These pattern studies connect to my parametric design work, providing inspiration and a foundation for computational explorations.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/sketch-patterns.jpg",
        alt: "Pattern Studies",
        fullWidth: true,
        height: "medium",
        objectFit: "cover",
        shadow: "lg",
        margin: "medium"
      },
      {
        type: "text",
        title: "Technical Drawing",
        content:
          "The butternut pumpkins in the sketch above were ones I planted and nurtured myself. I sketched them while studying shading techniques. The technical drawing sketches were completed during lockdown. They're plans for small furniture pieces I made from scrap wood at my Nonno's house. This ideation process brought me joy, and the resulting bedside table and lamp served me well.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/sketch-furniture.jpg",
        alt: "Furniture Design Sketch",
        height: "large",
        objectFit: "contain",
        shadow: "md"
      },
    ],
    details: [
      { label: "Medium", value: "E-ink Tablet, Graphite, Ink" },
      { label: "Subjects", value: "Botanical, Still Life, Portraits, Patterns, Furniture" },
      { label: "Years", value: "2020-Present" },
      { label: "Purpose", value: "Creative Expression, Design Ideation, Skill Development" },
    ],
  },
  {
    slug: "model-making",
    title: "Model Making",
    description: "Physical architecture models demonstrating craftsmanship and attention to detail in both academic and collaborative contexts.",
    image: "/images/model-structure.jpg",
    category: "Creative Practice",
    sections: [
      {
        type: "text",
        title: "Collaborative Construction",
        content:
          "This large model was a 1:5 mockup of a structural roof element created in a group of 10 people for an assignment. It was a huge challenge pulling this together with so many people. I remember vividly at least 5 wielding spraycans at once getting the steel sheen on the balsa wood. In the end it was too large for the photography studio back drop, but the assignment was a success.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/model-large.jpg",
        alt: "Large Scale Model",
        fullWidth: true,
        height: "large",
        objectFit: "cover",
        shadow: "xl",
        margin: "large"
      },
      {
        type: "text",
        title: "Academic Exploration",
        content:
          "The models on this page were made in my last year of my bachelors degree, both of which I was working with my assignment partner and friend, Harshiv. We liked the way contoured layers looked and wanted to incorporate Ishigami trees in our model, as well as experimenting with 3D printers.",
        margin: "medium"
      },
      {
        type: "image",
        src: "/images/model-contour.jpg",
        alt: "Contoured Model",
        height: "large",
        objectFit: "cover",
        shadow: "lg"
      },
      {
        type: "text",
        content:
          "These physical models represent an important aspect of the architectural design process, allowing for the exploration of form, structure, and material in a tangible way. They complement digital design techniques by providing a hands-on understanding of spatial relationships and structural principles.",
        margin: "small"
      },
      {
        type: "image",
        src: "/images/model-detail.jpg",
        alt: "Model Detail",
        height: "medium",
        objectFit: "cover",
        shadow: "md",
        margin: "medium"
      },
      {
        type: "text",
        title: "Materiality & Craft",
        content:
          "The attention to detail in these models demonstrates not only technical skill but also an understanding of how materials interact and how structural elements come together. The experimentation with different materials and techniques reflects a creative approach to model making that extends beyond simple representation to become an exploratory design tool.",
        fullWidth: true,
      },
    ],
    details: [
      { label: "Materials", value: "Balsa Wood, Cardboard, 3D Printed Elements" },
      { label: "Scale", value: "Various (1:5 to 1:100)" },
      { label: "Years", value: "2017-2018" },
      { label: "Context", value: "Academic Assignments, Bachelor of Architecture" },
      { label: "Influences", value: "Junya Ishigami, Contour Mapping" },
    ],
  }
]     