"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link"; // Importing Link for navigation

// Load the Inter font with Bold weight
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const MenuonClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={`${inter.className} w-screen bg-white text-black`}>
            {/* Navbar */}
            <div className="flex justify-between items-center px-8 relative">
                {/* Logo Section */}
                <div className="flex justify-start items-center">
                    <Image
                        src="/logolight.png"
                        width={300}
                        height={300}
                        alt="Half Skirmish"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-end items-center text-2xl gap-x-8">
                    {/* Home Button */}
                    <Link href="/">
                        <button className="relative group text-[24px]">
                            Home
                            <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div>
                        </button>
                    </Link>

                    {/* Blog Button */}
                    <Link href="/blog">
                        <button className="relative group text-[24px]">
                            Blog
                            <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div>
                        </button>
                    </Link>

                    {/* Designs Button */}
                    <Link href="/designs">
                        <button className="relative group text-[24px]">
                            Designs
                            <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div>
                        </button>
                    </Link>

                    {/* Youtube Button */}
                    <a
                        href="https://www.youtube.com/@halfskirmish/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                    >
                        <button className="relative group text-[24px]">
                            Youtube
                            <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-red-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div>
                        </button>
                    </a>

                    {/* Let's Talk Button */}
                    <button className="text-[22px] bg-purple-700 text-white w-[133px] h-[40px] rounded-[20px] hover:bg-[#1D3557] transition-colors">
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden absolute top-1/2 right-8 transform -translate-y-1/2 z-50">
                    <button
                        className={`text-3xl transition-all duration-300 ease-in-out ${
                            visible ? "rotate-180" : ""
                        }`}
                        onClick={MenuonClick}
                    >
                        {/* Hamburger Icon with 3 lines */}
                        <div
                            className={`block w-6 h-0.5 bg-black my-1 transition-all duration-300 ease-in-out ${
                                visible ? "rotate-45 translate-y-2" : ""
                            }`}
                        ></div>
                        <div
                            className={`block w-6 h-0.5 bg-black my-1 transition-all duration-300 ease-in-out ${
                                visible ? "opacity-0" : ""
                            }`}
                        ></div>
                        <div
                            className={`block w-6 h-0.5 bg-black my-1 transition-all duration-300 ease-in-out ${
                                visible ? "rotate-45 translate-y-[-8px]" : ""
                            }`}
                        ></div>
                    </button>
                </div>

                {/* Mobile Menu (Slide in from the right) */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-white transform transition-transform duration-300 ease-in-out z-40 ${
                        visible ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col items-center space-y-4 mt-16">
                        {/* Home Button */}
                        <Link href="/">
                            <button className="text-[24px] py-2 px-4 w-full text-center">Home</button>
                        </Link>

                        {/* Blog Button */}
                        <Link href="/blog">
                            <button className="text-[24px] py-2 px-4 w-full text-center">Blog</button>
                        </Link>

                        {/* Designs Button */}
                        <Link href="/designs">
                            <button className="text-[24px] py-2 px-4 w-full text-center">Designs</button>
                        </Link>

                        {/* YouTube Button */}
                        <a
                            href="https://www.youtube.com/@halfskirmish/" // YT LINK
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[24px] py-2 px-4 w-full text-center"
                        >
                            YouTube
                        </a>

                        {/* Let's Talk Button */}
                        <button className="text-[24px] py-2 px-4 w-full text-center">Let's Talk</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

