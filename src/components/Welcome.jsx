import React from 'react';
import PI from '../assets/PI.jpeg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

function About() {
  return (
    <>
      <motion.section
        id="about"
        className="bg-gradient-to-b from-[#c8d6f6] to-[#e4edff] py-16 px-4"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-3xl p-6 md:p-12">
          {/* Text Block */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={fadeIn("left", 0.2)}
          >
            <h1 className="text-4xl font-extrabold mb-3 text-indigo-700">
              Welcome to E-Cell, NIT Patna
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              "Making dreamers into Entrepreneurs"
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
              Entrepreneurship Cell, NIT Patna is a non-profit student-run club founded in 2013 to foster entrepreneurial spirit at the National Institute of Technology Patna. Our mission is to empower aspiring entrepreneurs through events, startup guidance, industry sessions, and resources to turn ideas into real ventures. We aim to bridge the gap between students and the startup ecosystem by fostering business knowledge, market exposure, and investor access.
            </p>
          </motion.div>

          {/* Image Block */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeIn("right", 0.2)}
          >
            <img
              src={PI}
              alt="Professor Incharge"
              className="rounded-full shadow-lg w-36 h-36 md:w-44 md:h-44 object-cover transition-transform hover:scale-105 duration-300"
            />
            <p className="mt-2 font-medium text-gray-800">Professor Incharge</p>
            <a
              href="https://www.nitp.ac.in/profile/omjishukla.me@nitp.ac.in"
              className="text-indigo-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Om Ji Shukla
            </a>
          </motion.div>
        </div>
      </motion.section>


    </>
  );
}

export default About;
