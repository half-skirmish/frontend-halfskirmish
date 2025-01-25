"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer"; // Adjust the import path

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
        flexDirection: "column",
        height: "100vh",
        backgroundColor: isDarkMode ? "#121212" : "white",
      }}
    >
      {/* White Bar with Logo */}
      <div
        style={{
          backgroundColor: "white",
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Link href="/" passHref>
          <Image
            src="/logowhite.png" // Replace with the path to your logo image
            alt="Logo"
            width={150} // Half the width of the original logo for better responsiveness
            height={10} // Scaled height to maintain the aspect ratio
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Heading Box with Rounded Rectangle Stroke */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: "bold",
            backgroundColor: isDarkMode ? "#121212" : "white",
            borderRadius: "30px",
            padding: "20px 40px",
            marginBottom: "40px",
            display: "inline-block",
            boxSizing: "border-box",
            border: `5px solid ${isDarkMode ? "#1abc9c" : "#6b21a8"}`,
          }}
        >
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "64px",
              color: isDarkMode ? "white" : "black",
              margin: 0,
              paddingBottom: "10px",
            }}
          >
            CATEGORIES
          </h1>
        </div>

        {/* Box Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            padding: "0 20px",
          }}
        >
          {/* Blog Category Box */}
          <Link href="/blog" passHref>
            <div
              style={{
                width: "440px",
                height: "440px",
                borderRadius: "45px",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                position: "relative",
                display: "block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = isDarkMode
                  ? "0 0 0 4px white"
                  : "0 0 0 4px #1D3557")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <Image
                src="/red.jpg"
                alt="Blog Category"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "45px" }} // Ensures the image has rounded corners
              />
            </div>
          </Link>

          {/* Teal/Purple Separator */}
          <div
            className="separator"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: isDarkMode ? "#1abc9c" : "#6b21a8",
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
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                position: "relative",
                display: "block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = isDarkMode
                  ? "0 0 0 4px white"
                  : "0 0 0 4px #1D3557")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <Image
                src="/red.jpg"
                alt="Designs Category"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "45px" }} // Ensures the image has rounded corners
              />
            </div>
          </Link>
        </div>
      </div>

      <Footer /> {/* Add Footer here */}
    </div>
  );
}
