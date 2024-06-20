import themeImg from "../public/skez-tide.jpg";
import themeImg2 from "../public/skez-drone.jpg";
import themeImg3 from "../public/skez-night.jpg";
import Image from "next/image";
import type { Metadata } from "next";
import ShowTrains from "@/components/trains/show-trains";
import ShowTides from "@/components/tides/show-tides";
import ShowWeather from "@/components/weather/show-weather";
import Link from "next/link";
import { Suspense } from "react";
import HomepageEvents from "@/components/events/homepage-events";
import { addHours } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Skerries Hometown App",
  description: "Skerries Community App",
  robots: {
    follow: false,
    index: false,
  },
};

const thisYoke = addHours(new Date(), 0).toISOString();
const dater = new Date().toString();

export default async function Home() {
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
          <div className="relative pt-12 pb-6 px-6 z-20 lg:hidden">
            <Image
              src="/hometown-logo5.png"
              alt="Hometown Logo"
              width={818}
              height={788}
              className=" px-12"
            />
            <h1 className="text-7xl text-slate-100 text-center font-alegreya">
              Skerries
            </h1>
            <p className="text-teal-600 text-3xl text-center font-alegreya">
              Your Town, Your Events
            </p>
            <span className="text-xs text-white">
              {thisYoke} | {dater}
            </span>
          </div>
        </div>
      </div>
      <main className="bg-black">
        <div className="relative flex flex-col 2xl:place-content-center lg:min-h-screen">
          <div className="relative pt-12 pb-16 container mx-auto flex z-20 px-4">
            <div className="hidden lg:flex w-1/3 flex-col items-center justify-center">
              <Image
                src="/hometown-logo5.png"
                alt="Hometown Logo"
                width={818}
                height={788}
                className=" px-12"
              />
              <h1 className="text-6xl 2xl:text-8xl text-slate-100 font-alegreya text-center">
                Skerries
              </h1>
              <p className=" text-3xl font-alegreya text-teal-600 text-center">
                Your Town, Your Events
              </p>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="lg:grid lg:grid-cols-4 lg:grid-rows-6 gap-2">
                <Suspense fallback={<div>loading...</div>}>
                  <HomepageEvents />
                </Suspense>
                <div className="row-start-7">
                  <Link
                    href="/events/all"
                    className="inline-block mb-6 w-full xl:w-auto cursor-pointer rounded-md text-center font-semibold py-2 px-3 bg-beach hover:bg-[#C3933D]"
                    title="View all events"
                    tabIndex={0}
                  >
                    VIEW ALL EVENTS
                  </Link>
                </div>
                <div className="relative hidden lg:block col-span-2 row-span-3 col-start-3 row-start-1">
                  <div className="flex flex-col place-content-end relative rounded-md w-full h-full mb-2 lg:mb-0 bg-teal-600 hover:bg-teal-800">
                    <Image
                      className="z-0 absolute w-full h-full object-cover rounded"
                      src={themeImg2}
                      quality={50}
                      alt="Skerries Rules"
                    />
                  </div>
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-4">
                  <Suspense fallback={<div>loading...</div>}>
                    <ShowTrains />
                  </Suspense>
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-5">
                  <Suspense fallback={<div>loading...</div>}>
                    <ShowTides />
                  </Suspense>
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-6">
                  <Suspense fallback={<div>loading...</div>}>
                    <ShowWeather />
                  </Suspense>
                </div>
                <div className="row-span-3 col-start-4 hidden lg:block  row-start-4">
                  <div className="flex flex-col place-content-end relative rounded-md w-full h-full bg-teal-600">
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
