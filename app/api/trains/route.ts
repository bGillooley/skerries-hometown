import { unstable_noStore as noStore } from "next/cache";
import * as cheerio from "cheerio";
export async function GET(request: Request) {
  noStore();
  try {
    const response = await fetch(
      "https://www.irishrail.ie/en-ie/train-timetables/live-departure-train-times?key=skerries&REQ0JourneyStopskeyID=&HWAI%3DJS%21js=yes&HWAI%3DJS%21ajax=yes#live-departure-anchor"
    );
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    let trains = {} as any;
    $("div.ir-live-timetable > table:first")
      .toArray()
      .map((element, i) => {
        //6const section = $(element).find("caption:first").text().trim();
        // trains["heading" + (i + 1)] = section;
        trains["details" + (i + 1)] = [];
        let obj = {};
        $(element)
          .find("tbody:first   > tr:not([class])")
          .each((idx, elm) => {
            let obj = {
              destination: $(elm)
                .find("td:nth-child(2) button")
                .text()
                .trim()
                .replace(/\s*[\[{(].*?[)}\]]\s*/g, ""),
              // heading: section,
              eta: $(elm).find("td:nth-child(4)").text().trim(),
              duein: $(elm).find("td:nth-child(5)").text().trim(),
              info: $(elm).find("td:nth-child(6)").text().trim(),
            };
            trains["details" + (i + 1)].push(obj);
            // trains["heading"];
          });
      });
    return Response.json(trains);
  } catch (err) {
    console.log(err);
  }
}
