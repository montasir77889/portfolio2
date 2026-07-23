import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "local-marketplace",
    title: "Local Marketplace",
    image:"/projects/local.png",
    categories: ["Full Stack", "Web Development"],
    github: "https://github.com/montasir77889/local-marketplace",
    liveDemo: "https://local-marketplace.vercel.app",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "REST API",
    ],
    description:
      "Developed a full-stack marketplace platform connecting local buyers and sellers.\n- Implemented user authentication, product listings, search, category filtering, cart management, and order processing.\n- Built responsive interfaces with React and Tailwind CSS with RESTful APIs powered by Express.js and MongoDB.",
  },

  {
    id: "shop-billing-system",
    title: "Shop Inventory & Billing System",
    image:"/projects/shop.png",
    categories: ["Full Stack", "Business Application"],
    github: "https://github.com/montasir77889/shop-billing-system",
    liveDemo: "https://shop-system-olive.vercel.app/",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    description:
      "Built a full-stack inventory and billing management system for retail businesses.\n- Implemented invoice generation, inventory tracking, customer management, sales reports, and authentication.\n- Designed an efficient dashboard for managing daily business operations.",
  },

  {
    id: "candle-shop",
    title: "Candle Shop",
    image:"/projects/candle.png",
    categories: ["E-commerce", "Full Stack"],
    github: "https://github.com/montasir77889/candle-shop",
    liveDemo: "https://candle-shop.vercel.app",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
    description:
      "Developed a full-stack e-commerce platform for selling handmade candles.\n- Implemented product browsing, shopping cart, authentication, checkout workflow, and order management.\n- Built a responsive user experience using React and Tailwind CSS.",
  },

  {
    id: "adventure-maze",
    title: "Adventure Maze",
    categories: ["Game Development"],
    github: "https://github.com/montasir77889/adventure-maze",
    liveDemo: "",
    skills: [
      "Python",
      "OpenGL",
      "Computer Graphics",
      "Game Development",
    ],
    description:
      "Created a maze adventure game using Python and OpenGL.\n- Implemented player movement, collision detection, rendering, scoring system, and interactive gameplay mechanics.",
  },
]