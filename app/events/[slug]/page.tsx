import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skerries Hometown App - Browse Events",
  description: "Skerries Community App",
  robots: {
    follow: false,
    index: false,
  },
};

import clsx from "clsx";
import { Suspense } from "react";
import EventsPageList from "@/components/events/events-page-list";
export default async function page({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-black">
      <div className="absolute md:fixed z-50 top-4 left-4 md:top-8 md:left-8 text-3xl text-slate-100">
        <Link href="/">
          {" "}
          <ArrowLeftCircleIcon className="w-12" />
        </Link>
      </div>
      <div className="relative md:h-full md:w-full overflow-visible">
        <Image
          className="fixed w-full h-auto md:hidden"
          src="/events-theme.jpg"
          alt="Skerries from above"
          width={1920}
          height={924}
          loading="eager"
        />
        <Image
          className="hidden fixed w-full h-full object-cover md:block"
          src="/events-theme-large.jpg"
          alt="Skerries from above"
          width={1280}
          height={644}
          loading="eager"
        />
        <div className="relative z-20">
          <div className="relative pt-16 pb-4 md:pb-8 px-6">
            <Image
              src="/hometown-logo5.png"
              alt="Hometown Logo"
              width={818}
              height={788}
              className=" px-12 w-60 mx-auto"
            />
            <h1 className="text-3xl md:text-6xl text-slate-100 text-center mt-4 font-alegreya">
              What's On in Skerries
            </h1>
          </div>
          <div className="md:hidden relative z-20 text-center text-lg pb-4 text-white">
            <div className="inline-block mx-2">
              <Link
                href="/events/all"
                title="All events"
                className={clsx(
                  "block",
                  params.slug === "all" &&
                    "bg-beach py-2 px-3 text-black rounded-md"
                )}
              >
                ALL
              </Link>
            </div>
            <div className="inline-block mx-2">
              <Link
                href="/events/culture"
                title="All events"
                className={clsx(
                  "block ",
                  params.slug === "culture" &&
                    "bg-beach py-2 px-3 text-black rounded-md"
                )}
              >
                CULTURE
              </Link>
            </div>
            <div className="inline-block mx-2">
              <Link
                href="/events/music"
                title="All events"
                className={clsx(
                  "block ",
                  params.slug === "music" &&
                    "bg-beach py-2 px-3 text-black rounded-md"
                )}
              >
                MUSIC
              </Link>
            </div>
            <div className="inline-block mx-2">
              <Link
                href="/events/sport"
                title="All events"
                className={clsx(
                  "block ",
                  params.slug === "sport" &&
                    "bg-beach py-2 px-3 text-black rounded-md"
                )}
              >
                SPORTS
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full pb-16 z-50">
          <div className="relative container max-w-4xl mx-auto z-50">
            <div className="flex flex-col md:flex-row md:space-between gap-9 px-4">
              <nav role="navigation" aria-labelledby="filter-by-category">
                <div className="hidden md:block  md:w-[300px] drop-shadow sticky top-0">
                  <div className="w-full p-4 mb-2 ml-2 bg-white rounded-md">
                    <h2
                      id="filter-by-category"
                      className="text-2xl mb-4 font-semibold text-teal-600 text-center font-alegreya"
                    >
                      Filter by category
                    </h2>
                    <ul className="text-sky-700">
                      <li
                        className="flex justify-between px-4  border-b border-slate-400 hover:bg-slate-50 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/all"
                            title="View all events"
                            className={clsx("text-slate-400 block py-2", {
                              "text-teal-600": params.slug === "all",
                            })}
                          >
                            All Events
                          </Link>
                        </div>
                        <div className="flex justify-center items-center">
                          <MdArrowForwardIos
                            className={clsx("text-slate-400", {
                              "text-teal-600": params.slug === "all",
                            })}
                          />
                        </div>
                      </li>
                      <li
                        className="flex justify-between px-4  border-b border-slate-400 hover:bg-slate-50 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/culture"
                            title="View all events filtered by culture"
                            className={clsx("text-slate-400 block py-2", {
                              "text-teal-600": params.slug === "culture",
                            })}
                          >
                            Culture
                          </Link>
                        </div>
                        <div className="flex justify-center items-center text-sky-700">
                          <MdArrowForwardIos
                            className={clsx("text-slate-400", {
                              "text-teal-600": params.slug === "culture",
                            })}
                          />
                        </div>
                      </li>
                      <li
                        className="flex justify-between px-4 border-b border-slate-400 hover:bg-slate-50 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/music"
                            title="View all events filtered by music"
                            className={clsx("text-slate-400 block py-2", {
                              "text-teal-600": params.slug === "music",
                            })}
                          >
                            Music
                          </Link>
                        </div>
                        <div className="flex justify-center items-center text-sky-700">
                          <MdArrowForwardIos
                            className={clsx("text-slate-400", {
                              "text-teal-600": params.slug === "music",
                            })}
                          />
                        </div>
                      </li>
                      <li
                        className="flex justify-between px-4 border-b border-slate-400 hover:bg-slate-50 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/sport"
                            title="View all events filtered by sport"
                            className={clsx("text-slate-400 block py-2", {
                              "text-teal-600": params.slug === "sport",
                            })}
                          >
                            Sport
                          </Link>
                        </div>
                        <div className="flex justify-center items-center text-sky-700">
                          <MdArrowForwardIos
                            className={clsx("text-slate-400", {
                              "text-teal-600": params.slug === "sport",
                            })}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <main className="grow">
                <Suspense
                  fallback={<div className="text-md text-white">Loading</div>}
                >
                  <EventsPageList category={params.slug} />
                </Suspense>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
