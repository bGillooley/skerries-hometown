"use client";

import { createEvent } from "@/lib/actions";
import { useFormState } from "react-dom";
export default function EventsCreateForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createEvent, initialState);
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6 max-w-3xl">
      <form action={dispatch}>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Title
        </label>
        <input
          placeholder="Event title"
          id="title"
          name="title"
          type="text"
          aria-describedby="title-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title &&
            state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        <label className="block text-gray-700 text-sm font-bold mt-2 mb-1">
          Event Venue
        </label>
        <input
          id="venue"
          name="venue"
          placeholder="Venue name"
          type="text"
          aria-describedby="venue-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="venue-error" aria-live="polite" aria-atomic="true">
          {state.errors?.venue &&
            state.errors.venue.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add event description (optional)"
          aria-describedby="description-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description &&
            state.errors.description.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Venue Address
        </label>
        <input
          id="address"
          name="address"
          placeholder="Venue address (for google maps)"
          type="text"
          aria-describedby="address-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="address-error" aria-live="polite" aria-atomic="true">
          {state.errors?.address &&
            state.errors.address.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Category
        </label>
        <select
          id="category"
          name="category"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
          aria-describedby="category-error"
        >
          <option hidden>Select from:</option>
          <option value="culture">culture</option>
          <option value="music">music</option>
          <option value="sport">sport</option>
        </select>
        <div id="category-error" aria-live="polite" aria-atomic="true">
          {state.errors?.category &&
            state.errors.category.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Button Link URL
        </label>
        <input
          id="linkUrl"
          name="linkUrl"
          placeholder="eg. https://yourfacebookpage.etc"
          type="url"
          aria-describedby="linkUrl-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.linkUrl &&
            state.errors.linkUrl.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Button Link Label
        </label>
        <input
          id="linkDesc"
          name="linkDesc"
          placeholder="eg. Book Tickets etc"
          type="text"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Date
        </label>
        <input
          type="date"
          placeholder="Event Date"
          id="eventDate"
          name="eventDate"
          aria-describedby="eventDate-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="eventDate-error" aria-live="polite" aria-atomic="true">
          {state.errors?.eventDate &&
            state.errors.eventDate.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">
          Event Time
        </label>
        <input
          id="eventTime"
          name="eventTime"
          placeholder="eg. 19:30"
          type="text"
          aria-describedby="eventTime-error"
          className="block w-full rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-500"
        />
        <div id="eventTime-error" aria-live="polite" aria-atomic="true">
          {state.errors?.eventTime &&
            state.errors.eventTime.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        <input
          type="submit"
          className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          value="SAVE EVENT"
        />
      </form>
    </div>
  );
}