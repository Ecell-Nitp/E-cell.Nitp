import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

function Team() {
  const url = "https://www.instagram.com/p/DBQVDQoyclS/?img_index=8";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      window.instgrm.Embeds.process(); // Re-run Instagram embed processing
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, [url]);

  return (
    <div id="team" className="bg-gradient-to-b from-blue-50 to-white py-10 px-4 mt-11">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
        variants={fadeIn("left", 0.1)} // Slide in from the right
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
         className="md:w-1/3 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Get to Know About Our Team
          </h1>
          <p className="text-gray-700 text-lg">
            Meet the dynamic individuals who make up our team for 2024-25. A perfect blend of talent, creativity, and hard work!
          </p>
        </motion.div>

        <motion.div 
        variants={fadeIn("right", 0.1)} // Slide in from the right
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-[30vw] w-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ margin: "0", height: "470px" }}
            ></blockquote>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;
