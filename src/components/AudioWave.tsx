import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

const AudioWave = () => {
  let [active, setActive] = useState(false);

  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
        className="flex flex-row gap-2 justify-center items-center"
      >
        <span
          className={`w-1 transition-all ease-linear duration-300 bg-white ${
            active ? "h-3 animate-stretch-500" : "h-3"
          }`}
        ></span>
        <span
          className={`w-1 transition-all ease-linear duration-300 bg-white ${
            active ? "h-6 animate-stretch-1000" : "h-6"
          }`}
        ></span>
        <span
          className={`w-1 transition-all ease-linear duration-300 bg-white ${
            active ? "h-3 animate-stretch-1500" : "h-3"
          }`}
        ></span>
      </div>

      <AudioPlayer isPlaying={active} src="./sounds/music/ambient_sound.mp3" />
    </>
  );
};

export default AudioWave;
