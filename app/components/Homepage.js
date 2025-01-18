// /app/components/Homepage.js

export default function Homepage() {
    return (
      <section style={{ backgroundColor: '#f8f8f8', padding: '50px 20px' }}>
        {/* Title Section */}
        <h1 style={{ textAlign: 'center' }}>Title</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          {/* Your Homepage Description */}
        </p>
  
        {/* Image Grid Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)', // 12 columns grid
            gap: '24px', // Gutter between columns
            margin: '80px auto',
            maxWidth: 'calc(100% - 160px)', // For margin of 80px on each side
          }}
        >
          {/* Grid item for image (left side) */}
          <div
            style={{
              gridColumn: 'span 12', // This will make the image span the full 12 columns (left side)
              padding: '10px',
              display: 'flex',
              justifyContent: 'flex-start', // Align the image to the left
              alignItems: 'center',
            }}
          >
            {/* Applying the image with a stroke (border) */}
            <div
              style={{
                width: '845px',
                height: '570px',
                backgroundColor: '#ddd',  // Placeholder color (if image is not loaded)
                borderRadius: '8px',
                border: '4px solid #000',  // Stroke (border) around the image
                overflow: 'hidden',
              }}
            >
              <img
                src="path-to-your-image.jpg"  // Replace with your image path
                alt="Image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  