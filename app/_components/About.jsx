"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 h-screen flex flex-col justify-center bg-gray-950 text-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-10 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a passionate{" "}
          <span className="text-sky-400 font-medium">Fullstack Developer </span>
          who loves building dynamic and user-friendly web applications. My
          journey started with curiosity about how websites work, and over time,
          I’ve developed strong expertise in both front-end and back-end
          technologies. I enjoy creating modern, responsive, and efficient web
          experiences that make a difference.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-10 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I specialize in technologies like React, Next.js, Node.js, and
          PostgreSQL — focusing on delivering seamless fullstack solutions. I’m
          constantly learning and improving to stay at the forefront of web
          development trends.
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start gap-6 text-4xl mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <FaReact
            className="text-sky-400 hover:scale-110 transition"
            title="React"
          />
          <SiNextdotjs
            className="text-white hover:scale-110 transition"
            title="Next.js"
          />
          <FaNodeJs
            className="text-green-500 hover:scale-110 transition"
            title="Node.js"
          />
          <SiTailwindcss
            className="text-cyan-400 hover:scale-110 transition"
            title="Tailwind CSS"
          />
          <SiPostgresql
            className="text-sky-600 hover:scale-110 transition"
            title="PostgreSQL"
          />
        </motion.div>
      </div>
    </section>
  );
}
