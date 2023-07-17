import { BsFillCarFrontFill } from "react-icons/bs";
import ProgressBar from "../../Progressbar";
import Compass from "../../Compass";
import Menu from "../Menu";

const PerformanceMenu = () => {
  return (
    <>
      <Menu>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col ">
            <p className="uppercase font-bold text-3xl text-white">Bugatti</p>
            <p className="capitalize text-lg text-neutral-300">
              la voiture noire '21
            </p>
          </div>
          <div className="flex flex-row text-white items-start gap-2">
            <BsFillCarFrontFill className="text-2xl mt-1" />
            <p className="text-3xl font-bold">340+</p>
          </div>
        </div>
        <div className="border-b-2 border-neutral-500">
          <div className="flex flex-col">
            <ProgressBar caption="power" percent={7.6} />
            <ProgressBar caption="High speed" percent={7.6} />
            <ProgressBar caption="acceleration" percent={10} />
            <ProgressBar caption="nitrous" percent={10} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-64">
            <Compass />
          </div>
        </div>
      </Menu>
    </>
  );
};

export default PerformanceMenu;
