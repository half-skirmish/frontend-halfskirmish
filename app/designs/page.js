// Designs page
"use client";
import { Navbar } from "../components/Navbar";  // Use named import

export default function Designs() {
    return (
        <section className='bg-grey-500 flex flex-col items-center justify-center'>
            {/* Navbar */}
            <Navbar /> {/* Add Navbar component */}
            
            {/* Introduction Image */}
            <div>
                <img
                    src="/stock.jpg"
                    alt="Blog Image"
                />
            </div>

            {/* Content */}
            <div style={{ padding: "20px" }}>
                <h1>Design Section</h1>
                <p>Welcome to the Design section! Add your posts here.</p>
            </div>
        </section>

        
    );
}
