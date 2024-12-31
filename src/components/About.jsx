import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

function About() {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)} // Slide in from the right
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.7 }}
      id="about" className="container mx-auto p-6 bg-white rounded-lg ">
      <motion.h1
        variants={fadeIn("right", 0.3)} // Slide in from the right
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-3xl font-bold text-center mb-2">
        About Us
      </motion.h1>
      <motion.h2
        variants={fadeIn("left", 0.3)} // Slide in from the right
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-xl text-center text-gray-600 mb-6">Discover our mission, vision, and journey</motion.h2>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <motion.div
          variants={fadeIn("left", 0.3)} // Slide in from the right
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">SOMETHING ABOUT US</h3>
          <ul className="list-none space-y-2 text-2xl">
            <li className="flex items-center shadow-lg hover:shadow-xl hover:-mx-1 rounded-full border">
              <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full mr-2">01</span>
              Make a positive impact
            </li>
            <li className="flex items-center shadow-lg hover:shadow-xl hover:-mx-1 rounded-full border">
              <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full mr-2">02</span>
              Challenge the status quo
            </li>
            <li className="flex items-center shadow-lg hover:shadow-xl hover:-mx-1 rounded-full border">
              <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full mr-2">03</span>
              Embrace innovation
            </li>
            <li className="flex items-center shadow-lg hover:shadow-xl hover:-mx-1 rounded-full border">
              <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full mr-2">04</span>
              Foster collaboration
            </li>
            <li className="flex items-center shadow-lg hover:shadow-xl hover:-mx-1 rounded-full border">
              <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full mr-2">05</span>
              Inspire others to succeed
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)} // Slide in from the right
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2">
          <p className="text-2xl font-semibold mb-2 underline text-blue-300">Who are we?</p>
          <p className="text-gray-600 text-justify">
            We're seeking enthusiastic, friendly, and motivated individuals who are eager to elevate their careers
            and work for a rapidly growing tech company in sunny San Diego.
            Our team members thrive on tackling challenges, possess a strong sense of ambition, and take ownership of
            their responsibilities. They are driven by personal and professional growth,
            continuously pushing the boundaries to achieve excellence. At our company, we value innovation,
            collaboration, and a dynamic work environment where each team member can make a significant
            impact. If you're passionate about technology and ready to embrace a fast-paced, high-growth culture,
            we'd love to hear from you!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
