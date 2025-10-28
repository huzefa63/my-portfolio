"use client";
import './globals.css'
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <AnimatePresence mode="wait">
          <motion.main
            key={typeof window !== "undefined" ? window.location.pathname : ""}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
