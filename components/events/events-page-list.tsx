import { Event } from "@/lib/defintions";
import { fetchFilteredEvents } from "@/lib/data";
import EventModule from "../Event";

export default async function EventsPageList({
  category,
}: {
  category: string;
}) {
  console.log("This is a mistake:... ", typeof category);
  console.log("This is another ", category);
  const events = await fetchFilteredEvents(category);
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
