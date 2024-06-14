import { SignIn } from "@/components/sign-in";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
export const metadata: Metadata = {
  title: "Sign In",
  robots: {
    follow: false,
    index: false,
  },
};

export default function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <SignIn />
      <Link
        title="Return to the homepage"
        href="/"
        className="text-xs py-2 flex items-center hover:underline"
      >
        <ArrowLeftCircleIcon className="w-5 mr-1" />
        <span>Or return to homepage</span>
      </Link>
    </div>
  );
}
