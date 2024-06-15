import { Metadata } from "next";
import { CreateEvent } from "@/components/events/buttons";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EventsTable from "@/components/events/events-table";
export const metadata: Metadata = {
  title: "Events",
  robots: {
    follow: false,
    index: false,
  },
};
export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-shrink-0 text-3xl">Your Events</div>
        <CreateEvent />
      </div>
      <EventsTable />
    </>
  );
}
