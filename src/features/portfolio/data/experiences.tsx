import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "qpain-conference",
    companyName: "QPAIN Conference",
    location: "Bangladesh", // TODO: set the real location
    positions: [
      {
        id: "1",
        title: "Research Presenter",
        employmentPeriod: {
          start: "2026",
        },
        description:
          "- Presented the BE-KNN research project and demonstrated machine learning evaluation methodologies.\n- Communicated research findings to academic and technical audiences.\n- Participated in discussions on machine learning applications and future research directions.",
        skills: ["Machine Learning", "Research", "Public Speaking"],
        isExpanded: true,
      },
    ],
  },
]
