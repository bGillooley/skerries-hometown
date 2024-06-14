import { unstable_noStore as noStore } from "next/cache";
import prisma from "./prisma";
import { addHours } from "./utils";
export async function fetchEventById(id: string) {
  noStore();
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: id,
      },
    });

    return event;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

export async function fetchHomepageEvents() {
  noStore();
  try {
    let events = await prisma.event.findMany({
      take: 6,
      where: {
        published: true,
        eventDate: {
          gte: addHours(new Date(), -6),
        },
      },
      orderBy: {
        eventDate: "desc",
      },
    });

    console.log("Billy g: ", events);
    return events;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch events.");
  }
}
