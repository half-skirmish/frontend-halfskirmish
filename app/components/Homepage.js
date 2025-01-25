'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  weight: '700',
  subsets: ['latin'],
});

export default function Homepage() {
  const handleClick = (index) => {
    window.location.href = `/post/${index + 1}`;
  };

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '0', margin: '0' }}>
      {/* Introduction Image */}
      <div
        style={{
          width: '100vw',
          height: 'auto',
          overflow: 'hidden',
        }}
      >
        <img
          src="/stock.jpg"
          alt="Introduction Image"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Image Boxes Section */}
      <div className="image-boxes">
        {['Title 1', 'Title 2', 'Title 3', 'Title 4'].map((title, index) => (
          <div key={index} className="image-box">
            <button
              onClick={() => handleClick(index)}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'block',
              }}
            >
              <div className="image-wrapper">
                <img
                  src="/stock.jpg"
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <p className="image-title">{title}</p>
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

      {/* Media Query Styles */}
      <style jsx>{`
        .image-boxes {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 32px;
          max-width: calc(100% - 160px);
          margin-left: auto;
          margin-right: auto;
          flex-wrap: wrap;
        }

        .image-box {
          flex: 1;
          max-width: 180px;
          text-align: center;
          position: relative;
          flex-shrink: 0;
        }

        .image-wrapper {
          width: 180px;
          height: 180px;
          background-color: #000;
          border-radius: 8px;
          overflow: hidden;
          margin: 0 auto;
        }

        .image-title {
          margin-top: 13px;
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

        /* Mobile View (max-width: 768px) */
        @media (max-width: 768px) {
          .image-boxes {
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 16px; /* Space between posts */
            padding: 0 16px; /* Horizontal padding for scrolling */
          }

          .image-box {
            flex: 0 0 auto;
            max-width: 180px;
          }
        }
      `}</style>
    </section>
  );
}
