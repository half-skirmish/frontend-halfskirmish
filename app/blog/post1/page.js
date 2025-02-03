"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Link href="/" passHref>
            <Image
              src="/logowhite.png" // Replace with your logo path
              alt="Logo"
              width={120}
              height={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </header>

      {/* Blog Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <h1 className="text-5xl font-bold mb-6 text-center leading-tight tracking-tight font-inter">
            The Future of AI in Gaming: How Machine Learning is Changing the Industry
          </h1>

          {/* Author Details */}
          <div className="flex items-center mb-8">
            <Image
              src="/naman.png" // Replace with author's image
              alt="Author Image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold text-lg">Naman Chaturvedi</p>
              <p className="text-sm text-gray-500">
                February 2, 2025 · Category: Gaming
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://drive.google.com/uc?id=14G9plwXhnpw4QqKIVq9HTIgxB4OBPQEf" // Replace with the featured image path
              alt="Featured Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none mb-8 font-roboto">
            <p>With the launch of the RTX 5000 series, NVIDIA's CEO Jensen Huang introduced us to a newer version of Deep-Learning Super Sampling, which is called Multi-Frame Generation.
              Introduced back with the RTX 20 Series in 2018, DLSS has been a crucial part of the newer game releases, as it offers a boost in Frame-rate for even older GPUs, which can be incapable at times, when running a newer title.
            </p>
            <p>The first version of DLSS was showcased as a technology which rendered the visual assets at a lower resolution and would then upscale the picture with the help of the GPU's Tensor Cores. With the 40 Series, NVIDIA announced its Frame Generation Technique, an extension of DLSS.
            </p>
            
          </div>

          {/* Social Media Previews */}
          <div className="flex justify-center space-x-4">
            {/* Add Social Media Icons here if needed */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 mt-12">
        <div className="container mx-auto text-center text-sm text-white">
          © 2025 Half Skirmish. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
