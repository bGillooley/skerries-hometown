"use client";
import { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import dynamic from "next/dynamic";
const DynamicWeather = dynamic(() => import("./Weather"));
export default function ShowWeather() {
  const [showWeather, setShowWeather] = useState(false);
  return (
    <>
      <div
        className="relative flex flex-col py-2 justify-center content-center cursor-pointer rounded-md w-full h-full bg-teal-700 hover:bg-teal-800"
        onClick={() => {
          setShowWeather(true);
        }}
        onKeyUp={(e) => {
          e.key === "Enter" && setShowWeather(true);
          console.log("Key up ", e.key);
        }}
        tabIndex={0}
      >
        <div className="flex justify-center text-4xl text-white">
          <TiWeatherPartlySunny />
        </div>
        <div className="flex justify-center  text-white text-xs font-semibold tracking-wider">
          WEATHER
        </div>
      </div>
      {showWeather && (
        <DynamicWeather
          showWeather={showWeather}
          setShowWeather={setShowWeather}
        />
      )}
    </>
  );
}
