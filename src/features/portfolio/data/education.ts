import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "brac-university",
    school: "BRAC University",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    period: {
      start: "2021-Fall-semester", // TODO: set the real start year
      end: "2025_Fall-semester", // TODO: set the real end year
    },
    description: "CGPA: 3.20 / 4.00",
    skills: [
      "Machine Learning",
      "Deep Learning & Neural Network",
      "Computer Vision",
      "OOP",
      "Data Structures & Algorithms",
      "Python",
      "Advanced Algorithm",
      "Data Science",
      "Artificial Intiligence",
      "Computer Networks",
      "Computer Architecture",


    ],
    isExpanded: true,
  },
]
