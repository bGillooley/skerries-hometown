"use client";
import { DocumentPlusIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function SideNavLinks() {
  const pathname = usePathname();
  return (
    <>
      <Link
        key="dsfsdf"
        href="/dashboard"
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-sky-100 text-blue-600": pathname === "/dashboard",
          }
        )}
      >
        <ListBulletIcon className="w-6" />
        <p className="hidden md:block">Your events</p>
      </Link>
      <Link
        key="dsfsdsdff"
        href="/dashboard/create-event"
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-sky-100 text-blue-600": pathname === "/dashboard/create-event",
          }
        )}
      >
        <DocumentPlusIcon className="w-6" />
        <p className="hidden md:block">Add an event</p>
      </Link>
    </>
  );
}
