'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer'; // Import Footer component
import { useState } from 'react';

const inter = Inter({
  weight: '700',
  subsets: ['latin'],
});

const posts = [
  { title: 'The Future of AI in Gaming', image: 'https://drive.google.com/uc?export=view&id=13qKYUie8APx0Jue8QhJHaTchTRujcshF', link: '/blog/post1' }
];

export default function Homepage() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initialize dark mode state

  const handleClick = (index) => {
    window.location.href = `/blog/post${index + 1}`;
  };

  return (
    <section className='bg-grey-500 flex flex-col items-center justify-center'>
      {/* Introduction Image */}
      <div className="landing-image-container relative w-full mb-8">
        <Image
          src="https://drive.google.com/uc?export=view&id=159v0Z3zWLpCvr7DG7SzYdnExwNS1sh4e"
          alt="Landing Image"
          width={2560}
          height={1440} // Setting height according to the image's size
          className="landing-image"
          layout="intrinsic" // Ensures the image maintains aspect ratio
        />
      </div>

      {/* Heading Box */}
      <div
        >
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "51px",
              color: isDarkMode ? "white" : "",
              margin: 0,
              paddingBottom: "10px",
              alignItems: 'center'
            }}
          >
            RECENT POSTS
          </h1>
        </div>

      {/* Image Boxes Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 w-screen'>
        {posts.map((post, index) => (
          <div key={index} className="flex items-center justify-center">
            <button onClick={() => handleClick(index)}>
              <div className="w-48 h-48">
                <Image
                  className='rounded-2xl'
                  alt={post.title}
                  src={post.image}
                  width={320}
                  height={320}
                />
              </div>
              <p className="image-title">{post.title}</p>
            </button>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more-button">
        <Link href="/categories">
          <button>See More</button>
        </Link>
      </div>

      {/* Spacer before Footer */}
      <div style={{ height: '60px', backgroundColor: '#ffffff' }} />

      {/* Footer */}
      <Footer className='w-screen' />

      <style jsx>{`
        .landing-image-container {
          position: relative;
          width: 100%;
          height: auto; /* Allow the height to adjust based on the width */
        }

        .landing-image {
          width: 100%; /* Ensure the image stretches to the full width */
          height: 100%; /* Ensure the image's height stretches to maintain the aspect ratio */
          object-fit: cover; /* This makes sure the image covers the entire container */
        }

        .image-title {
          font-size: 16px;
          text-align: center;
          font-family: ${inter.style.fontFamily};
        }

        .see-more-button {
          margin-top: 32px;
          display: flex;
          justify-content: center;
        }

        .see-more-button button {
          font-size: 18px;
          border-radius: 20px;
          background-color: #6b21a8;
          color: white;
          border: none;
          cursor: pointer;
          padding: 8px 18px;
          transition: background-color 0.3s ease;
          font-family: ${inter.style.fontFamily};
        }

        .see-more-button button:hover {
          background-color: #003366;
        }
      `}</style>
    </section>
  );
}
