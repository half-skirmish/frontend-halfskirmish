'use client';

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '700', // Regular Inter font
  subsets: ['latin'],
});

export default function Homepage() {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '0', margin: '0' }}>
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
            }}
          >
            <a
              href={`/post/${index + 1}`} // Link to the specific post
              style={{
                textDecoration: 'none',
                color: 'inherit',
                pointerEvents: 'none', // Disable the pointer (no clickable symbol)
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
                  src="/stock.jpg" // Replace with actual image path
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
                  fontFamily: inter.style.fontFamily, // Apply Inter regular font here
                }}
              >
                {title}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
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
            fontFamily: inter.style.fontFamily, // Apply Inter regular font here
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#003366'; // Deep blue on hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#6b21a8'; // Return to purple
          }}
        >
          See More
        </button>
      </div>
    </section>
  );
}
