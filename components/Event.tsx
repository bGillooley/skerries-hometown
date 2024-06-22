"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdAccessTime } from "react-icons/md";
import { isToday } from "@/lib/utils";
import {
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import { Event } from "@/lib/defintions";
import {
  formatDateDay,
  formatDateLong,
  formatDateMonth,
  formatDateWeekDay,
  calendarDate,
} from "@/lib/date-formatting";

import "add-to-calendar-button";

const formatDate = (dateString: string) => {
  const timeformat = {
    month: "short",
    day: "numeric",
    hour12: false,
  } as const;

  const options = { month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", timeformat);
};

{
  /*
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["add-to-calendar-button"]: CustomElement<AddToCalendarButton>;
    }
  }
}
*/
}

export default function EventModule({ event }: { event: Event }) {
  const encodedAddress = encodeURIComponent(event.address);
  const googleStaticMapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=16&markers=color:red|${encodedAddress}&size=400x400&key=${process.env.NEXT_PUBLIC_GOOGLE_STATIC_MAP_KEY}`;
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModalClick = (e: any) => {
    e.preventDefault();
    setModalVisible(true);
  };
  const handleHideModalClick = (e: any) => {
    e.preventDefault();
    setModalVisible(false);
  };
  const handleShowModalKeyUp = (e: any) => {
    if (e.key === "Enter") {
      setModalVisible(true);
    }
  };

  const handleHideModalKeyUp = (e: any) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setModalVisible(false);
    }
  };
  return (
    <>
      <a
        onClick={handleShowModalClick}
        onKeyUp={handleShowModalKeyUp}
        key={event.id}
        className="flex relative bg-white hover:bg-slate-50 drop-shadow border border-gray-100 rounded-md py-2 px-3 cursor-pointer"
        tabIndex={0}
      >
        <div className="flex flex-col items-center justify-center pr-4">
          <div className="text-center uppercase">
            {formatDateMonth(event.eventDate.toString())}
          </div>
          <div className="text-center text-xl">
            {formatDateDay(event.eventDate.toString())}
          </div>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-500" suppressHydrationWarning>
            <span className="font-bold capitalize ">{event.category}</span> -
            {isToday(new Date(event.eventDate))
              ? "Today"
              : formatDateWeekDay(event.eventDate.toString())}
            -{" "}
            {new Date(event.eventDate).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="text-base text-teal-600 font-semibold">
            {event.title}
          </div>
          <div className="text-sm text-slate-500">{event.venue}</div>
        </div>
      </a>
      <AnimatePresence>
        {modalVisible && (
          <div className="fixed left-0 top-0 w-full h-full z-50">
            <motion.div
              className="fixed w-full h-full bg-black opacity-50 z-10"
              onClick={handleHideModalClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <div className="flex md:w-screen md:h-screen md:items-center md:justify-center">
              <motion.div
                className="relative w-full md:w-[820px] h-auto z-50 rounded-lg"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.25 }}
                exit={{ y: 500, opacity: 0 }}
              >
                <div className="w-full pt-0  md:p-0 text-white">
                  <div className="bg-teal-700 rounded-t-lg p-4  md:mx-1">
                    <button
                      className="flex absolute right-4 top-2 flex-col place-content-center mb-2  z-50"
                      onClick={handleHideModalClick}
                      onKeyUp={handleHideModalKeyUp}
                      aria-label="close"
                      tabIndex={0}
                      autoFocus
                    >
                      <div className="mx-auto origin-center text-3xl text-white hover:text-slate-50">
                        <ArrowDownCircleIcon className="w-10" />
                      </div>
                      <div className="w-full text-slate-400 text-xs">close</div>
                    </button>
                    <div className="text-xs font-semibold capitalize text-slate-300 tracking-wider">
                      {event.category}
                    </div>
                    <h2 className="text-lg md:text-2xl font-semibold pr-14 pb-1 leading-tight">
                      {event.title}
                    </h2>

                    <div className="text-xs flex flex-col md:flex-row md:items-center font-semibold  uppercase text-slate-300 tracking-wider">
                      <div className="flex mb-2">
                        <div>{formatDateLong(event.eventDate.toString())}</div>
                        <div className="pl-2 pr-0.5 flex items-center">
                          <MdAccessTime />
                        </div>

                        <div className="mr-2">
                          {" "}
                          {new Date(event.eventDate).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                      <add-to-calendar-button
                        styleLight="--btn-background: #d7b881;--btn-hover-background: #c3933d; --btn-border:none; --btn-shadow:none; --btn-hover-shadow:none; --btn-active-shadow:none; --btn-text: #000; --btn-font-weight:500"
                        styleDark="--btn-background: #d7b881;--btn-text: #000; --btn-font-weight:500"
                        size="1"
                        name={event.title}
                        label="ADD TO CALENDAR"
                        description={event.content!}
                        startDate={calendarDate(event.eventDate.toString())}
                        startTime={new Date(event.eventDate).toLocaleTimeString(
                          [],
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                        endTime={new Date(event.eventDate).toLocaleTimeString(
                          [],
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                        timeZone="Europe/Dublin"
                        location={event.address}
                        hideBackground
                        trigger="click"
                        lightMode="bodyScheme"
                        options="'Apple','Google','iCal','Outlook.com'"
                      ></add-to-calendar-button>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col  md:flex-row bg-white">
                  <div className="h-screen md:h-full md:flex md:flex-col justify-between  md:flex-1">
                    <div className="p-4 flex">
                      <div className="p-2 flex-grow border-3 subpixel-antialiased rounded-md">
                        <div className="md:text-left md:pt-0 text-lg">
                          <div className="text-xs tracking-wider font-semibold text-slate-400">
                            VENUE
                          </div>
                          {event.venue}
                        </div>
                        <div className="md:text-left text-xs text-slate-400">
                          {event.address}
                        </div>
                        <form
                          className="block md:hidden mt-2"
                          action="https://maps.google.com/maps"
                          method="get"
                          target="_blank"
                        >
                          <input type="hidden" name="Your location" />
                          <input
                            type="hidden"
                            name="daddr"
                            value={event.address}
                          />

                          <button
                            className="inline-flex text-sm font-semibold mb-0 md:mb-4 w-full justify-center cursor-pointer rounded-md border border-transparent bg-beach px-4 pr-5 py-2  shadow-sm items-center hover:bg-[#c3933d] focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2"
                            tabIndex={0}
                          >
                            <MapPinIcon className="w-5 mr-1" />
                            VIEW MAP / GET DIRECTIONS
                          </button>
                        </form>
                        <div className=" mt-4 mb-4 w-[50px] h-[4px] bg-sky-900"></div>

                        <div className="text-xs tracking-wider mb-2 font-semibold text-slate-400">
                          DESCRIPTION
                        </div>
                        <div className="text-left border-2 rounded  md:text-left p-2 text-sm  h-44 overflow-auto  text-slate-500">
                          {event.content}
                        </div>
                        {event.linkUrl !== "" && (
                          <a
                            className="inline-flex w-auto mt-4 text-sm font-semibold mb-0 md:mb-4  justify-center cursor-pointer rounded-md border border-transparent bg-beach px-4 pr-5 py-2 uppercase  shadow-sm items-center hover:bg-[#c3933d] focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2"
                            href={(event.linkUrl = event.linkUrl || "")}
                            target="_blank"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 mr-2" />
                            {event.linkDesc}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="fixed bottom-0 w-full justify-center md:relative md:flex-1">
                    <div className="relative px-12 pb-4 md:py-0 md:px-0">
                      <Image
                        className="w-[100%] hidden md:block"
                        src={googleStaticMapURL}
                        alt="Google Map"
                        width={350}
                        height={350}
                      />
                      <form
                        className="hidden md:block md:absolute bottom-0 right-4"
                        action="https://maps.google.com/maps"
                        method="get"
                        target="_blank"
                      >
                        <input type="hidden" name="Your location" />
                        <input
                          type="hidden"
                          name="daddr"
                          value={event.address}
                        />

                        <button
                          className="inline-flex text-sm font-semibold mb-0 md:mb-4 w-full justify-center cursor-pointer rounded-md border border-transparent bg-beach px-4 pr-5 py-2  shadow-sm items-center hover:bg-[#c3933d] focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2"
                          tabIndex={0}
                        >
                          <MapPinIcon className="w-5 mr-1" />
                          VIEW MAP / GET DIRECTIONS
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block p-1 bg-teal-700 text-center rounded-b-lg mx-1"></div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
