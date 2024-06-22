"use server";
import prisma from "./prisma";
import { z } from "zod";
import { auth } from "@/auth";
import { User } from "./defintions";
import { revalidatePath } from "next/cache";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
    venue?: string[];
    address?: string[];
    category?: string[];
    description?: string[];
    linkUrl?: string[];
    linkDesc?: string[];
    eventDate?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: "Please enter a title" }),
  venue: z.string().min(1, { message: "Please enter your Venue name" }),
  address: z.string().min(1, { message: "Please enter the venue address" }),
  category: z.enum(["culture", "music", "sport"], {
    message: "Please choose a category",
  }),
  description: z
    .string()
    .min(1, { message: "Please enter a description of your event" }),
  linkUrl: z.string().optional(),
  linkDesc: z.string().optional(),
  eventDate: z.string().min(1, { message: "Please enter the event date" }),
});

const CreateEventSchema = FormSchema.omit({ id: true });
const EditEventSchema = FormSchema.omit({ id: true });
export async function createEvent(
  prevState: State,
  formData: FormData
): Promise<State> {
  const session = await auth();

  const user = session?.user?.email;

  const userDbId = (await prisma.user.findUnique({
    where: {
      email: user || undefined,
    },
  })) as User;

  // Validate form using Zod
  const validatedFields = CreateEventSchema.safeParse({
    title: formData.get("title"),
    venue: formData.get("venue"),
    address: formData.get("address"),
    category: formData.get("category"),
    description: formData.get("description"),
    linkUrl: formData.get("linkUrl"),
    linkDesc: formData.get("linkDesc"),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Event.",
    };
  }

  const {
    title,
    venue,
    address,
    category,
    description,
    linkUrl,
    linkDesc,
    eventDate,
  } = validatedFields.data;

  const dateTime = new Date(eventDate).toISOString();
  try {
    await prisma.event.create({
      data: {
        title: title,
        address: address,
        eventDate: dateTime,
        venue: venue,
        linkUrl: linkUrl,
        linkDesc: linkDesc,
        category: category,
        content: description,
        authorId: userDbId.id,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to create event",
    };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function updateEvent(
  id: string,
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = EditEventSchema.safeParse({
    title: formData.get("title"),
    venue: formData.get("venue"),
    address: formData.get("address"),
    category: formData.get("category"),
    description: formData.get("description"),
    linkUrl: formData.get("linkUrl"),
    linkDesc: formData.get("linkDesc"),
    eventDate: formData.get("eventDate"),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Event.",
    };
  }
  const {
    title,
    venue,
    address,
    category,
    description,
    linkUrl,
    linkDesc,
    eventDate,
  } = validatedFields.data;

  const dateTime = new Date(eventDate).toISOString();
  try {
    await prisma.event.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        address: address,
        eventDate: dateTime,
        venue: venue,
        linkUrl: linkUrl,
        linkDesc: linkDesc,
        category: category,
        content: description,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to create event",
    };
  }

  redirect("/dashboard");
}

export async function duplicateEvent(event: any) {
  const session = await auth();
  const user = session?.user?.email;
  console.log(event);
  const userDbId = (await prisma.user.findUnique({
    where: {
      email: user || undefined,
    },
  })) as User;
  try {
    await prisma.event.create({
      data: {
        title: event.title + " **DUPLICATE",
        address: event.address,
        eventDate: event.eventDate,
        venue: event.venue,
        linkUrl: event.linkUrl || "",
        linkDesc: event.linkDesc || "",
        category: event.category,
        content: event.content,
        authorId: userDbId.id,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Duplicated event" };
  } catch (error) {
    return {
      message: "Database Error: Failed to duplicate event",
    };
  }
}

export async function deleteEvent(id: string) {
  try {
    await prisma.event.delete({
      where: {
        id: id,
      },
    });
    revalidateTag("homepage-events");
    revalidateTag("all-events");
    revalidatePath("/dashboard");
    return { message: "Deleted event" };
  } catch (error) {
    return { message: "Database Error: Failed to delete evemt." };
  }
}

export async function publishEvent(id: string) {
  try {
    await prisma.event.update({
      where: {
        id: id,
      },
      data: {
        published: true,
      },
    });
    revalidatePath("/dashboard");
    revalidateTag("homepage-events");
    revalidateTag("all-events");
    return { message: "Published event" };
  } catch (error) {
    return { message: "Database Error: Failed to publish evemt." };
  }
}

export async function unPublishEvent(id: string) {
  try {
    await prisma.event.update({
      where: {
        id: id,
      },
      data: {
        published: false,
      },
    });
    revalidatePath("/dashboard");
    revalidateTag("homepage-events");
    revalidateTag("all-events");
    return { message: "Published event" };
  } catch (error) {
    return { message: "Database Error: Failed to publish evemt." };
  }
}

export async function clearCache() {
  try {
    revalidatePath("/dashboard");
    revalidatePath("/");
    revalidatePath("/events/all");
    revalidatePath("/events/culture");
    revalidatePath("/events/music");
    revalidatePath("/events/culture");
    revalidatePath("/events/sport");
    return { message: "Yay, it worked!" };
  } catch (error) {
    return { message: "Boo! It didn't work..." };
  }
}
