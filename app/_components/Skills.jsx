"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandVisualStudio, TbDatabase } from "react-icons/tb"; // for mongoose icon alternative

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      {
        name: "WebSockets",
        icon: <SiSocketdotio className="text-purple-500" />,
      },
    ],
  },
  {
    category: "Database & ORM",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Mongoose", icon: <TbDatabase className="text-red-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      {
        name: "VS Code",
        icon: <TbBrandVisualStudio className="text-blue-500" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-gray-200 h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once:true}}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-sky-800/30 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{once:true}}
            >
              <h3 className="text-xl font-semibold mb-4 text-sky-400">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-lg hover:translate-x-1 transition"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
