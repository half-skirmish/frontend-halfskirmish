import { Navbar } from "./components/Navbar";
import Homepage from "./components/Homepage";  // Import the new Homepage component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />  {/* Use the Homepage component */}
    </div>
  );
}

