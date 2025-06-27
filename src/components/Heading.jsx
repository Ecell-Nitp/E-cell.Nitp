import React, { useState } from "react";
import logo from "../assets/Logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants.js";

function Heading() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Contact Us", id: "contact" },
    { label: "Events", id: "events" },
    { label: "Team", id: "team" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 shadow"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="E-Cell Logo"
              className="w-[12vw] h-auto md:w-[8vw] max-w-[140px]"
            />
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hidden md:flex items-center space-x-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToComponent(item.id)}
                className="px-5 py-2 font-semibold text-sm text-gray-800 rounded-full border border-[#0066ff] transition-all duration-300
                hover:bg-gradient-to-r hover:from-indigo-100 hover:to-indigo-200 hover:text-indigo-700 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col items-center space-y-3 pb-4 bg-white shadow-sm"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToComponent(item.id)}
                  className="w-[80%] text-center px-4 py-2 font-bold border rounded-full transition-all duration-300
                  hover:bg-gradient-to-r hover:from-indigo-100 hover:to-indigo-200 text-gray-800 hover:text-indigo-700 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Heading;
