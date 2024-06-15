import Link from "next/link";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  deleteEvent,
  duplicateEvent,
  publishEvent,
  unPublishEvent,
} from "@/lib/actions";
import ButtonDuplicate from "../button-duplicate";
import ButtonDelete from "../button-delete";
import ButtonPublish from "../button-publish";
import ButtonUnPublish from "../button-unpublish";

export function CreateEvent() {
  return (
    <Link
      href="/dashboard/create-event"
      className="flex h-10 justify-between items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span>Create Event</span> <PlusIcon className="w-5 ml-2" />
    </Link>
  );
}

export function UpdateEvent({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/${id}/edit`}
      title="Edit event"
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export async function DuplicateEvent({ event }: { event: any }) {
  const duplicateSpecificEvent = duplicateEvent.bind(null, event);
  return (
    <form action={duplicateSpecificEvent}>
      <ButtonDuplicate />
    </form>
  );
}

export async function DeleteEvent({ id }: { id: string }) {
  const deleteEventWithId = deleteEvent.bind(null, id);
  return (
    <form action={deleteEventWithId}>
      <ButtonDelete />
    </form>
  );
}
export async function PublishEvent({ id }: { id: string }) {
  const publishEventWithId = publishEvent.bind(null, id);
  return (
    <form action={publishEventWithId}>
      <ButtonPublish />
    </form>
  );
}

export async function UnPublishEvent({ id }: { id: string }) {
  const unPublishEventWithId = unPublishEvent.bind(null, id);
  return (
    <form action={unPublishEventWithId}>
      <ButtonUnPublish />
    </form>
  );
}
