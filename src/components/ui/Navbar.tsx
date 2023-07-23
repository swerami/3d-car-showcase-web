import { useFrame } from "@react-three/fiber";
import useNavigationStore from "../../store/navigation";

const Navbar = () => {
  const { activeNavItem, setActiveNavItem } = useNavigationStore();
  let navItems = ["Showcase", "My Ride", "Character", "Racer Challenges"];

  return (
    <>
      <ul className="flex flex-row bg-black/20 w-fit gap-8">
        {navItems.map((item, index) => (
          <li
            onClick={() => setActiveNavItem(index)}
            className={`font-bold  select-none uppercase py-2 px-4 ${
              activeNavItem == index ? "text-black bg-white" : "text-white"
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
