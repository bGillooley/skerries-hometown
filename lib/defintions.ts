import { z } from "zod";
export const ContactEmailSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Please enter your message" }),
});

export type Event = {
  id: string;
  title: string;
  category: string;
  content: string | undefined | null;
  address: string;
  eventDate: Date;
  venue: string;
  linkUrl?: string | null;
  linkDesc?: string | null;
  published: boolean;
  authorId: string | null;
};

export type User = {
  id: string;
};

export type EventForm = {
  id: string;
  title: string;
  category: string;
  content: string;
  address: string;
  eventDate: string;
  venue: string;
  linkUrl?: string;
  linkDesc?: string;
};
