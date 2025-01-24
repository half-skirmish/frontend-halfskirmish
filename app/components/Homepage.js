'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link'; // Import Link from Next.js

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
      {/* Permanent Introduction Image Section */}
      <div
        style={{
          width: '100vw',
          height: 'auto',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: 'auto',
            backgroundColor: '#ddd',
            borderRadius: '0',
            border: 'none',
            overflow: 'hidden',
          }}
        >
          <img
            src="/stock.jpg"
            alt="Introduction Image"
            style={{
              width: '100vw',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '0',
            }}
          />
        </div>
      </div>

      {/* Image Boxes Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '32px',
          maxWidth: 'calc(100% - 160px)',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {['Title 1', 'Title 2', 'Title 3', 'Title 4'].map((title, index) => (
          <div
            key={index}
            style={{
              flex: '1',
              minWidth: '0',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <button
              onClick={() => handleClick(index)}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'block',
                textAlign: 'center',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  backgroundColor: '#000',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  margin: '0 auto',
                }}
              >
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
              <p
                style={{
                  marginTop: '13px',
                  fontSize: '16px',
                  maxWidth: '180px',
                  textAlign: 'center',
                  margin: '0 auto',
                  fontFamily: inter.style.fontFamily,
                }}
              >
                {title}
              </p>
            </button>

            {index !== 3 && (
              <div
                style={{
                  position: 'absolute',
                  top: 32,
                  right: '-8px',
                  height: '60%',
                  borderLeft: '2px solid #000000',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
        <Link href="/categories"> {/* Link to navigate to /categories */}
          <button
            className="text-[22px] bg-purple-700 dark:bg-red-500 text-white w-[133px] h-[40px] rounded-[20px] hover:bg-[#1D3557] transition-colors"
            style={{
              fontSize: '18px',
              borderRadius: '20px',
              backgroundColor: '#6b21a8',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 18px',
              transition: 'background-color 0.3s ease',
              fontFamily: inter.style.fontFamily,
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#003366';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#6b21a8';
            }}
          >
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}
