import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  revalidatePath("/dashboard");
  revalidatePath("/");
  revalidatePath("/events/all");
  revalidatePath("/events/culture");
  revalidatePath("/events/music");
  revalidatePath("/events/culture");
  revalidatePath("/events/sport");
  revalidateTag("all-events");
  revalidateTag("homepage-events");
  return Response.json({ success: true });
}
