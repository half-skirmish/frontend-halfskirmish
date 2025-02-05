"use client";

import { FaLinkedin, FaBehance } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>

        {/* Contact Info */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold">My Info</h2>
          <p className="mt-2 text-lg">Name: Naman Chaturvedi</p>
          <p className="mt-1 text-lg">Email: namansdiaries@gmail.com</p>
          <div className="mt-4 flex space-x-6">
            <a href="https://www.linkedin.com/in/naman1905" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-blue-400 hover:text-blue-500" />
            </a>
            <a href="https://www.behance.net/naman1905" target="_blank" rel="noopener noreferrer">
              <FaBehance size={30} className="text-blue-300 hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">A bit about me</h3>
          <p className="mt-2 text-lg">
            Hi! I am a Graphic Designer, UI/UX Designer, Video Editor, a Hardcore Gamer and Tech-Enthusiast.
          </p>
        </div>

        {/* Interests & Hobbies Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">My Interests & Hobbies</h3>
          <p className="mt-2 text-lg">
            In my free time, I enjoy Gaming, Designing, and reading self-improvement books. I am also passionate about Music,
            Fitness, Technological Innovations and Computer Hardware.
          </p>
        </div>

        {/* Proficiency Level Bars */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">My Design & Development Skills</h3>

          {[
            { skill: "Figma", width: "80%", color: "bg-pink-500" },
            { skill: "Adobe Photoshop", width: "80%", color: "bg-blue-400" },
            { skill: "Adobe Premiere Pro", width: "80%", color: "bg-blue-600" },
            { skill: "Adobe Illustrator", width: "60%", color: "bg-yellow-500" },
            { skill: "Adobe XD", width: "60%", color: "bg-purple-500" },
            { skill: "Adobe InDesign", width: "50%", color: "bg-pink-600" },
            { skill: "Canva", width: "80%", color: "bg-pink-400" },
            { skill: "HTML", width: "40%", color: "bg-red-400" },
            { skill: "CSS", width: "40%", color: "bg-blue-300" },
            { skill: "JavaScript", width: "40%", color: "bg-yellow-400" },
          ].map((item, index) => (
            <div key={index} className="mt-4">
              <p className="text-lg">{item.skill}</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className={`${item.color} h-2.5 rounded-full`} style={{ width: item.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
