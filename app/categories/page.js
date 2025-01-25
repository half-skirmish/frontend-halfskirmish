"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { useEffect, useState } from "react";

export default function Categories() {
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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: isDarkMode ? "#121212" : "white",
      }}
    >
      {/* Back Button */}
      <Link href="/">
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            backgroundColor: isDarkMode ? "#1abc9c" : "#6b21a8", // Teal in dark mode, Purple in light mode
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderTop: `2px solid ${isDarkMode ? "black" : "white"}`, // Arrow color: black for dark mode, white for light mode
              borderLeft: `2px solid ${isDarkMode ? "black" : "white"}`, // Arrow color: black for dark mode, white for light mode
              transform: "rotate(-45deg)",
              marginLeft: "2px",
            }}
          ></span>
        </div>
      </Link>

      {/* Heading Box with rounded rectangle stroke */}
      <div
        style={{
          backgroundColor: isDarkMode ? "#121212" : "white", // Lighter in dark mode
          borderRadius: "30px", // Rounded corners for the rectangle
          padding: "20px 40px",
          marginBottom: "40px",
          display: "inline-block",
          boxSizing: "border-box", // Ensures padding is accounted for in the size
          border: `5px solid ${isDarkMode ? "#1abc9c" : "#6b21a8"}`, // Rounded rectangle stroke color
        }}
      >
        <h1
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "64px",
            color: isDarkMode ? "white" : "black",
            margin: 0,
            paddingBottom: "10px", // Adds space between the text and the line
          }}
        >
          CATEGORIES
        </h1>
      </div>

      {/* Box container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // Distribute space equally between the boxes and separator
          alignItems: "center",
          width: "100%", // Ensures the container takes up full width
          maxWidth: "1200px", // Optional: Set max width if needed
          padding: "0 20px", // Optional: Adds horizontal padding to container
        }}
      >
        {/* Blog Category Box */}
        <Link href="/blog" passHref>
          <div
            style={{
              width: "440px",
              height: "440px",
              borderRadius: "45px",
              overflow: "hidden", // Ensure contents don't spill out
              transition: "box-shadow 0.3s ease", // Smooth transition for the box-shadow on hover
              position: "relative", // For proper positioning of the Image
              display: "block", // Ensures the anchor tag covers the box area
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = isDarkMode
                ? "0 0 0 4px white"
                : "0 0 0 4px #1D3557")
            } // Hover effect
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Image
              src="/blog-image.jpg" // Replace with your actual blog image
              alt="Blog Category"
              layout="fill" // Ensures the image fills the div
              objectFit="cover" // Ensures the image covers the div
            />
          </div>
        </Link>

        {/* Circular Separator */}
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: isDarkMode ? "#1abc9c" : "#6b21a8", // Teal in dark mode, Purple in light mode
            borderRadius: "80%",
          }}
        />

        {/* Designs Category Box */}
        <Link href="/designs" passHref>
          <div
            style={{
              width: "440px",
              height: "440px",
              borderRadius: "45px",
              overflow: "hidden", // Ensure contents don't spill out
              transition: "box-shadow 0.3s ease", // Smooth transition for the box-shadow on hover
              position: "relative", // For proper positioning of the Image
              display: "block", // Ensures the anchor tag covers the box area
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = isDarkMode
                ? "0 0 0 4px white"
                : "0 0 0 4px #1D3557")
            } // Hover effect
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Image
              src="/designs-image.jpg" // Replace with your actual designs image
              alt="Designs Category"
              layout="fill" // Ensures the image fills the div
              objectFit="cover" // Ensures the image covers the div
            />
          </div>
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
          }

          div > div {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
          }

          h1 {
            font-size: 48px;
          }
        }
      `}</style>
    </div>
  );
}
