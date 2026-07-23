import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Mohammed Montasir",
  lastName: "Abdullah",
  displayName: "Mohammed Montasir Abdullah",
  coverName: "Montasir",
  username: "montasir77889",
  gender: "male",
  pronouns: "he/him",
  bio: "AI, ML Enthusiast and Software Engineer | Computer Vision Researcher.",
  flipSentences: [
    "AI & ML Enthusiast and Software Engineer.",
"Computer Science graduate, BRAC University.",
"Building AI-powered and full-stack applications."
  ],
  address: "Dhaka, Bangladesh",
  phoneNumberB64: "Kzg4MDE1MzgwNTIxNTU=", // +8801538052155
  whatsappNumberB64: "bW9udGFzaXI3Nzg4OUBnbWFpbC5jb20=", // TODO: base64-encode your WhatsApp number, e.g. btoa("+8801XXXXXXXXX")
  emailB64: "bW9udGFzaXI3Nzg4OUBnbWFpbC5jb20=", // TODO: add base64-encoded email
  website: "https://github.com/montasir77889/",
  jobTitle: "AI, ML and Software Engineer",
  jobs: [
    {
      title: "Open to Work",
      company: "AI/ML Engineering & Software Engineering",
      website: "",
      experienceId: "qpain-conference",
    },
  ],
  about: `I'm **Mohammed Montasir Abdullah**, a Computer Science graduate from **BRAC University** based in Dhaka, Bangladesh.

As an **AI & Machine Learning enthusiast and Software Engineer**, I enjoy building intelligent systems and scalable software. My interests include **Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and AI Research**. I work with **PyTorch, TensorFlow, OpenCV**, and the **MERN stack** to develop AI-powered and full-stack applications.

I'm actively seeking opportunities in **AI/ML Engineering, Software Engineering, Computer Vision, and AI Research**, where I can contribute to innovative products while continuing to grow as an engineer.
`,
  avatar: "/avatar/avatar.jpg",
  avatarVariants: {
    lightOff: "/avatar/avatar.jpg",
    lightOn: "/avatar/avatar.jpg",
    darkOff: "/avatar/avatar.jpg",
    darkOn: "/avatar/avatar.jpg",
  },
  ogImage: "",
  namePronunciationUrl: "",
  timeZone: "Asia/Dhaka",
  keywords: [
    "montasir",
    "montasir abdullah",
    "mohammed montasir abdullah",
    "ai ml engineer",
    "computer vision researcher",
    "montasir77889",
  ],
  dateCreated: "2026-07-14", // YYYY-MM-DD
}
