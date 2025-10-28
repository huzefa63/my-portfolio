"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="overflow-auto h-screen py-20 bg-gray-950 text-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once:true}}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{once:true}}
        >
          Feel free to reach out for collaborations, project discussions, or
          just to say hi! 👋
        </motion.p>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side - Social links */}
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{once:true}}
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to new opportunities and collaborations. You can
              reach me through any of the platforms below.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition"
              >
                <FaEnvelope className="text-xl" /> email
              </a>
              <a
                href="https://github.com/huzefa63"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition"
              >
                <FaGithub className="text-xl" /> github profile
              </a>
              <a
                href="https://linkedin.com/in/huzefa-ratlam-53a821368/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition"
              >
                <FaLinkedin className="text-xl" />{" "}
                Linkedin profile
              </a>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.form
            className="bg-gray-900 rounded-2xl p-8 shadow-lg space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{once:true}}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-4">
              Send a Message
            </h3>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 rounded-lg p-3 text-gray-200 outline-none focus:ring-2 focus:ring-sky-500 transition"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg p-3 text-gray-200 outline-none focus:ring-2 focus:ring-sky-500 transition"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full bg-gray-800 rounded-lg p-3 text-gray-200 outline-none focus:ring-2 focus:ring-sky-500 transition resize-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
