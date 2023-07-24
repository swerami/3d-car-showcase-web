import useSettingsStore, { ViewMode } from "../../store/settings";
import { ColorOption } from "../../utilities/ColorOption";

interface ColorButtonProps {
  colorOption: ColorOption;
  colorSetter: (colorValue: string | null) => void;
  activeMode: ViewMode;
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
}: ColorButtonProps) => {
  // TODO: only import setViewMode
  const { setViewMode } = useSettingsStore();
  return (
    <button
      key={colorOption.name}
      className={`h-10 w-10 rounded-xl ${colorOption.tw} transition-transform transform focus:animate-wiggle`}
      onClick={() => {
        setColor(colorSetter)(colorOption.value);
        setViewMode(activeMode);
      }}
    />
  );
};

export default ColorButton;
