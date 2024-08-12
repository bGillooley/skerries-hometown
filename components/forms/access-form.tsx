"use client";

import ErrorMessage from "../ErrorMessage";
import IconError from "../IconError";
import { ContactEmailSchema } from "@/lib/defintions";
import { sendContactMail } from "@/actions/contact-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AccessForm() {
  const [disableForm, setDisableForm] = useState(false);
  const clientSendContactMail = async (formData: FormData) => {
    setDisableForm(true);
    const contactEmail = {
      name: formData.get("your-name"),
      email: formData.get("your-email"),
      message: formData.get("your-details"),
    };
    const result = ContactEmailSchema.safeParse(contactEmail);
    if (!result.success) {
      let contactErrors = result.error.issues.map((issue) => {
        return issue.path[0] + ": " + issue.message;
      });
      toast(<ErrorMessage errors={contactErrors} />, { icon: <IconError /> });
      setDisableForm(false);
      return;
    }
    const response = await sendContactMail(result.data);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success(
        "Thanks for contacting us. We will review your message and be in touch soon."
      );
    }
  };

  return (
    <form action={clientSendContactMail} className="w-full">
      <label
        htmlFor="your-name"
        className="block text-sm font-medium leading-6 text-slate-100"
      >
        Name:
      </label>
      <div className="mb-2">
        <input
          type="text"
          name="your-name"
          id="your-name"
          placeholder="Your name..."
          className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <label
        htmlFor="your-email"
        className="block text-sm font-medium leading-6 text-slate-100"
      >
        Email:
      </label>
      <div className="mb-2">
        <input
          type="email"
          name="your-email"
          id="your-email"
          placeholder="Your email..."
          className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <label
        htmlFor="your-details"
        className="block text-sm font-medium leading-6 text-slate-100"
      >
        Your message:
      </label>
      <div className="mb-2">
        <textarea
          id="your-details"
          name="your-details"
          className="block h-[140px] w-full rounded-md border-0 bg-white px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
      <button
        disabled={disableForm}
        className="cursor-pointer w-full rounded-md text-center font-semibold py-2 px-3 bg-beach hover:bg-[#C3933D]"
      >
        {disableForm ? " MESSAGE SENT " : "SEND MESSAGE"}
      </button>
    </form>
  );
}
