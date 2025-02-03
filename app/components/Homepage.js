'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer'; // Import Footer component

const inter = Inter({
  weight: '700',
  subsets: ['latin'],
});

const posts = [
  { title: 'AI in Gaming', image: 'https://drive.google.com/uc?export=view&id=13qKYUie8APx0Jue8QhJHaTchTRujcshF', link: '/blog/post1'}
];

export default function Homepage() {
  const handleClick = (index) => {
    window.location.href = `/blog/post${index + 1}`;
  };

  return (
    <section className='bg-grey-500 flex flex-col items-center justify-center' >
      <div className="animate-slide-up"></div>

      {/* Introduction Image */}
      <div>
        <img src="/stock.jpg" alt="Introduction Image" />
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
      `}</style>
    </section>
  );
}
