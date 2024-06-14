"use client";

import { useFormStatus } from "react-dom";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import IconLoading from "./events/icon-loading";

export default function ButtonPublish() {
  const { pending } = useFormStatus();
  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      disabled={pending}
      title="Publish event"
    >
      <span className="sr-only">Delete</span>
      {pending ? (
        <IconLoading />
      ) : (
        <ArrowUpOnSquareIcon className="w-5 text-green-500" />
      )}
    </button>
  );
}
