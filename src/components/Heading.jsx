import React, { useState } from "react";
import logo from "../assets/Logo.jpg";

function Heading() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  // Function to scroll to a component section
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className="bg-white sticky top-0 w-full z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-3">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="w-[10vw] h-[10vw] md:w-[10vw] md:h-[5vw] "
            />
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button onClick={() => scrollToComponent("about")} className="px-3 py-2 font-bold border-2 hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              About
            </button>
            <button onClick={() => scrollToComponent("contact")} className="px-3 py-2 font-bold border-2 hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              Contact Us
            </button>
            <button onClick={() => scrollToComponent("events")} className="px-3 py-2 font-bold border-2 hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              Events
            </button>
            <button onClick={() => scrollToComponent("team")} className="px-3 py-2 font-bold border-2 hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              Team
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-2 pb-4">
            <button onClick={() => scrollToComponent("about")} className="px-3 py-2 font-bold border-2 w-[80%] text-center hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              About
            </button>
            <button onClick={() => scrollToComponent("contact")} className="px-3 py-2 font-bold border-2 w-[80%] text-center hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              Contact Us
            </button>
            <button onClick={() => scrollToComponent("events")} className="px-3 py-2 font-bold border-2 w-[80%] text-center hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              Events
            </button>
            <button onClick={() => scrollToComponent("team")} className="px-3 py-2 font-bold border-2 w-[80%] text-center hover:bg-gray-200 hover:text-blue-400 hover:underline rounded-full">
              Team
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Heading;
