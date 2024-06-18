import EventsCreateForm from "@/components/events/form-create-event";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function createEvent() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <div className="text-xl md:text-3xl">
        Your Events / <span className=" text-gray-400">Create an event</span>
      </div>
      <EventsCreateForm />
    </>
  );
}
