import { clearCache } from "@/lib/actions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cache buster",
  robots: {
    follow: false,
    index: false,
  },
};
export default async function page() {
  return (
    <div>
      <form action={clearCache}>
        <button type="submit">Clear Cache now, baby</button>
      </form>
    </div>
  );
}
