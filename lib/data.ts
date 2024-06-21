import prisma from "./prisma";
import { foramtDbDateString } from "@/lib/utils";

let todaysDate = new Date();
todaysDate.setDate(todaysDate.getDate() - 1);
const yesterdaysDate = foramtDbDateString(todaysDate.toString());

export async function fetchEventById(id: string) {
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
  try {
    let events = await prisma.event.findMany({
      take: 6,
      where: {
        published: true,
        eventDate: {
          gt: new Date(yesterdaysDate),
        },
      },
      orderBy: {
        eventDate: "asc",
      },
    });

    return events;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch events.");
  }
}

export async function fetchFilteredEvents(category: string) {
  if (category === "all") {
    try {
      let events = await prisma.event.findMany({
        where: {
          published: true,
          eventDate: {
            gte: new Date(yesterdaysDate),
          },
        },
        orderBy: {
          eventDate: "asc",
        },
      });

      return events;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch events.");
    }
  } else {
    try {
      let events = await prisma.event.findMany({
        where: {
          published: true,
          category: category,
          eventDate: {
            gte: new Date(yesterdaysDate),
          },
        },
        orderBy: {
          eventDate: "asc",
        },
      });

      return events;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch events.");
    }
  }
}

export async function fetchAllEvents() {
  try {
    let events = await prisma.event.findMany({
      orderBy: {
        eventDate: "asc",
      },
    });
    return events;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch events.");
  }
}
export async function fetchAllEventsByUserId(id: string) {
  try {
    let events = await prisma.event.findMany({
      where: {
        authorId: id,
      },
      orderBy: {
        eventDate: "asc",
      },
    });
    return events;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch events.");
  }
}

export async function getLogginInUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
}
