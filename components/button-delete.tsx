"use client";

import { useFormStatus } from "react-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import IconLoading from "./events/icon-loading";

export default function ButtonDelete() {
  const { pending } = useFormStatus();
  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      disabled={pending}
      title="Delete event"
    >
      <span className="sr-only">Delete</span>
      {pending ? <IconLoading /> : <TrashIcon className="w-5" />}
    </button>
  );
}
