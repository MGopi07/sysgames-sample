"use client";
import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"lime" | "purple">("lime");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "lime" | "purple";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "lime" ? "purple" : "lime";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:scale-110 transition-transform cursor-pointer border-2 border-white/20"
      aria-label="Toggle Theme"
      title="Switch Theme Color"
    >
      <Palette size={24} className="text-gray-900" />
    </motion.button>
  );
}
