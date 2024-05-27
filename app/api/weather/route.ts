export async function GET() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=Skerries&days=5&aqi=yes&alerts=yes`
    );
    const data = await response.json();

    return Response.json(data);
  } catch (err) {
    console.log(err);
  }
}
