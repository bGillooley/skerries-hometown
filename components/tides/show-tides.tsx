"use client";
import { useState } from "react";
import { MdWaves } from "react-icons/md";
import Tides from "./Tides";
export default function ShowTides() {
  const [showTides, setShowTides] = useState(false);
  return (
    <>
      <div
        className="relative flex flex-col py-2 justify-center content-center cursor-pointer rounded-md w-full h-full bg-sky-700 hover:bg-sky-800"
        onClick={() => setShowTides(true)}
        onKeyUp={(e) => {
          e.key === "Enter" && setShowTides(true);
          console.log("Key up ", e.key);
        }}
        tabIndex={0}
      >
        <div className="flex justify-center text-4xl text-white">
          <MdWaves />
        </div>
        <div className="flex justify-center text-white text-xs font-semibold tracking-wider">
          TIDE TIMES
        </div>
      </div>
      <Tides showTides={showTides} setShowTides={setShowTides} />
    </>
  );
}
