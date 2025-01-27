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

      {/* Blog Post Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          flexGrow: 1,
        }}
      >
        {/* Blog Header */}
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "48px",
              color: isDarkMode ? "white" : "black",
              textAlign: "center",
            }}
          >
            Exploring the World of Design and Development
          </h1>

          {/* Author Details */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <Image
              src="/author.jpg" // Replace with the author's image
              alt="Author"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "10px" }}>
              <p
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                John Doe
              </p>
              <p
                style={{
                  margin: 0,
                  color: isDarkMode ? "#AAAAAA" : "#555555",
                  fontSize: "14px",
                }}
              >
                January 27, 2025 · Category: Web Development
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div
            style={{
              width: "100%",
              height: "400px",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "40px",
            }}
          >
            <Image
              src="/featured-image.jpg" // Replace with the featured image path
              alt="Featured Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Blog Content */}
          <div
            style={{
              fontFamily: "Inter",
              lineHeight: "1.6",
              color: isDarkMode ? "white" : "#333333",
              fontSize: "18px",
              marginBottom: "40px",
            }}
          >
            <p>
              In this blog post, we dive into the fascinating intersection of design
              and development. Whether you're creating a sleek user interface or
              writing efficient code, the synergy between these disciplines is
              essential for success.
            </p>
            <p>
              From understanding user needs to crafting visually appealing layouts,
              every step in the process requires careful consideration. We'll also
              explore how tools like Next.js and modern styling techniques can
              elevate your projects to new heights.
            </p>
            <p>
              Stay tuned as we share tips, tricks, and insights to help you
              seamlessly integrate design and development in your workflow.
            </p>
          </div>

          {/* Tags */}
          <div style={{ marginBottom: "40px" }}>
            <strong style={{ color: isDarkMode ? "white" : "#333333" }}>Tags:</strong>
            <span style={{ marginLeft: "10px", color: "#6b21a8" }}>Design</span>,
            <span style={{ marginLeft: "10px", color: "#1abc9c" }}>Development</span>,
            <span style={{ marginLeft: "10px", color: "#3498db" }}>Next.js</span>
          </div>

          {/* Social Media Previews */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
