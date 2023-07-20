import React from "react";
import { useCustomizationStore } from "../../../store/customization";
import Menu from "../Menu";

interface ColorOption {
  name: string;
  value: string | null;
  tw: string;
}

const colorOptions: ColorOption[] = [
  { name: "default", value: null, tw: "bg-white" },
  { name: "black", value: "#000000", tw: "bg-neutral-800" },
  { name: "red", value: "#ff0000", tw: "bg-red-500" },
  { name: "blue", value: "#0000ff", tw: "bg-blue-500" },
  { name: "green", value: "#00ff00", tw: "bg-green-500" },
];

interface ColorButtonProps {
  colorOption: ColorOption;
  colorSetter: (colorValue: string | null) => void;
}

const CarCustomizationMenu: React.FC = () => {
  const { setBodyColor, setHubcapColor, setBodySecondaryColor } =
    useCustomizationStore();

  const setColor =
    (colorSetter: (colorValue: string | null) => void) =>
    (colorValue: string | null) => {
      colorSetter(colorValue);
    };

  const ColorButton: React.FC<ColorButtonProps> = ({
    colorOption,
    colorSetter,
  }) => (
    <button
      key={colorOption.name}
      className={`h-10 w-10 rounded-xl ${colorOption.tw} transition-transform transform focus:animate-wiggle`}
      onClick={() => setColor(colorSetter)(colorOption.value)}
    />
  );

  return (
    <Menu>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h3 className="text-white text-xl pb-2 font-medium capitalize">
            Body Color:
          </h3>
          <div className="flex space-x-2">
            {colorOptions.map((option) => (
              <ColorButton
                key={option.name}
                colorOption={option}
                colorSetter={setBodyColor}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-xl pb-2 font-medium capitalize">
            Body Secondary Color:
          </h3>
          <div className="flex space-x-2">
            {colorOptions.map((option) => (
              <ColorButton
                key={option.name}
                colorOption={option}
                colorSetter={setBodySecondaryColor}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-xl pb-2 font-medium capitalize">
            Hubcap Color:
          </h3>
          <div className="flex space-x-2">
            {colorOptions.map((option) => (
              <ColorButton
                key={option.name}
                colorOption={option}
                colorSetter={setHubcapColor}
              />
            ))}
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default CarCustomizationMenu;
