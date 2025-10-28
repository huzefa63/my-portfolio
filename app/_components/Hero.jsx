import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-400">Huzefa Ratlam</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-300">
        Fullstack Developer 💻
      </h2>

      <p className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-300">
        I build complete web applications — from frontend design to backend
        logic. I love creating fast, secure, and user-friendly solutions using
        technologies like React, Next.js, Node.js, and MongoDB.
      </p>

      <div className="flex gap-4 mb-8">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-blue-400 hover:bg-blue-400 hover:text-white text-blue-400 px-6 py-3 rounded-full font-medium transition"
        >
          Contact Me
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-blue-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
