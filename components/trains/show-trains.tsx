"use client";
import { useState } from "react";
import { MdTrain } from "react-icons/md";
import Trains from "./Trains";
export default function ShowTrains() {
  const [showTrains, setShowTrains] = useState(false);
  return (
    <>
      <div
        className="relative flex py-2 flex-col justify-center content-center cursor-pointer rounded-md w-full h-full bg-sky-700 hover:bg-sky-800"
        onClick={() => setShowTrains(true)}
        onKeyUp={(e) => {
          e.key === "Enter" && setShowTrains(true);
          console.log("Key up ", e.key);
        }}
        tabIndex={0}
      >
        <div className="flex justify-center text-4xl text-white">
          <MdTrain />
        </div>
        <div className="flex justify-center text-white text-xs font-semibold tracking-wider">
          TRAIN TIMES
        </div>
      </div>
      <Trains showTrains={showTrains} setShowTrains={setShowTrains} />
    </>
  );
}
