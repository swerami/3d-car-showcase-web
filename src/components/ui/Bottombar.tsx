import { CgPerformance } from "react-icons/cg";
import { BiCustomize } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { SiRobloxstudio } from "react-icons/si";
import useNavigationStore from "../../store/navigation";

const Bottombar = () => {
  const menuItems = [
    { label: "Performance", icon: CgPerformance, category: "performance" },
    { label: "Customization", icon: BiCustomize, category: "customization" },
    { label: "Swap Car (0)", icon: GiHomeGarage, category: "swapcar" },
    { label: "Studio", icon: SiRobloxstudio, category: "studio" },
  ];

  const { activeMenu, setActiveMenu } = useNavigationStore();

  return (
    <div className="w-2/3 h-full max-h-[140px] flex flex-row gap-2">
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <div
            key={index}
            onClick={() => {
              setActiveMenu(item.category);
            }}
            className={`w-full min-w-[150px] h-full flex flex-col gap-4 transition-colors select-none duration-300 cursor-pointer items-center justify-center ${
              activeMenu === item.category
                ? "text-black bg-white"
                : "text-white bg-black/40"
            }`}
          >
            <IconComponent className="text-5xl" /> <p>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Bottombar;
