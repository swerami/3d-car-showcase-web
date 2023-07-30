import useSettingsStore, { ViewMode } from "../../store/settings";
import { ColorOption } from "../../utilities/ColorOption";

interface ColorButtonProps {
  colorOption: ColorOption;
  colorSetter: (colorValue: string | null) => void;
  activeMode: ViewMode;
  index: number;
  isActive: boolean;
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
        isActive ? "border-2 border-red-500" : ""
      } ${colorOption.tw} transition-transform transform focus:animate-wiggle`}
      onClick={() => {
        setCameraAnimated(true);
        setColor(colorSetter)(colorOption.value);
        setViewMode(activeMode);
        setActiveIndex(index);
      }}
    />
  );
};

export default ColorButton;
