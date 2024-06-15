import { Metadata } from "next";
import { fetchEventById } from "@/lib/data";
import EventsEditForm from "@/components/events/form-edit-event";
export const metadata: Metadata = {
  title: "Edit event",
};

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const event: any = await fetchEventById(id);

  return (
    <main>
      <div className="text-xl md:text-3xl">
        Your Events / <span className=" text-gray-400">Edit an event</span>
      </div>
      <EventsEditForm event={event} />
    </main>
  );
}
