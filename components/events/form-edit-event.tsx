"use client";
import { updateEvent } from "@/lib/actions";
import { EventForm } from "@/lib/defintions";
import { useFormState } from "react-dom";
import { useState } from "react";
import { foramtDbDateString } from "@/lib/utils";
export default function EventsEditForm({ event }: { event: EventForm }) {
  const [theEventDate, setTheEventDate] = useState(
    foramtDbDateString(event.eventDate)
  );
  const initialState = { message: null, errors: {} };
  const updateEventWithId = updateEvent.bind(null, event.id);
  const [state, dispatch] = useFormState(updateEventWithId, initialState);
  return (
    <div className="rounded-md bg-gray-50 p-4 mt-7 md:p-6 max-w-3xl">
      <form action={dispatch}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-1 mb-1">
            Event Title
          </label>
          <input
            placeholder="Short description"
            id="title"
            name="title"
            type="text"
            defaultValue={event.title}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-2 mb-1">
            Event Venue
          </label>
          <input
            id="venue"
            name="venue"
            placeholder="Venue name"
            type="text"
            defaultValue={event.venue}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Venue Address
          </label>
          <input
            id="address"
            name="address"
            placeholder="Venue address (for google maps)"
            type="text"
            defaultValue={event.address}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Event Category
          </label>
          <select
            id="category"
            name="category"
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={event.category}
          >
            <option hidden>Select from:</option>
            <option value="culture">culture</option>
            <option value="music">music</option>
            <option value="sport">sport</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Event Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Add event description (optional)"
            defaultValue={event.content}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 h-24 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Event Button Link URL
          </label>
          <input
            id="linkUrl"
            name="linkUrl"
            placeholder="eg. https://yourfacebookpage.etc"
            type="text"
            defaultValue={event.linkUrl}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Event Button Link Label
          </label>
          <input
            id="linkDesc"
            name="linkDesc"
            placeholder="eg. Book Tickets etc"
            type="text"
            defaultValue={event.linkDesc}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Event Time
          </label>
          <input
            id="eventTime"
            name="eventTime"
            placeholder="eg. 19:30"
            type="text"
            defaultValue={event.eventTime}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={theEventDate}
            onChange={(event) => {
              setTheEventDate(event.target.value);
            }}
            className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <input
            className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            type="submit"
            value="UPDATE EVENT"
          />
        </div>
      </form>
    </div>
  );
}
