const Footer = ({ pageBgColor }) => {
    return (
      <>
        {/* Spacer with dynamic background color */}
        <div
          style={{
            height: "60px", // Adjust the height of the spacing
            backgroundColor: pageBgColor, // Dynamic background color from the page
          }}
        />
  
        <footer
          style={{
            textAlign: "center",
            padding: "20px 0",
            backgroundColor: "#1a202c", // Dark background for the footer
            color: "white",
            fontSize: "14px",
            fontFamily: "'Arial', 'Helvetica', sans-serif", // Standard font
          }}
        >
          <p>&copy; {new Date().getFullYear()} Half Skirmish. All Rights Reserved.</p>
        </footer>
      </>
    );
  };
  
  export default Footer;
  