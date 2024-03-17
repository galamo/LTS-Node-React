import "./App.css";
import PumpCard from "./ui-components/pump";
import PumpEventCard from "./ui-components/event";
import { Link, Route, Routes } from "react-router-dom";
import PumpsPage from "./pages/pumpsPage";
import EventsPage from "./pages/eventsPage";

function App() {
  const showEvent = false;
  const headerText = "Pump Events";
  const temps = [1, 2, 3, 4, 5, 3, 4, 544, 3, 34, 5, 3, 3, 3];
  const pumpData = {
    serialNumber: "834784747r54",
    date: new Date().toISOString(),
    img: "https://wt-obk.wearable-technologies.com/wp-content/uploads/2019/06/Sorrel-drug-delivery-1.jpg",
    version: "10.2.31",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
          alignContent: "center",
          margin: "auto",
        }}
      >
        <Link to="/pumps"> Pumps </Link>
        <Link to="/events"> Events </Link>
        <Link to="/"> home </Link>
        <Link to="/about"> about </Link>
      </div>
     
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pumps" element={<PumpsPage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>

      {/* <PumpHeader text={"Pump Data"} />
      <PumpCard
        serialNumber={pumpData.serialNumber}
        version={pumpData.version}
        img={pumpData.img}
        date={pumpData.date}
      />

      <PumpHeader text="single event" />
      {showEvent && (
        <PumpEventCard
          ActionType="2"
          EventId="11112222"
          Datetime={new Date().toISOString()}
        />
      )} */}

      {/* <PumpHeader text={headerText} />
      {temps.map((n) => {
        return <h2 style={{ color: n > 100 ? "red" : "black" }}> {n} </h2>;
      })} */}
    </>
  );
}
type PumpHeaderType = { text: string };
function PumpHeader(props: PumpHeaderType) {
  return <h1 style={{ color: "blue" }}> {props.text} </h1>;
}

function Home() {
  return <h1> Home</h1>;
}

function About() {
  return <h1>About </h1>;
}

export default App;
