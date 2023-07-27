import React, { useEffect, useState } from "react";
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
  const getInitialActiveIndex = (mode: any, defaultValue: any) => {
    const activeIndexFromStorage = localStorage.getItem(`activeIndex_${mode}`);
    return activeIndexFromStorage
      ? parseInt(activeIndexFromStorage, 10)
      : defaultValue;
  };

  const [activeBodyIndex, setActiveBodyIndex] = useState(() =>
    getInitialActiveIndex(ViewMode.ActiveBodyViewmode, 0)
  );
  const [activeBodySecIndex, setActiveBodySecIndex] = useState(() =>
    getInitialActiveIndex(ViewMode.OriginalMode, 0)
  );
  const [activeHubcapIndex, setActiveHubcapIndex] = useState(() =>
    getInitialActiveIndex(ViewMode.HubcapViewMode, 0)
  );

  useEffect(() => {
    localStorage.setItem(
      `activeIndex_${ViewMode.ActiveBodyViewmode}`,
      activeBodyIndex.toString()
    );
    setBodyColor(bodyColorOptions[activeBodyIndex].value);
  }, [activeBodyIndex]);

  useEffect(() => {
    localStorage.setItem(
      `activeIndex_${ViewMode.ActiveBodyViewmode}_sec`,
      activeBodySecIndex.toString()
    );
  }, [activeBodySecIndex]);

  useEffect(() => {
    localStorage.setItem(
      `activeIndex_${ViewMode.HubcapViewMode}`,
      activeHubcapIndex.toString()
    );
  }, [activeHubcapIndex]);

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
                colorOption={option}
                colorSetter={setBodyColor}
                activeMode={ViewMode.ActiveBodyViewmode}
                index={index}
                isActive={activeBodyIndex === index}
                setActiveIndex={setActiveBodyIndex}
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
                colorOption={option}
                colorSetter={setBodySecondaryColor}
                activeMode={ViewMode.ActiveBodyViewmode}
                index={index}
                isActive={activeBodySecIndex === index}
                setActiveIndex={setActiveBodySecIndex}
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
                colorOption={option}
                colorSetter={setHubcapColor}
                activeMode={ViewMode.HubcapViewMode}
                index={index}
                isActive={activeHubcapIndex === index}
                setActiveIndex={setActiveHubcapIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default CarCustomizationMenu;
