import Image from "next/image";
import { Inter } from "@next/font/google";

// Load the Inter font with Bold weight
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export const Navbar = () => {
    return (
        <div className={`${inter.className} grid grid-cols-2 w-screen items-center text-black bg-white px-8`}>
            {/* Logo Section */}
            <div className="flex justify-start">
                <Image
                    src="/logolight.png"
                    width={300}
                    height={300}
                    alt="Half Skirmish"
                />
            </div>

            {/* Buttons Section */}
            <div className="flex justify-end text-2xl gap-x-8">
                {/* Home Button */}
                <button className="relative group text-[24px]">
                    Home
                    <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[17px]"></div>
                </button>

                {/* Blog Button */}
                <button className="relative group text-[24px]">
                    Blog
                    <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[17px]"></div>
                </button>

                {/* Portfolio Button */}
                <button className="relative group text-[24px]">
                    Portfolio
                    <div className="absolute left-0 right-0 mx-auto h-1 w-full rounded-md bg-purple-700 group-hover:opacity-100 transition-opacity opacity-0 mt-[17px]"></div>
                </button>

                {/* Let's Talk Button with Purple Base to Deep Blue Hover Effect */}
                <button className="text-[22px] bg-purple-700 dark:bg-red-500 text-white w-[133px] h-[40px] rounded-[20px] hover:bg-[#1D3557] transition-colors">
                    Let's Talk
                </button>
            </div>
        </div>
    );
};
