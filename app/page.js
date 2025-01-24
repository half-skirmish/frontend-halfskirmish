import { Navbar } from "./components/Navbar";
import Homepage from "./components/Homepage";
import Categories from "./components/Categories"; // Import the new Homepage component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage /> 
      <Categories /> {/* Use the Homepage component */}
    </div>
  );
}
