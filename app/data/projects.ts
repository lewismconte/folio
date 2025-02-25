import type { Project } from "./types"

export const projects: Project[] = [
  {
    slug: "richmond-regen",
    title: "Richmond Regen",
    description: "Transforming water treatment infrastructure into an ecological parkland.",
    image: "/images/richmond-regen.jpg",
    category: "Built Projects & Professional Work",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "The Richmond Regen project is a visionary transformation of existing water treatment infrastructure into a vibrant ecological parkland. This studio project showcases innovative design solutions that blend functionality with environmental consciousness.",
        fullWidth: true,
      },
      // ... rest of the sections remain the same
    ],
    details: [
      { label: "Location", value: "Richmond, Australia" },
      { label: "Year", value: "2023" },
      { label: "Type", value: "Infrastructure Transformation" },
      { label: "Size", value: "50 hectares" },
    ],
  },
  // ... rest of the projects remain the same
]

