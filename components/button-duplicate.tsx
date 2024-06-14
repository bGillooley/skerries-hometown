"use client";

import { useFormStatus } from "react-dom";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import IconLoading from "./events/icon-loading";

export default function ButtonDuplicate() {
  const { pending } = useFormStatus();
  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      disabled={pending}
      title="Duplicate event"
    >
      <span className="sr-only">Duplicate</span>
      {pending ? <IconLoading /> : <DocumentDuplicateIcon className="w-5" />}
    </button>
  );
}
