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
                February 4, 2025 · Category: Gaming
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
            <p>
            Frame Generation uses the GPU and the info of the consecutive frames to fill-in AI-generated frames, which provides a boost in framerate. When DLSS, it only included the render resolution, now its offers various options in most of the newer titles, upgraded to Multi-Frame Generation. Similar to DLSS, there exists Fidelity FX Super Resolution (FSR) from AMD and XeSS from Intel. The upscaling isn't just restricted to PCs, even the newly launched PS5 Pro comes with PSSR, a similar technology used to upscale a lower resolution to boost the frames.
            </p>
            <p>
            Based on what we have witnessed with the AI Frame-Gen tech, we can expect future innovations with Game Engines, which can provide us with smarter NPCs in an environment which may adapt to your playstyle, adding more immersion to your gameplay experiences. More innovations in the gaming field will allow the players to experience a better visual quality complemented with lower latency. With the hardware becoming more capable of generating assets, the development process of the game.
          </p>
          <p>
          The current generation of consoles comprises of high-speed data transfers SSDs, using Machine Learning we may be able to predict the movement of the player based on the playstyle. Depending on this, the AI can relatively generate assets in the environment to cope-up with the temperatures and power draw of the system. The development time for vast maps in open-worlds can be shortened, if the AIs are provided with the required assets and prompts.</p>
          <p>As we talk of the playstyle, we can also take into consideration, the difficulty levels. This can also help out in real-time difficulty adjustments. We already are occupied with features like Game-Help on the PlayStation 5 which allows the users to see hints in the game.
          AI can have its advantages and disadvantages. The advantages were well discussed above, however, their are cons to this technological route as well.
          <br></br>
          </p>

          {/* Featured Image */}
          <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://drive.google.com/uc?export=view&id=158_vuRfaiC8m7oeVVKe6cjz9Uf-Jp5jq" // Replace with the featured image path
              alt="Featured Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <p> Firstly, the hardware requirements to run the AI LLMs is significantly higher at the time, resulting in increased cost of integrating AI in games. Another negative is the latency which is usually caused by the addition of the artificial frames, or as the community likes to call it, "FAKE FRAMES", which cause ghosting in-game and reduced optimization. Since the AI model is writing the code, there's a high chance, a developer would need time to optimize the process and bugs which is often time-taking.
          </p>
          <p>
          AI has its advantages and disadvantages, but with the recent innovations of AI, LLMs and ML techniques, we can definitely expect some great features in games in the upcoming years.
          </p>

          </div>

          {/* Social Media Previews */}
          <div className="flex justify-center space-x-4">
            {/* Add Social Media Icons here if needed */}
          </div>
        </div>
        {/* Horizontal Separator */}
      <div className="w-16 h-0.5 bg-black mx-auto mb-16 rounded-full"></div>
      
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
