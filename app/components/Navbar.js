import Image from "next/image";
import { Inter } from "@next/font/google";

// Load the Inter font with Bold weight
const inter = Inter({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "@next/font/google";

// Load the Inter font with Bold weight
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export const Navbar = () => {
    return (
        <div className={`${inter.className} w-screen bg-white text-black`}>
            {/* Navbar */}
            <div className="flex justify-between items-center px-8"> {/* Reduced py-4 to py-3 */}
                {/* Logo Section */}
                <div className="flex justify-start">
                    <Image
                        src="/logolight.png"
                        width={300}
                        height={300}
                        alt="Half Skirmish"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-end text-2xl gap-x-8">
                    {/* Home Button */}
                    <button className="relative group text-[24px]">
                        Home
                        <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div> {/* Reduced mt-[17px] to mt-[12px] */}
                    </button>

                    {/* Blog Button */}
                    <button className="relative group text-[24px]">
                        Blog
                        <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div>
                    </button>

                    {/* Portfolio Button */}
                    <button className="relative group text-[24px]">
                        Portfolio
                        <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[12px]"></div>
                    </button>

                    {/* Let's Talk Button with Purple Base to Deep Blue Hover Effect */}
                    <button className="text-[22px] bg-purple-700 dark:bg-red-500 text-white w-[133px] h-[40px] rounded-[20px] hover:bg-[#1D3557] transition-colors">
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden group">
                    <button className="text-3xl">
                        {/* Hamburger Icon */}
                        <span className="block">☰</span>
                    </button>

                    {/* Mobile Menu */}
                    <div className="absolute left-0 right-0 top-16 bg-white w-full flex flex-col items-center space-y-4 mt-4 hidden group-hover:block">
                        {/* Home Button */}
                        <button className="text-[24px] py-2 px-4 w-full text-center">Home</button>

                        {/* Blog Button */}
                        <button className="text-[24px] py-2 px-4 w-full text-center">Blog</button>

                        {/* Portfolio Button */}
                        <button className="text-[24px] py-2 px-4 w-full text-center">Portfolio</button>

                        {/* Let's Talk Button */}
                        <button className="text-[22px] bg-purple-700 dark:bg-red-500 text-white w-full py-2 px-4 text-center rounded-[20px] hover:bg-[#1D3557] transition-colors">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
