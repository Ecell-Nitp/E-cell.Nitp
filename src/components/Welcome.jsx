import React from 'react';
import PI from '../assets/PI.jpeg';

function About() {
    return (
        <>
        <div className="container mt-14 p-4 flex flex-col-reverse md:flex-row items-center md:items-start gap-8 bg-gradient-to-t from-[#c8d6f6] to-[#ffffff]">
            <div className="flex-1 px-4 md:px-6 text-center md:text-left">
                <h1 className="font-bold font-title text-lg md:text-2xl my-2">
                Welcome to E-cell, NIT Patna
                </h1>
                <h2 className="font-bold font-title text-lg md:text-xl my-2">
                "Making dreamers into Entrepreneurs"
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Entrepreneurship Cell, NIT Patna is a non-profit college club run by students of NIT Patna, founded in 2013 with the objective of increasing the spirit of Entrepreneurship among students of National Institute of Technology Patna. Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs to start and grow their businesses by creating a pathway of various opportunities like interactive sessions with professionals and founders, business competitions, business quizzes and financial awareness programs. This helps foster entrepreneurial thinking, promote business knowledge and increase confidence in students. Our vision is to help students who have an idea, product and burning desire by providing convincing skills, market exposure and investors for their start-up. This cell helps students to understand the business world by actually working in a start-up.

                </p>
            </div>

            <div className="flex flex-col items-center my-auto w-full sm:w-3/4 md:w-[25%] ">
                <img
                src={PI}
                alt="Professor Incharge"
                className="rounded-full mb-2 shadow-md w-32 h-32 md:w-40 md:h-40 object-cover"
                />
                <p className="text-center font-semibold text-black">Professor Incharge</p>
                <a
                href="https://www.nitp.ac.in/profile/omjishukla.me@nitp.ac.in"
                className="text-center text-blue-600 hover:underline"
                >
                Dr. Om Ji Shukla
                </a>
            </div>
        </div>

        <div class="relative bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#aac5ff" /> 
              <stop offset="100%" stopColor="#c8d6f6" /> 
            </linearGradient>
          </defs>
          <path
            d="M0,0 V40 C300,80 600,10 900,60 C1100,90 1200,20 1200,0 Z"
            fill="url(#blueGradient)"
          ></path>
        </svg>
    </div>
    </>
    );
}

export default About;
