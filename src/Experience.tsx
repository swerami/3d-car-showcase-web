import { OrbitControls } from "@react-three/drei";
import { Bugatti } from "./components/Bugatti";
import Environment from "./components/Environment";
import Camera from "./components/Camera";
import MainMenu from "./components/ui/MainMenu";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [isAutoRotate, setAutoRotate] = useState(true);
  const lastInteractionTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = () => {
      lastInteractionTime.current = Date.now();
      setAutoRotate(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const inactivityCheckInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastInteraction =
        currentTime - lastInteractionTime.current;

      if (timeSinceLastInteraction >= 3000) {
        setAutoRotate(true);
      }
    }, 1000);

    return () => {
      clearInterval(inactivityCheckInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Bugatti position={[0, 0.54, 0]} scale={0.02} />
      <Environment />
      <OrbitControls
        makeDefault
        autoRotate={isAutoRotate}
        autoRotateSpeed={0.1}
      />
      <MainMenu />
      <Camera />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 4, 0]} intensity={2} />
    </>
  );
};

export default Experience;
