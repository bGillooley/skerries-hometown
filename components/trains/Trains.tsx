"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowForwardIos, MdTrain, MdInfoOutline } from "react-icons/md";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

const Trains = ({
  showTrains,
  setShowTrains,
}: {
  showTrains: boolean;
  setShowTrains: any;
}) => {
  const [northBoundTrains, setNorthBoundTrains] = useState([]);

  const [loading, setLoading] = useState(false);

  function getTrains() {
    setLoading(true);
    fetch("/api/trains", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        JSON.stringify(data.details1);
        setNorthBoundTrains(data.details1);

        setLoading(false);
      });
  }

  useEffect(() => {
    getTrains();
  }, []);

  const handleHideTrainsClick = (e: any) => {
    e.preventDefault();
    setShowTrains(false);
  };

  const handleHideTrainsKeyUp = (e: any) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setShowTrains(false);
    }
  };

  if (loading) {
    return (
      <AnimatePresence>
        {showTrains && (
          <div className="fixed left-0 top-0 w-full h-full z-50">
            <motion.div
              className="fixed w-full h-full bg-black opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <div className="fixed z-50 w-full h-full  text-white flex justify-center items-center">
              <div className="relative text-3xl">Loading Train times...</div>
            </div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <>
      <AnimatePresence>
        {showTrains && (
          <div className="fixed left-0 top-0 w-full h-full z-50">
            <motion.div
              className="fixed w-full h-full bg-black opacity-50 z-10"
              onClick={() => setShowTrains(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <div className="relative md:flex pointer-events-none md:w-screen md:h-screen md:items-center md:justify-center z-50">
              <motion.div
                className="w-full md:w-[520px] h-auto pointer-events-auto"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.25 }}
                exit={{ y: 500, opacity: 0 }}
              >
                <div className="w-full pt-0  md:p-0 text-white">
                  <div className="relative bg-teal-700 rounded-t-lg p-4 pt-6 md:mx-1">
                    <button
                      className="flex absolute right-4 top-2 flex-col place-content-center mb-2  z-50"
                      onClick={handleHideTrainsClick}
                      onKeyUp={handleHideTrainsKeyUp}
                      aria-label="close"
                      tabIndex={0}
                      autoFocus
                    >
                      <div className="rotate-90 mx-auto origin-center text-3xl text-slate-300">
                        <MdArrowForwardIos />
                      </div>
                      <div className="w-full text-slate-400 text-xs text-center">
                        close
                      </div>
                    </button>
                    <h2 className="flex items-center text-lg md:text-2xl pr-14">
                      <div className="mr-1 text-4xl">
                        <MdTrain />
                      </div>
                      <div className="font-semibold leading-tight">
                        Next Trains from Skerries Station
                      </div>
                    </h2>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="p-4">
                    <div className="p-1 border-2 rounded-md">
                      <h2 className="text-md uppercase  text-center font-semibold">
                        {!loading}
                      </h2>
                      <table className="w-full mb-4">
                        <thead>
                          <tr>
                            <th className="text-left text-xs uppercase tracking-wider font-semibold p-1">
                              Destination
                            </th>
                            <th className="text-right text-xs uppercase tracking-wider font-semibold p-1">
                              Departure Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {northBoundTrains === undefined && (
                            <tr>
                              <td colSpan={2}>
                                No trains scheduled at this time
                              </td>
                            </tr>
                          )}

                          {northBoundTrains !== undefined &&
                            northBoundTrains.map((e: any) => {
                              return (
                                <tr
                                  className="odd:bg-slate-100 even:bg-white"
                                  key={uuidv4()}
                                >
                                  <td className="relative text-left p-1">
                                    <div>{e.destination}</div>
                                    {e.info !== "" && (
                                      <div>
                                        <MdInfoOutline className="inline text-lg text-slate-500" />
                                        <span className="ml-1 text-xs text-slate-500">
                                          {e.info}
                                        </span>
                                      </div>
                                    )}
                                  </td>
                                  <td className="text-right p-1">{e.eta}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="py-4 pb-96 md:pb-4 text-center bg-slate-100 border-t-2 border-slate-300">
                  <button
                    className="inline-flex cursor-pointer justify-center rounded-lg text-xs font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700"
                    onClick={getTrains}
                  >
                    Refresh Data
                  </button>
                  <a
                    className="inline-flex cursor-pointer justify-center rounded-lg text-xs font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700  ml-4"
                    href="https://www.irishrail.ie/en-ie/train-timetables/live-departure-train-times?key=skerries&REQ0JourneyStopskeyID=&HWAI%3DJS%21js=yes&HWAI%3DJS%21ajax=yes#live-departure-anchor"
                    target="_blank"
                  >
                    View on Irish Rail
                  </a>
                </div>
                <div className="hidden md:block bg-teal-700 p-1 rounded-b-2xl mx-1"></div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Trains;
