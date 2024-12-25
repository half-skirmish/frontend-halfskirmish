import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center font-bold font-serif">
     <h2>HALF SKIRMISH</h2>
     <p>The Grind Won't Stop!</p>
     <Image
     src= "/logolight.png"
     width = {500} height= {500}
     alt = "logolight.png"
     >
      </Image>
    </div>
  );
}

