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
    <div>
      <form action={dispatch}>
        <h1 className="text-3xl mb-8 mt-12">Edit Event</h1>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Title
        </label>
        <input
          placeholder="Short description"
          id="title"
          name="title"
          type="text"
          defaultValue={event.title}
        />
        <label className="block text-gray-700 text-sm font-bold mt-2 mb-1">
          Event Venue
        </label>
        <input
          id="venue"
          name="venue"
          placeholder="Venue name"
          type="text"
          defaultValue={event.venue}
        />
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Venue Address
        </label>
        <input
          id="address"
          name="address"
          placeholder="Venue address (for google maps)"
          type="text"
          defaultValue={event.address}
        />
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Category
        </label>
        <select
          id="category"
          name="category"
          className="border-2 rounded-md bg-slate-50 px-1 py-2"
          defaultValue={event.category}
        >
          <option hidden>Select from:</option>
          <option value="culture">culture</option>
          <option value="music">music</option>
          <option value="sport">sport</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add event description (optional)"
          defaultValue={event.content}
        />
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Button Link URL
        </label>
        <input
          id="linkUrl"
          name="linkUrl"
          placeholder="eg. https://yourfacebookpage.etc"
          type="text"
          defaultValue={event.linkUrl}
        />
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Button Link Label
        </label>
        <input
          id="linkDesc"
          name="linkDesc"
          placeholder="eg. Book Tickets etc"
          type="text"
          defaultValue={event.linkDesc}
        />

        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Time
        </label>
        <input
          id="eventTime"
          name="eventTime"
          placeholder="eg. 19:30"
          type="text"
          defaultValue={event.eventTime}
        />
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
        />
        <input type="submit" value="SAVE EVENT" />
        <a className="back" href="#">
          or Canceloo
        </a>
      </form>
    </div>
  );
}
