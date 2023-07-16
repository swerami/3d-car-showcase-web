import { useState } from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import ProgressBar from "../../Progressbar";

const PerformanceMenu = () => {
  return (
    <>
      <div className="flex flex-col h-[500px] bg-black/20 w-[400px] p-6">
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
        <div>
          <div className="flex flex-col">
            <ProgressBar caption="idk" percent={7.6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceMenu;
