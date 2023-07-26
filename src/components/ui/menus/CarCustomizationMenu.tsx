import React from "react";
import { useCustomizationStore } from "../../../store/customization";
import Menu from "../Menu";
import { ViewMode } from "../../../store/settings";
import ColorButton from "../ColorButton";
import {
  bodyColorOptions,
  bodySecColorOptions,
  hubcapColorOptions,
} from "./CarPartsOptions/partsOptions";

const CarCustomizationMenu: React.FC = () => {
  const { setBodyColor, setHubcapColor, setBodySecondaryColor } =
    useCustomizationStore();

  return (
    <Menu>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h3 className="text-white text-xl pb-2 font-medium capitalize">
            Body Color:
          </h3>
          <div className="flex space-x-2">
            {bodyColorOptions.map((option, index) => (
              <ColorButton
                key={option.name}
                index={index}
                colorOption={option}
                colorSetter={setBodyColor}
                activeMode={ViewMode.ActiveBodyViewmode}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-xl pb-2 font-medium capitalize">
            Body Secondary Color:
          </h3>
          <div className="flex space-x-2">
            {bodySecColorOptions.map((option, index) => (
              <ColorButton
                key={option.name}
                index={index}
                colorOption={option}
                colorSetter={setBodySecondaryColor}
                activeMode={ViewMode.ActiveBodyViewmode}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-xl pb-2 font-medium capitalize">
            Hubcap Color:
          </h3>
          <div className="flex space-x-2">
            {hubcapColorOptions.map((option, index) => (
              <ColorButton
                key={option.name}
                index={index}
                colorOption={option}
                colorSetter={setHubcapColor}
                activeMode={ViewMode.HubcapViewMode}
              />
            ))}
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default CarCustomizationMenu;
