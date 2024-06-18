import React from "react";
import { auth } from "@/auth";
import { formatDateToLocal } from "@/lib/utils";
import {
  fetchAllEventsByUserId,
  fetchAllEvents,
  getLogginInUser,
} from "@/lib/data";
import {
  DeleteEvent,
  DuplicateEvent,
  UpdateEvent,
  PublishEvent,
  UnPublishEvent,
} from "./buttons";

import { unstable_cache } from "next/cache";

const getAllCachedEvents = unstable_cache(
  async () => fetchAllEvents(),
  ["dashboard-events-cached"],
  { tags: ["all-dashboard-events"] }
);

const getAllCachedEventsByUserId = unstable_cache(
  async (id) => fetchAllEventsByUserId(id),
  ["dashboard-events-by-user-id-cached"],
  { tags: ["all-dashboard-events-by-user-id"] }
);

const getUserByEmail = unstable_cache(
  async (email) => getLogginInUser(email),
  ["user-by-email"],
  { tags: ["logged-in-user"] }
);

export default async function EventsTable() {
  const session = await auth();
  let events = undefined;
  let superUser = false;
  if (session?.user?.email === "gillooley@gmail.com") {
    superUser = true;
  }
  if (session?.user?.email === "jackdinan@gmail.com") {
    superUser = true;
  }
  if (superUser) {
    events = await getAllCachedEvents();
  } else {
    const user = await getUserByEmail(session?.user?.email as string);
    events = await getAllCachedEventsByUserId(user?.id as string);
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {events?.map((event) => (
              <div
                key={event.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{event.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{event.venue}</p>
                  </div>
                  <div>
                    <p>Pending</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatDateToLocal(
                        new Date(event.eventDate).toISOString()
                      )}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    {superUser && event.published && (
                      <UnPublishEvent id={event.id} />
                    )}
                    {superUser && !event.published && (
                      <PublishEvent id={event.id} />
                    )}
                    <UpdateEvent id={event.id} />
                    <DuplicateEvent event={event} />
                    <DeleteEvent id={event.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Event
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Venue
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Desc
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {events?.map((event) => (
                <tr
                  key={event.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3 max-w-52 truncate">
                    {event.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{event.venue}</td>
                  <td className="whitespace-nowrap px-3 py-3 max-w-52 truncate">
                    {event.content}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(new Date(event.eventDate).toISOString())}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {event.published ? (
                      <span className="text-green-500">Published</span>
                    ) : (
                      <span className="text-red-500">Pending</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div className="flex justify-end gap-3">
                      {superUser && event.published && (
                        <UnPublishEvent id={event.id} />
                      )}
                      {superUser && !event.published && (
                        <PublishEvent id={event.id} />
                      )}
                      <UpdateEvent id={event.id} />
                      <DuplicateEvent event={event} />
                      <DeleteEvent id={event.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
