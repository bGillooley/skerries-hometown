import EventsCreateForm from "@/components/events/form-create-event";

export default async function createEvent() {
  return (
    <>
      <div className="text-xl md:text-3xl">
        Your Events / <span className=" text-gray-400">Create an event</span>
      </div>
      <EventsCreateForm />
    </>
  );
}
