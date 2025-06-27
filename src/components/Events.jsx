import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

function Events({eventlist,showAll}) {
  return (
    <div
      id="events"
      className="flex flex-col items-center space-y-6 mt-20 bg-gradient-to-b from-blue-50 to-white py-10 px-5"
    >
      {/* Header Section */}
      <h1 className="text-2xl font-semibold">Past Events Organised</h1>
      <h2 className="text-lg text-center text-gray-600">
        Get a glimpse into our series of events
      </h2>

      {/* Events Grid */}
      <div className="flex flex-wrap w-full justify-center gap-6 max-w-6xl">
        {eventlist.map((e, index) => (
          <motion.div
            variants={fadeIn(
              index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right",
              0.3
            )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            key={index}
            className="w-[90%] sm:w-[45%] md:w-[30%] bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-[400px]"
          >
            {/* Event Image Container */}
            <div className="flex-1 min-h-0 relative overflow-hidden">
              <img
                src={e.url}
                alt={e.name}
                className="absolute top-0 left-0 w-full h-full object-contain object-center p-2"
              />
            </div>
            
            {/* Event Details */}
            <div className="p-4 border-t border-gray-100">
              <Link
                to={`/event/${e.name}`}
                className="text-blue-600 hover:text-blue-800 text-lg font-medium flex justify-between items-center"
              >
                {e.name}
                <span className="text-gray-500">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* All Events Button */}
      {showAll && <Link to='/allevents' className="px-6 py-2 font-medium border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors mt-6">View All Past Events</Link>}
    </div>
  );
}

export default Events;