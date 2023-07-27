import { useState } from "react";
import useSettingsStore, { ViewMode } from "../../store/settings";
import { ColorOption } from "../../utilities/ColorOption";

interface ColorButtonProps {
  colorOption: ColorOption;
  colorSetter: (colorValue: string | null) => void;
  activeMode: ViewMode;
  index: number;
  isActive: boolean; // Pass isActive prop to determine active state
  setActiveIndex: (index: number) => void;
}

const setColor =
  (colorSetter: (colorValue: string | null) => void) =>
  (colorValue: string | null) => {
    colorSetter(colorValue);
  };

const ColorButton = ({
  colorOption,
  colorSetter,
  activeMode,
  index,
  isActive,
  setActiveIndex,
}: ColorButtonProps) => {
  // TODO: only import setViewMode
  const { setViewMode, setCameraAnimated } = useSettingsStore();

  return (
    <button
      key={colorOption.name}
      className={`h-10 w-10 rounded-xl ${
        isActive ? "border-2 border-red-500" : "" // Apply 2px border when active
      } ${colorOption.tw} transition-transform transform focus:animate-wiggle`}
      onClick={() => {
        setCameraAnimated(true);
        setColor(colorSetter)(colorOption.value);
        setViewMode(activeMode);
        setActiveIndex(index); // Notify the parent component about the active button
      }}
    />
  );
};

export default ColorButton;
