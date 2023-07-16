import { Html } from "@react-three/drei";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  let navItems = ["Showcase", "My Ride", "Character", "Racer Challenges"];
  return (
    <>
      <ul className="flex flex-row bg-black/20 w-fit gap-8">
        {navItems.map((item, index) => (
          <li
            onClick={() => setActiveItem(index)}
            className={`font-bold text-white select-none uppercase py-2 px-4 ${
              activeItem == index ? "text-black bg-white" : ""
            }`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
