import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

//export const revalidate = 0;
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  revalidateTag("all-events");
  revalidateTag("homepage-events");
  revalidatePath("/dashboard");
  revalidatePath("/");
  revalidatePath("/events/all");
  revalidatePath("/events/culture");
  revalidatePath("/events/music");
  revalidatePath("/events/culture");
  revalidatePath("/events/sport");
  return Response.json({ success: true });
}
