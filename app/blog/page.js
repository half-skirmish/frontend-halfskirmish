"use client";
import { Navbar } from "../components/Navbar"; // Use named import
import Image from "next/image"; // Import Image component
import Footer from '../components/Footer'; // Import Footer component

export default function Blog() {
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

      {/* First Post */}
      <div className="flex justify-start items-center w-full mb-16 pl-16">
        {/* Image Box */}
        <a href="/post1" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            className="rounded-2xl"
            alt="Blog Post Image"
            src="/red.jpg"
            width={320}
            height={180}
          />
        </a>

        {/* Post Details on the Right */}
        <div className="ml-5 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-semibold mb-2">Post Title 1</h2>
          <p className="text-lg text-gray-600 mb-2">
            by <span className="font-medium">Author Name</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Published on: <span className="font-medium">January 25, 2025</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: <span className="font-medium">Technology</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Tags: <span className="font-medium">React, Next.js, Web Development</span>
          </p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="w-16 h-0.5 bg-black mx-auto mb-16 rounded-full"></div>

      {/* Second Post */}
      <div className="flex justify-start items-center w-full mb-16 pl-16">
        {/* Image Box */}
        <a href="/post2" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            className="rounded-2xl"
            alt="Blog Post Image"
            src="/red.jpg"
            width={320}
            height={180}
          />
        </a>

        {/* Post Details on the Right */}
        <div className="ml-5 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-semibold mb-2">Post Title 2</h2>
          <p className="text-lg text-gray-600 mb-2">
            by <span className="font-medium">Author Name</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Published on: <span className="font-medium">January 26, 2025</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: <span className="font-medium">Health</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Tags: <span className="font-medium">Fitness, Nutrition, Health</span>
          </p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="w-16 h-0.5 bg-black mx-auto mb-16 rounded-full"></div>

      {/* Third Post */}
      <div className="flex justify-start items-center w-full mb-16 pl-16">
        {/* Image Box */}
        <a href="/post3" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            className="rounded-2xl"
            alt="Blog Post Image"
            src="/red.jpg"
            width={320}
            height={180}
          />
        </a>

        {/* Post Details on the Right */}
        <div className="ml-5 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-semibold mb-2">Post Title 3</h2>
          <p className="text-lg text-gray-600 mb-2">
            by <span className="font-medium">Author Name</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Published on: <span className="font-medium">January 27, 2025</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: <span className="font-medium">Science</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Tags: <span className="font-medium">Physics, Astronomy, Science</span>
          </p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="w-16 h-0.5 bg-black mx-auto mb-16 rounded-full"></div>
      {/* Spacer before Footer */}
      <div className="h-16 bg-white" />

      {/* Footer */}
      <Footer className="w-full" />
    </section>
  );
}
