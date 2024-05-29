import * as cheerio from "cheerio";
export async function GET() {
  try {
    const response = await fetch(
      "https://www.tidetime.org/europe/ireland/skerries.htm",
      { cache: "no-store" }
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
