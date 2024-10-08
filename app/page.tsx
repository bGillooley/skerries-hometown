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

export const metadata: Metadata = {
  title: "Skerries Hometown App",
  description: "Skerries Community App",
};

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

            <h1 className="text-7xl text-slate-100 font-alegreya text-center">
              Skerries
            </h1>
            <p className="text-teal-600 text-3xl text-center font-alegreya">
              Your Town, Your Events
            </p>
          </div>
        </div>
      </div>
      <main className="bg-black">
        <div className="relative flex flex-col 2xl:place-content-center lg:min-h-screen">
          <div className="relative pt-6 pb-16 container mx-auto flex z-20 px-4">
            <div className="hidden lg:flex w-1/3 flex-col items-center justify-center">
              <Image
                src="/hometown-logo5.png"
                alt="Hometown Logo"
                width={818}
                height={788}
                className=" px-12"
              />
              <h1 className="text-6xl 2xl:text-8xl text-slate-100  text-center font-alegreya">
                Skerries
              </h1>
              <p className=" text-3xl  text-teal-600 text-center font-alegreya">
                Your Town, Your Events
              </p>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="lg:grid lg:grid-cols-4 lg:grid-rows-6 gap-2">
                <Suspense
                  fallback={
                    <div className="text-md text-white">loading...</div>
                  }
                >
                  <HomepageEvents />
                </Suspense>
                <div className="row-start-7">
                  <Link
                    href="/events/all"
                    className="inline-block mb-6 md:mb-0 w-full xl:w-auto cursor-pointer rounded-md text-center font-semibold py-2 px-3 bg-beach hover:bg-[#C3933D]"
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
                  <Suspense fallback={<div>loading train times...</div>}>
                    <ShowTrains />
                  </Suspense>
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-5">
                  <Suspense fallback={<div>loading tide times...</div>}>
                    <ShowTides />
                  </Suspense>
                </div>
                <div className="mb-2 lg:mb-0 row-span-1 col-start-3 row-start-6">
                  <Suspense fallback={<div>loading weather report...</div>}>
                    <ShowWeather />
                  </Suspense>
                </div>
                <div className="lg:row-span-3 lg:col-start-4 lg:block  lg:row-start-4 mt-6 lg:mt-0">
                  <div className="flex flex-col justify-center relative rounded-md w-full h-full bg-teal-600">
                    <div className="absolute rounded inset-0 w-full h-full bg-black/50 z-10" />
                    <Image
                      className="z-0 absolute  w-full h-full object-cover rounded"
                      src={themeImg3}
                      quality={50}
                      alt="Skerries Rules"
                    />
                    <div className="relative z-20 p-4 text-slate-100">
                      <div className="text-2xl font-bold text-center">
                        Get Involved
                      </div>
                      <div className="text-sm mt-2 mb-4 text-center">
                        Want to add your events? Get in touch...
                      </div>
                      <Link
                        href="/access"
                        className="block text-black  mb-6 md:mb-0 w-full xl:w-auto cursor-pointer rounded-md text-center font-semibold py-2 px-3 bg-beach hover:bg-[#C3933D]"
                        title="Add your events"
                        tabIndex={0}
                      >
                        ADD YOUR EVENTS
                      </Link>
                    </div>
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
