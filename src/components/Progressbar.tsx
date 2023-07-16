import { useEffect, useState } from "react";

interface Props {
  caption: string;
  percent: number;
}

const ProgressBar = ({ caption, percent }: Props) => {
  const convertedPercent = (percent / 10) * 100;
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercent((prevPercent) =>
        prevPercent < convertedPercent ? prevPercent + 1 : convertedPercent
      );
    }, 20);

    return () => clearInterval(interval);
  }, [convertedPercent]);

  return (
    <div className="flex items-center mb-4">
      <div className="flex flex-col flex-1">
        <span className="mb-2 text-white uppercase font-bold">{caption}</span>
        <div className="relative h-5 bg-white/20 border">
          <div
            className="absolute h-full bg-white transition-linear"
            style={{ width: `${currentPercent}%` }}
          ></div>
        </div>
      </div>
      <span className="mt-8 bg-neutral-500 px-2 text-white font-bold">
        {Math.floor((currentPercent / 100) * 10)}
      </span>
    </div>
  );
};

export default ProgressBar;
