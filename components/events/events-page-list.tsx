import { Event } from "@/lib/defintions";
import { fetchFilteredEvents } from "@/lib/data";
import EventModule from "../Event";

import { unstable_cache } from "next/cache";

const getAllCachedEvents = unstable_cache(
  async (category) => fetchFilteredEvents(category),
  ["all-events-cached"],
  { tags: ["all-events"] }
);

export default async function EventsPageList({
  category,
}: {
  category: string;
}) {
  const events = await getAllCachedEvents(category);
  return (
    <>
      {events.map((event: Event) => (
        <div key={event.id} className="mb-2">
          <EventModule event={event} />
        </div>
      ))}
    </>
  );
}
