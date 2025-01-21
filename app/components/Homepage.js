export default function Homepage() {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '50px 20px' }}>
      {/* Image Grid Section with Margin Adjusted */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)', // 12 columns grid
          gap: '24px', // Gutter between columns
          margin: '0px auto',
          maxWidth: 'calc(100% - 160px)', // For margin of 80px on each side
        }}
      >
        {/* Main Image Box (centered) */}
        <div
          style={{
            gridColumn: 'span 12', // This will make the image span the full 12 columns (left side)
            padding: '10px',
            display: 'flex',
            justifyContent: 'center', // Center the main image
            alignItems: 'center',
          }}
        >
          {/* Applying the image with a stroke (border) */}
          <div
            style={{
              width: '100%', // Make the image responsive to the width of the screen
              maxWidth: '845px', // Set max width of the image
              height: '570px', // Keep the height constant as required
              backgroundColor: '#ddd', // Placeholder color (if image is not loaded)
              borderRadius: '8px',
              border: '4px solid #6b21a8', // Changed border to purple-700
              overflow: 'hidden',
            }}
          >
            <a href="your-main-image-link" target="_blank" rel="noopener noreferrer">
              <img
                src="path-to-your-main-image.jpg" // Replace with your main image path
                alt="Main Image - Newest Post" // Updated alt text
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </a>
          </div>
        </div>

        {/* Image boxes in the same row */}
        <div
          style={{
            gridColumn: 'span 12',
            display: 'flex',
            justifyContent: 'space-between', // Evenly space the boxes
            gap: '24px', // Margin between the boxes
            alignItems: 'center', // Center items vertically in the row
          }}
        >
          {/* First image box */}
          <div
            style={{
              flex: '1', // Allow the box to grow to fill space equally
              minWidth: '0', // Prevent the box from overflowing
              height: '154px',
              backgroundColor: '#fff', // White background for the box
              borderRadius: '32px',
              overflow: 'hidden',
              border: '4px solid #6b21a8', // Changed border to purple-700
              position: 'relative', // To position the separator
              display: 'flex', // To make the box a flex container
              flexDirection: 'column', // Stack the content vertically
              alignItems: 'flex-start', // Align items to the left
              justifyContent: 'center',
              textAlign: 'center',
              padding: '8px',
            }}
          >
            <a href="your-link-1" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: '98px', // Square image width
                  height: '98px', // Square image height
                  backgroundColor: '#000', // Black background for the image box
                  borderRadius: '10px', // Rounded corners for the image box
                  marginLeft: '8px', // Small margin from the left
                  border: '4px solid #fff', // White boundary around the image
                  overflow: 'hidden',
                }}
              >
                <img
                  src="path-to-your-image1.jpg" // Placeholder for the first image
                  alt="Image 1"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <p>Recent Post 1</p> {/* Updated text */}
            </a>
          </div>

          {/* Separator line between first and second image boxes */}
          <div
            style={{
              width: '4px',
              backgroundColor: '#ccc',
              height: '154px', // The height of the image boxes
              marginTop: '16px', // Adjust the space to center the line
              marginBottom: '16px', // Adjust the space to center the line
            }}
          />

          {/* Second image box */}
          <div
            style={{
              flex: '1',
              minWidth: '0',
              height: '154px',
              backgroundColor: '#fff', // White background for the box
              borderRadius: '32px',
              overflow: 'hidden',
              border: '4px solid #6b21a8', // Changed border to purple-700
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '8px',
            }}
          >
            <a href="your-link-2" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: '98px',
                  height: '98px',
                  backgroundColor: '#000',
                  borderRadius: '10px',
                  marginLeft: '8px',
                  border: '4px solid #fff',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="path-to-your-image2.jpg" // Placeholder for the second image
                  alt="Image 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <p>Recent Post 2</p>
            </a>
          </div>

          {/* Separator line between second and third image boxes */}
          <div
            style={{
              width: '4px',
              backgroundColor: '#ccc',
              height: '154px',
              marginTop: '16px',
              marginBottom: '16px',
            }}
          />

          {/* Third image box */}
          <div
            style={{
              flex: '1',
              minWidth: '0',
              height: '154px',
              backgroundColor: '#fff',
              borderRadius: '32px',
              overflow: 'hidden',
              border: '4px solid #6b21a8', // Changed border to purple-700
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '8px',
            }}
          >
            <a href="your-link-3" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: '98px',
                  height: '98px',
                  backgroundColor: '#000',
                  borderRadius: '10px',
                  marginLeft: '8px',
                  border: '4px solid #fff',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="path-to-your-image3.jpg" // Placeholder for the third image
                  alt="Image 3"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <p>Recent Post 3</p>
            </a>
          </div>
        </div>
      </div>

      {/* See More Button with Purple Base to Deep Blue Hover Effect */}
      <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
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
          }}
        >
          See More
        </button>
      </div>
    </section>
  );
}
