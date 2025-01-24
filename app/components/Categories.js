"use client";

import Image from "next/image";

export default function Categories() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Heading Box with white fill and purple gradient outer stroke */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "30px", // Rounded corners for the rectangle
          padding: "20px 40px",
          marginBottom: "40px",
          display: "inline-block",
          boxSizing: "border-box", // Ensures padding is accounted for in the size
        }}
      >
        <h1
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "64px",
            color: "black",
            margin: 0,
            position: "relative", // To position the pseudo-element
            paddingBottom: "10px", // Adds space between the text and the line
          }}
        >
          CATEGORIES
          <span
            style={{
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: "translateX(-50%)", // Centers the line
              width: "60%", // Adjusts width of the line (can be customized)
              height: "4px",
              background: "#8E31B5",
              borderRadius: "50px", // Rounds the ends of the line
            }}
          ></span>
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
        {/* First Rounded Rectangle */}
        <div
          style={{
            width: "440px",
            height: "440px",
            borderRadius: "45px",
            overflow: "hidden", // Ensure contents don't spill out
            transition: "box-shadow 0.3s ease", // Smooth transition for the box-shadow on hover
            position: "relative", // For proper positioning of the Image
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 4px #1D3557")
          } // Purple stroke on hover
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")} // Remove box-shadow when not hovered
        >
          <Image
            src="/stock.jpg" // Replace with your server-side image path
            alt="First category"
            layout="fill" // Ensures the image fills the div
            objectFit="cover" // Ensures the image covers the div
          />
        </div>

        {/* Circular Separator */}
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#6b21a8", // Purple 700 color
            borderRadius: "80%",
          }}
        />

        {/* Second Rounded Rectangle with Image */}
        <div
          style={{
            width: "440px",
            height: "440px",
            borderRadius: "45px",
            overflow: "hidden", // Ensure contents don't spill out
            transition: "box-shadow 0.3s ease", // Smooth transition for the box-shadow on hover
            position: "relative", // For proper positioning of the Image
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 4px #1D3557")
          } // Purple stroke on hover
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")} // Remove box-shadow when not hovered
        >
          <Image
            src="/stock.jpg" // Replace with your server-side image path
            alt="Second category"
            layout="fill" // Ensures the image fills the div
            objectFit="cover" // Ensures the image covers the div
          />
        </div>
      </div>
    </div>
  );
}
