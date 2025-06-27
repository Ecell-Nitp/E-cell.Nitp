import React from "react";
import Events from "../components/Events";
import { eventlist } from "../store/eventlist";
import logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";

function AllEvents() {
  const navigate = useNavigate();

  return (
    <>
      {/* Simple Navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="w-[12vw] h-auto md:w-[8vw] max-w-[140px]"
            />
          </div>

          {/* Back Button */}
          <div>
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 font-semibold text-sm text-gray-800 rounded-full border border-[#0066ff] transition-all duration-300
              hover:bg-gradient-to-r hover:from-indigo-100 hover:to-indigo-200 hover:text-indigo-700 hover:scale-105"
            >
              ← Back
            </button>
          </div>
        </div>
      </nav>

      {/* Events Grid */}
      <Events eventlist={eventlist} showAll={false} />
    </>
  );
}

export default AllEvents;
