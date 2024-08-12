"use server";

import { ContactEmailAdminTemplate } from "@/components/email-templates/contact-template";
import { ContactEmailSchema } from "@/lib/defintions";
import { Resend } from "resend";

export async function sendContactMail(contactEmail: unknown) {
  const result = ContactEmailSchema.safeParse(contactEmail);
  console.log(result);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ".";
    });
    return {
      error: errorMessage,
    };
  }

  const resend = new Resend(process.env.RESEND);

  const { data, error } = await resend.emails.send({
    from: "Skerries Hometown <access@hometown.ie>",
    to: ["jackdinan@gmail.com"],
    subject: "Message from Access form on SKERRIES HOMETOWN",
    text: "hi there",
    react: ContactEmailAdminTemplate({
      name: result.data.name,
      email: result.data.email,
      details: result.data.message,
    }),
  });

  if (error) {
    console.log("That didn't work because...,", error);
  }

  console.log(data);
}
