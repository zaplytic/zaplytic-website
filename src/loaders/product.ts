import kanonAcademy from "@/assets/kanon-academy.webp";
import adorn from "@/assets/adorn.webp";
import vimly from "@/assets/vimly.webp";
import railguard from "@/assets/railguard.webp";
import neonGadgets from "@/assets/neongadgets.webp";

export interface Product {
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

export const products = [
  {
    name: "railguard",
    description: "A powerful, self-hosted crash reporting, performance and error monitoring tool.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/zaplytic/railguard",
    image: railguard
  },
  {
    name: "kanon-academy",
    description: "Online Learning Platform",
    technologies: ["TypeScript", "React", "Node.js"],
    githubLink: "https://github.com/zaplytic/kanon-academy",
    liveLink: "https://kanon-academy.pages.dev/",
    image: kanonAcademy
  },
  {
    name: "neongadgets",
    description: "An electronics ecommerce shop",
    technologies: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    githubLink: "https://github.com/zaplytic/neongadgets",
    image: neonGadgets
  },
  {
    name: "vimly",
    description: "Gym based fitness tracker",
    technologies: ["React Native", "TypeScript", "Firebase"],
    githubLink: "https://github.com/zaplytic/vimly",
    image: vimly
  },
  {
    name: "adorn",
    description: "Ornaments eShop in Bangladesh",
    technologies: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    githubLink: "https://github.com/zaplytic/adorn",
    image: adorn
  }
] satisfies Product[];
