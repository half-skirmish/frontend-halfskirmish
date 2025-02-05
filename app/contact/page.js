"use client";

import { FaLinkedin, FaBehance, FaInstagramSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>

        {/* Contact Info */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold">My Info</h2>
          <p className="mt-2 text-lg">Name: Naman Chaturvedi</p>
          <p className="mt-1 text-lg">Email: namansdiaries@gmail.com</p>
          <div className="mt-4 flex space-x-6">
            <a href="https://www.linkedin.com/in/naman1905" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-blue-600 hover:text-blue-700" />
            </a>
            <a href="https://www.behance.net/naman1905" target="_blank" rel="noopener noreferrer">
              <FaBehance size={30} className="text-blue-400 hover:text-blue-500" />
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

          <div className="mt-4">
            <p className="text-lg">Figma</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">Adobe Photoshop</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">Adobe Premiere Pro</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">Adobe Illustrator</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">Adobe XD</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">Adobe InDesign</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-pink-800 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">Canva</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-pink-400 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">HTML</p>
            <div className="w-full bg-red-200 rounded-full h-2.5">
              <div className="bg-black h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">CSS</p>
            <div className="w-full bg-red-200 rounded-full h-2.5">
              <div className="bg-black h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg">JavaScript</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-black h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
