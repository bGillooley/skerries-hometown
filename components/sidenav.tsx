import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";
import Image from "next/image";
import SideNavLinks from "./sidenav-links";
import { auth } from "@/auth";

export default async function SideNav() {
  const session = await auth();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex  flex-col items-center justify-center rounded-md bg-slate-200 p-4 ">
        <div className="w-32 text-white md:w-40">
          <Image
            src="/hometown-logo.png"
            width={840}
            height={813}
            alt="Hometown"
          />
        </div>
        <p className="text-center text-lg font-bold py-2">SKERRIES</p>
        <p className="text-center text-xs">{session?.user?.email}</p>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <SideNavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
