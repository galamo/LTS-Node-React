import axios from "axios";

export default async function getPumpsApi(): Promise<
  Array<{ pumpId: string }>
> {
  const result = await axios.get("http://localhost:3000/events/pumps");
  const pumpsData: Array<{ pumpId: string }> = result.data.map((item: any) => {
    return { pumpId: item._id.toString() };
  });
  return pumpsData;
}
