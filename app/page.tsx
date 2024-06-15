import themeImg from "../public/skez-tide.jpg";
import themeImg2 from "../public/skez-drone.jpg";
import themeImg3 from "../public/skez-night.jpg";
import Image from "next/image";
import type { Metadata } from "next";
import { MdWaves, MdTrain } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import ShowTrains from "@/components/trains/show-trains";
import ShowTides from "@/components/tides/show-tides";
import ShowWeather from "@/components/weather/show-weather";
import { fetchHomepageEvents } from "@/lib/data";
import EventModule from "@/components/Event";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skerries Hometown App",
  description: "Skerries Community App",
  robots: {
    follow: false,
    index: false,
  },
};

export default async function Home() {
  const events = await fetchHomepageEvents();
  return (
    <>
      <div className="relative bg-black">
        <div
          className="relative lg:fixed lg:h-full lg:w-full"
          role="contentinfo"
        >
          <Image
            className="z-0 absolute w-full h-full object-cover"
            src={themeImg}
            quality={50}
            loading="eager"
            alt="Skerries Rules"
          />
          <div className="absolute z-10  w-full h-full bg-gradient-to-t  from-black"></div>
          <div className="relative pt-16 pb-6 px-6 z-20 lg:hidden">
            <h1 className="text-6xl 2xl:text-8xl text-slate-100 text-center">
              Skerries
            </h1>
            <p className="text-slate-100 text-2xl text-center">Hometown</p>

            <p className="text-slate-100 text-base text-center">
              It's a local app... for local people
            </p>
          </div>
        </div>
      </div>
      <main className="bg-black">
        <div className="relative flex flex-col 2xl:place-content-center lg:min-h-screen">
          <div className="relative pt-12 pb-16 container mx-auto flex z-20 px-4">
            <div className="hidden lg:flex w-1/3 flex-col place-content-end pr-10 pb-16">
              <h1 className="text-6xl 2xl:text-8xl text-slate-100">Skerries</h1>
              <p className="text-slate-100 text-3xl">Hometown</p>

              <p className="text-slate-100 text-xl pr-8">
                It's a local app... for local people
              </p>
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-slate-100 text-4xl pb-3">What's On</h2>
              <div className="lg:grid lg:grid-cols-4 lg:grid-rows-6 gap-2">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`mb-2 lg:mb-0 col-span-2 col-start-1 row-start-${
                      index + 1
                    }`}
                  >
                    <EventModule event={event} />
                  </div>
                ))}
                <div className="row-start-7">
                  <Link
                    href="/events/all"
                    className="inline-flex mb-6 md:mb-0 w-full text-black md:w-auto cursor-pointer justify-center rounded-lg text-xs font-semibold py-2.5 px-4 bg-orange-300 hover:bg-orange-400 tracking-wider"
                    title="View all events"
                    tabIndex={0}
                  >
                    VIEW ALL EVENTS
                  </Link>
                </div>
                <div className="relative hidden lg:block col-span-2 row-span-3 col-start-3 row-start-1">
                  <div className="flex flex-col place-content-end relative rounded-md w-full h-full mb-2 lg:mb-0 bg-sky-700 hover:bg-sky-800">
                    <Image
                      className="z-0 absolute w-full h-full object-cover rounded"
                      src={themeImg2}
                      quality={50}
                      alt="Skerries Rules"
                    />
                  </div>
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-4">
                  <ShowTrains />
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-5">
                  <ShowTides />
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-6">
                  <ShowWeather />
                </div>
                <div className="row-span-3 col-start-4 hidden lg:block  row-start-4">
                  <div className="flex flex-col place-content-end relative rounded-md w-full h-full bg-slate-500">
                    <Image
                      className="z-0 absolute w-full h-full object-cover rounded"
                      src={themeImg3}
                      quality={50}
                      alt="Skerries Rules"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
