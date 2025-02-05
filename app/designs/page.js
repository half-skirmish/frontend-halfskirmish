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
      <div className="relative w-full h-64 mb-8">
        <Image
          src="https://drive.google.com/uc?id=13sUGQwugqrwFaQod8x4RftJvrpPC_TgS"
          alt="Designs Image"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
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
              src="/stock.jpg"
              width={320}
              height={180}
            />
          </a>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">To Be Added</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Category: <span className="font-medium text-black dark:text-white">Design</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Tools: <span className="font-medium text-black dark:text-white">Adobe Suite, Figma</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Date: <span className="font-medium text-black dark:text-white">To Be Added.</span></p>
          </div>
        </div>
      </div>
      
       {/* Horizontal Separator */}
       <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-16 rounded-full"></div>

      {/* Spacer before Footer */}
      <div className="h-16 bg-white dark:bg-black" />

      {/* Footer */}
      <Footer className="w-full bg-white dark:bg-black text-black dark:text-white" />
    </section>
  );
}
