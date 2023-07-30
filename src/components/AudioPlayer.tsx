import ReactHowler from "react-howler";
import useNavigationStore from "../store/navigation";

interface Props {
  isPlaying: boolean;
  src: string;
  audioRef: React.RefObject<ReactHowler>;
  // setIsPlaying?: (playing: boolean) => void;
}

const AudioPlayer = ({ src, isPlaying, audioRef }: Props) => {
  // const handlePause = () => {
  //   if (setIsPlaying) {
  //     setIsPlaying(false);
  //   }
  // };
  const { setIsPlaying } = useNavigationStore();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  return (
    <ReactHowler
      volume={0.1}
      // onPause={handlePause}
      ref={audioRef}
      src={src}
      onPlay={() => handlePlay()}
      onEnd={() => handleEnd()}
      playing={isPlaying}
    />
  );
};

export default AudioPlayer;
