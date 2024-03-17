import { useEffect, useState } from "react";
import getEventsApi from "../../services/events";
import { BarChart, PieChart } from "@mui/x-charts";
import PumpEventCard from "../../ui-components/event";

export default function EventsPage() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const res = await getEventsApi();
        setEventsData(res.slice(0, 300));
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    }

    getEvents();
  }, []);

  const chartData = eventsData
    .filter((d) => d.DateTime)
    .map((d: any) => {
      // let date = d?.DateTime?.replace("/Date(", "").replace(")/", "");
      return {
        dateTime: new Date(Number(d.DateTime)),
        temp: Number(d.ParsedValues.split("|")[2]) || 0,
      };
    });

  // @ts-ignore
  const pieChartRowData = eventsData.reduce((acc: any, currentEvent: any) => {
    if (acc[currentEvent.EventType]) {
      acc[currentEvent.EventType] = acc[currentEvent.EventType] + 1;
    } else {
      acc[currentEvent.EventType] = 1;
    }

    return acc;
  }, {});

  const pieChartData = Object.entries(pieChartRowData).map(([key, value]) => {
    return { id: key, label: key, value };
  });

  console.log(pieChartData, "pieChartData");
  const sortedItems = pieChartData
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 10);

  console.log(sortedItems);
  const dataA = chartData?.map((item) => item.temp);

  const dataB = chartData?.map((item) => item.dateTime);

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <h1 style={{ textAlign: "center" }}> Events Page</h1>
      {eventsData.length === 0 ? null : (
        <BarChart
          series={[{ data: dataA }]}
          height={290}
          xAxis={[
            {
              data: dataB,
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}

      {eventsData.length === 0 ? null : (
        <PieChart
          series={[
            {
              data: sortedItems,
            },
          ]}
          width={800}
          height={400}
        />
      )}

      <div>
        {eventsData.map((e) => {
          return <PumpEventCard {...e} />;
        })}
      </div>
    </div>
  );
}
