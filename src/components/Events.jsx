import React from "react";
import { eventlist } from "../store/eventlist"; // Ensure eventlist is correctly imported and populated
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

function Events() {
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
      <div className="flex flex-wrap w-full justify-center gap-6">
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
            className="w-[90%] md:w-[30%] bg-white hover:rounded-lg hover:shadow-lg overflow-hidden transition-all"
          >
            {/* Event Image */}
            <img
              src={e.url}
              alt="Event"
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
            {/* Event Details */}
            <div className="p-4">
              <Link
                to={`/event/${e.name}`}
                className="text-blue-500 hover:underline block text-lg font-medium"
              >
                {e.name} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* All Events Button */}
      <button className="px-4 py-2 font-bold border-2 w-fit text-center hover:bg-gray-400 hover:text-blue-700 rounded-full">
        All Past Events
      </button>
    </div>
  );
}

export default Events;
