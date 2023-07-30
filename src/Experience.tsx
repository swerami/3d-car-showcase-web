import { Html, OrbitControls } from "@react-three/drei";
import { Bugatti } from "./components/Bugatti";
import Environment from "./components/Environment";
import Camera from "./components/Camera";
import MainMenu from "./components/ui/MainMenu";
import AudioPlayer from "./components/AudioPlayer";
import { useState } from "react";

const Experience = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSongPlay = () => {
    setIsPlaying((prevState) => !prevState);
  };
  return (
    <>
      <Bugatti position={[0, 0.54, 0]} scale={0.02} />
      <Environment />
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} />
      <MainMenu />
      <Html>
        {/* <button onClick={handleSongPlay}>HELLO, I'M PAUSING</button> */}
        <AudioPlayer
          isPlaying={isPlaying}
          // setIsPlaying={setIsPlaying}
          src="./sounds/music/ambient_sound.mp3"
        />
      </Html>
      <Camera />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 4, 0]} intensity={2} />
    </>
  );
};

export default Experience;
