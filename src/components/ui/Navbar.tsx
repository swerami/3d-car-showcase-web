import useNavigationStore from "../../store/navigation";
import AudioWave from "../AudioWave";

const Navbar = () => {
  const { activeNavItem, setActiveNavItem } = useNavigationStore();
  let navItems = ["Showcase", "My Ride", "Character", "Racer Challenges"];

  return (
    <div className="flex flex-row justify-between w-full">
      <ul className="flex flex-row bg-black/20 w-fit gap-8">
        {navItems.map((item, index) => (
          <li
            onClick={() => setActiveNavItem(index)}
            className={`font-bold cursor-pointer select-none uppercase py-2 px-4 ${
              activeNavItem == index ? "text-black bg-white" : "text-white"
            }`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        <AudioWave />
      </div>
    </div>
  );
};

export default Navbar;
