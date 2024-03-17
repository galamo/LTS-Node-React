import axios from "axios";

export default async function getEventsApi(): Promise<Array<any>> {
  const eventsData: Array<any> = await axios.get(
    "http://localhost:3000/events/data"
  );
  return eventsData.data.map((e) => {
    return {
      ...e,
      DateTime: Number(e?.DateTime?.replace("/Date(", "").replace(")/", "")),
    };
  });
}
