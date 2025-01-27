// Designs Page
"use client";
import { Navbar } from "../components/Navbar"; // Use named import
import Image from "next/image"; // Import Image component
import Footer from '../components/Footer'; // Import Footer component

export default function Designs() {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Navbar */}
      <Navbar />

      {/* Introduction Image */}
      <div className="mb-8">
        <img
          src="/stock.jpg"
          alt="Blog Image"
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 px-4 sm:px-16 w-full">
        {/* Box 1 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-1" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 1</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Technology</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">React, Next.js</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">January 25, 2025</span></p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-2" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 2</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Health</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Fitness Tracker</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">January 26, 2025</span></p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-3" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 3</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Science</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Physics Simulations</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">January 27, 2025</span></p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-4" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 4</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Health</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Yoga, Meditation</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">January 28, 2025</span></p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-5" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 5</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Technology</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Web Development</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">January 29, 2025</span></p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-6" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 6</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Science</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Chemistry Lab</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">January 30, 2025</span></p>
          </div>
        </div>

        {/* Box 7 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-7" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 7</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Health</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Mental Health</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">February 1, 2025</span></p>
          </div>
        </div>

        {/* Box 8 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-8" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 8</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Technology</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">AI, Machine Learning</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">February 2, 2025</span></p>
          </div>
        </div>

        {/* Box 9 */}
        <div className="flex items-center space-x-4">
          <a href="/designs/post-9" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              className="rounded-2xl"
              alt="Blog Post Image"
              src="/red.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black mb-2">Title 9</h3>
            <p className="text-sm text-gray-600 mb-1">Category: <span className="font-medium">Science</span></p>
            <p className="text-sm text-gray-600 mb-1">Tools: <span className="font-medium">Space Exploration</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-medium">February 3, 2025</span></p>
          </div>
        </div>
      </div>

      {/* Spacer before Footer */}
      <div className="h-16 bg-white" />

      {/* Footer */}
      <Footer className="w-full" />
    </section>
  );
}
