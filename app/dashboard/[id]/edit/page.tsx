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
      <EventsEditForm event={event} />
    </main>
  );
}
