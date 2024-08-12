import Link from "next/link";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import AccessForm from "@/components/forms/access-form";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Skerries Hometown App - Submit an event",
  description: "Skerries Community App - get access to add events",
};

export default function page() {
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
            <p className="text-slate-100 my-4 text-center max-w-2xl mx-auto">
              Got an event or events you need people to know about? Get in touch
              with us to find out how you can add your events to the Skerries
              Hometown App.
            </p>
            <div className="max-w-xs mx-auto">
              <Suspense fallback={<p>Loading...</p>}>
                <AccessForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
