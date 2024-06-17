import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import themeImg from "../../../public/skerries-drone-view.jpg";
import clsx from "clsx";
import { Suspense } from "react";
import EventsPageList from "@/components/events/events-page-list";
export default async function page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="absolute z-50 top-4 left-4 md:top-8 md:left-8 text-3xl text-slate-100">
        <Link href="/">
          {" "}
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="relative md:h-full md:w-full overflow-visible">
        <Image
          className="brightness-40 z-0 absolute w-full h-full object-cover"
          src={themeImg}
          quality={50}
          loading="eager"
          alt="Skerries Rules"
          priority
        />
        <div className="absolute z-10  w-full h-full bg-gradient-to-t from-black"></div>
        <div className="relative z-20">
          <div className="relative pt-24 pb-4 md:pb-8 px-6">
            <h1 className="text-3xl md:text-6xl text-slate-100 text-center">
              What's On in Skerries
            </h1>
          </div>
          <div className="md:hidden relative z-20 text-center text-lg pb-4 text-white">
            <div className="inline-block px-2">Filter: </div>
            <div className="inline-block px-2">
              <Link
                href="/events/all"
                title="All events"
                className={clsx("block", params.slug === "all" && "font-bold")}
              >
                All
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link
                href="/events/culture"
                title="All events"
                className={clsx(
                  "block",
                  params.slug === "culture" && "font-bold"
                )}
              >
                Culture
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link
                href="/events/music"
                title="All events"
                className={clsx(
                  "block",
                  params.slug === "music" && "font-bold"
                )}
              >
                Music
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link
                href="/events/sport"
                title="All events"
                className={clsx(
                  "block",
                  params.slug === "sport" && "font-bold"
                )}
              >
                Sports
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full pb-16 z-50">
          <div className="relative container max-w-5xl mx-auto z-50">
            <div className="flex flex-col md:flex-row md:space-between gap-9 px-4">
              <nav role="navigation" aria-labelledby="filter-by-category">
                <div className="hidden md:block  md:w-[300px] drop-shadow sticky top-0">
                  <div className="w-full p-4 mb-2 ml-2 bg-white rounded-md">
                    <h2
                      id="filter-by-category"
                      className="text-2xl mb-4 font-semibold text-center"
                    >
                      FILTER BY CATEGORY
                    </h2>
                    <ul className="text-sky-700">
                      <li
                        className="flex justify-between px-4  border-b border-slate-400 hover:bg-slate-100 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/all"
                            title="View all events"
                            className={clsx("text-black block py-2", {
                              "text-sky-700": params.slug === "all",
                            })}
                          >
                            All Events
                          </Link>
                        </div>
                        <div className="flex justify-center items-center">
                          <MdArrowForwardIos />
                        </div>
                      </li>
                      <li
                        className="flex justify-between px-4  border-b border-slate-400 hover:bg-slate-100 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/culture"
                            title="View all events filtered by culture"
                            className={clsx("text-black block py-2", {
                              "text-sky-700": params.slug === "culture",
                            })}
                          >
                            Culture
                          </Link>
                        </div>
                        <div className="flex justify-center items-center text-sky-700">
                          <MdArrowForwardIos />
                        </div>
                      </li>
                      <li
                        className="flex justify-between px-4 border-b border-slate-400 hover:bg-slate-100 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/music"
                            title="View all events filtered by music"
                            className={clsx("text-black block py-2", {
                              "text-sky-700": params.slug === "music",
                            })}
                          >
                            Music
                          </Link>
                        </div>
                        <div className="flex justify-center items-center text-sky-700">
                          <MdArrowForwardIos />
                        </div>
                      </li>
                      <li
                        className="flex justify-between px-4 border-b border-slate-400 hover:bg-slate-100 cursor-pointer"
                        tabIndex={0}
                      >
                        <div className="font-semibold grow">
                          <Link
                            href="/events/sport"
                            title="View all events filtered by sport"
                            className={clsx("text-black block py-2", {
                              "text-sky-700": params.slug === "sport",
                            })}
                          >
                            Sport
                          </Link>
                        </div>
                        <div className="flex justify-center items-center text-sky-700">
                          <MdArrowForwardIos />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <main className="grow">
                <Suspense fallback={<div>Loading</div>}>
                  <EventsPageList category={params.slug} />
                </Suspense>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
