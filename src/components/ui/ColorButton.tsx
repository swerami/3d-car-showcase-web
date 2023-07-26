import { useEffect, useState } from "react";
import useSettingsStore, { ViewMode } from "../../store/settings";
import { ColorOption } from "../../utilities/ColorOption";

interface ColorButtonProps {
  colorOption: ColorOption;
  colorSetter: (colorValue: string | null) => void;
  activeMode: ViewMode;
  index: number;
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
}: ColorButtonProps) => {
  // TODO: only import setViewMode
  // TODO: FIX THE SELECTED BUTTON BUG
  const { setViewMode, setCameraAnimated } = useSettingsStore();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);
  return (
    <button
      key={colorOption.name}
      className={`h-10 w-10 rounded-xl ${
        selectedItem == index ? "active" : ""
      } ${colorOption.tw} transition-transform transform focus:animate-wiggle`}
      onClick={() => {
        setCameraAnimated(true);
        setSelectedItem(index);
        // console.log(selectedItem);
        setColor(colorSetter)(colorOption.value);
        setViewMode(activeMode);
      }}
    />
  );
};

export default ColorButton;
