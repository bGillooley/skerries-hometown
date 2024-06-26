import * as cheerio from "cheerio";
import { unstable_noStore as noStore } from "next/cache";
export async function GET() {
  noStore();
  try {
    const response = await fetch(
      "https://www.tidetime.org/europe/ireland/skerries.htm"
    );
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    let tides = [] as any;

    $("#tideTable > tbody > tr > td").each((i, elm) => {
      let tideData = $(elm).html();
      let obj = {
        tides: tideData,
      };
      tides.push(obj);
    });

    return Response.json(tides);
  } catch (err) {
    console.log(err);
  }
}
