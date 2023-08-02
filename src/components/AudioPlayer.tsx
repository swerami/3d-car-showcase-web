import ReactHowler from "react-howler";
import useNavigationStore from "../store/navigation";

interface Props {
  isPlaying: boolean;
  src: string;
  audioRef?: React.RefObject<ReactHowler>;
}

const AudioPlayer = ({ src, isPlaying, audioRef }: Props) => {
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
      ref={audioRef}
      src={src}
      onPlay={() => handlePlay()}
      onEnd={() => handleEnd()}
      playing={isPlaying}
    />
  );
};

export default AudioPlayer;
