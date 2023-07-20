import { useCustomizationStore } from "../../../store/customization";
import Menu from "../Menu";

const colorOptions = [
  { name: "default", value: null, tw: "bg-white" },
  { name: "black", value: "#000000", tw: "bg-neutral-800" },
  { name: "red", value: "#ff0000", tw: "bg-red-500" },
  { name: "blue", value: "#0000ff", tw: "bg-blue-500" },
  { name: "green", value: "#00ff00", tw: "bg-green-500" },
];

const CarCustomizationMenu = () => {
  const { setBodyColor } = useCustomizationStore(); // Get bodyColor and setBodyColor from your store

  const handleColorSelection = (colorValue: string | null) => {
    setBodyColor(colorValue);
  };

  return (
    <Menu>
      <div className="flex flex-col">
        <h3 className="text-white font-medium capitalize">Body Color:</h3>
        <div className="flex space-x-2">
          {colorOptions.map((option) => (
            <button
              key={option.name}
              // style={{ backgroundColor: option.value }}
              className={`h-10 w-10 rounded-full ${option.tw}`}
              onClick={() => handleColorSelection(option.value)}
            />
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default CarCustomizationMenu;
