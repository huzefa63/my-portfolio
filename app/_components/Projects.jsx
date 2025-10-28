"use client";
import { motion } from "framer-motion";
import { FaReact, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const projects = [
  {
    title: "MyBazarr",
    description:
      "A full-stack peer-to-peer marketplace with OTP-based authentication, item listings, order management, and secure online payments.",
    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <SiMongodb key="mongo" />,
      <SiMongoose key="mongoose" />,
    ],
    live: "https://www.my-bazarr.in",
    github: "#",
  },
  {
    title: "Spendify",
    description:
      "A modern expense management web app that helps users track and visualize their spending. Built with Next.js, Tailwind, and MongoDB for persistent data storage.",
    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <SiMongodb key="mongo" />,
      <SiMongoose key="mongoose" />,
    ],
    live: "https://spendify-53.vercel.app",
    github: "#",
  },
  {
    title: "Whispr",
    description:
      "A real-time social messaging platform built with Next.js, Prisma, and PostgreSQL. Features include user authentication, message threads, and modern UI built with Tailwind.",
    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <SiPostgresql key="postgres" />,
      <SiPrisma key="prisma" />,
    ],
    live: "https://whispr-app.vercel.app/home",
    github: "#",
  },
  {
    title: "Weather Horizon",
    description:
      "A sleek weather forecasting web app that displays real-time temperature, humidity, and wind speed using public weather APIs. Built using React and Tailwind CSS.",
    tech: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />],
    live: "https://weather-horizon.netlify.app",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-sky-800/30 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-sky-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex gap-3 text-xl mb-4 text-gray-300">
                {project.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Live <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Code <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
