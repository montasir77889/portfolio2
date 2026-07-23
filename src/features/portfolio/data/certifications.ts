import type { Certification } from "../types/certifications"

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    certificateImage: "/certificate/python.png",
    issueDate: "2026-06-03",
    credentialID: "48042144",
    credentialURL:
      "https://www.datacamp.com/courses/intro-to-python-for-data-science?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=coursedetailpage",
    featured: true,
    tags: ["Python", "Data Science", "AI"],
  },

  {
    title: "Developing Machine Learning Models for Production",
    issuer: "DataCamp",
    certificateImage: "/certificate/machine.png",
    issueDate: "2025-09-01",
    credentialID: "42837578",
    credentialURL:
      "https://www.datacamp.com/courses/developing-machine-learning-models-for-production?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=coursedetailpage",
    tags: [
      "Machine Learning",
      "Production",
      "PyTorch",
      "MLOps",
    ],
  },

  {
    title: "MLOps Concepts",
    issuer: "DataCamp",
    certificateImage: "/certificate/mlops.png",
    issueDate: "2025-09-01",
    credentialID: "42812182",
    credentialURL:
      "https://www.datacamp.com/courses/mlops-concepts?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=coursedetailpage",
    tags: [
      "MLOps",
      "CI/CD",
      "Deployment",
    ],
  },

  {
    title: "MLOps Deployment and Life Cycling",
    issuer: "DataCamp",
    certificateImage: "/certificate/MLOps_deployment.png",
    issueDate: "2025-09-02",
    credentialID: "42849303",
    credentialURL:
      "https://www.datacamp.com/courses/mlops-deployment-and-life-cycling?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=coursedetailpage",
    tags: [
      "Deployment",
      "Monitoring",
      "Automation",
    ],
  },

  {
    title: "Fully Automated MLOps",
    issuer: "DataCamp",
    certificateImage: "/certificate/auto-mlops.png",
    issueDate: "2025-09-02",
    credentialID: "42853414",
    credentialURL:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/ba462f64db25af3aabccc743dd6a2351d0548234?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    tags: [
      "Automation",
      "CI/CD",
      "Model Serving",
    ],
  },
]