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
    <div>
      <CreateEvent />
      <EventsTable />
    </div>
  );
}
