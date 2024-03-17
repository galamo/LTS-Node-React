import "./App.css";
import PumpCard from "./ui-components/pump";

function App() {
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
      <PumpHeader text={"Pump Data"} />
      <PumpCard
        serialNumber={pumpData.serialNumber}
        version={pumpData.version}
        img={pumpData.img}
        date={pumpData.date}
      />
    {/* use here!!! */}
      <PumpHeader text={headerText} />
      {temps.map((n) => {
        return <h2 style={{ color: n > 100 ? "red" : "black" }}> {n} </h2>;
      })}
    </>
  );
}
type PumpHeaderType = { text: string };
function PumpHeader(props: PumpHeaderType) {
  return <h1 style={{ color: "blue" }}> {props.text} </h1>;
}

export default App;
