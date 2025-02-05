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
      <div className="relative w-full h-64 mb-8">
        <Image
          src="https://drive.google.com/uc?id=140KFz2bbICEYIn0lQaZHZU2zm2ilse-Y"
          alt="Blog Image"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>

      {/* First Post */}
      <div className="flex justify-start items-center w-full mb-16 pl-16">
        {/* Image Box */}
        <a href="/blog/post1" className="w-80 h-48 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            className="rounded-2xl"
            alt="Blog Post Image"
            src="https://drive.google.com/uc?export=view&id=13qKYUie8APx0Jue8QhJHaTchTRujcshF"
            width={320}
            height={180}
          />
        </a>

        {/* Post Details on the Right */}
        <div className="ml-5 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">The Future of AI in Gaming</h2>
          <p className="text-lg text-gray-600 mb-2 dark:text-gray-300">
            by <span className="font-medium text-black dark:text-white">Naman Chaturvedi</span>
          </p>
          <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
            Published on: <span className="font-medium text-black dark:text-white">Feb 4, 2025</span>
          </p>
          <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
            Category: <span className="font-medium text-black dark:text-white">Gaming</span>
          </p>
          <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
            Tags: <span className="font-medium text-black dark:text-white">Gaming, Tech, AI</span>
          </p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-16 rounded-full"></div>

      {/* Spacer before Footer */}
      <div className="h-16 bg-white dark:bg-black" />

      {/* Footer */}
      <Footer className="w-full" />
    </section>
  );
}
