const Footer = ({ pageBgColor }) => {
    return (
      <>
        {/* Spacer with dynamic background color */}
        <div className="w-screen h-32 "
          
        />
  
        <footer
          className="bg-black text-white w-screen text-center p-4"
        >
          <p>&copy; {new Date().getFullYear()} Half Skirmish. All Rights Reserved.</p>
        </footer>
      </>
    );
  };
  
  export default Footer;
  