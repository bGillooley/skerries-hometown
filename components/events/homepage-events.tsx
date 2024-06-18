import { fetchHomepageEvents } from "@/lib/data";
import EventModule from "@/components/Event";
import { unstable_cache } from "next/cache";

const getCachedEvents = unstable_cache(
  async () => fetchHomepageEvents(),
  ["homepage-events-cached"],
  { tags: ["homepage-events"] }
);

export default async function HomepageEvents() {
  const events = await getCachedEvents();
  return (
    <>
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`mb-2 lg:mb-0 col-span-2 col-start-1 row-start-${
            index + 1
          }`}
        >
          <EventModule event={event} />
        </div>
      ))}
    </>
  );
}
