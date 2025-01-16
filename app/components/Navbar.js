import Image from "next/image";

export const Navbar = () =>{
    return(
     <div className="grid grid-cols-3 w-screen items-center text-white bg-gray-800 px-8"> 
        <div className="flex justify-start">
            <Image
            src={'/logodark.png'}
                width = {300}
                height = {300}
                alt="Half Skirmish"
                >
            </Image>
        </div>
        <div className="flex justify-center text-2xl">
            <ul className="flex gap-x-8">
                <li>Home</li>
                <li>|</li>
                <li>Blog</li>
                <li>|</li>
                <li>Portfolio</li>
            </ul>
        </div>
        <div className="flex justify-end text-2xl">
            <button>Contact Me</button>
        </div>
     </div>
    )
}

