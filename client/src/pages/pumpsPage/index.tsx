import { useEffect, useState } from "react";
import getPumpsApi from "../../services/pumps";
import PumpCard from "../../ui-components/pump";

export default function PumpsPage() {
  const [action, setAction] = useState("1");
  const [showFilter, setShowFilter] = useState(false);
  const [pumps, setPumps] = useState<Array<{ pumpId: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPumps() {
      try {
        setIsLoading(true);
        const result = await getPumpsApi();
        setPumps(result);
      } catch (error) {
        alert("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }

    getPumps();

    return () => {
      //   alert("are you sure you want to discard your changes?");
    };
  }, []);

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <h1 style={{ textAlign: "center" }}> Pumps Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        Show Action Filter
      </button>
      {showFilter && (
        <div>
          current Action:
          <input
            type="text"
            onChange={(e) => {
              const text = e.target.value;
              setAction(text);
            }}
          />
        </div>
      )}
      {isLoading && (
        <div style={{ position: "absolute", left: "50%", top: "45%" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {pumps.map((p) => {
          return (
            <PumpCard
              serialNumber={p.pumpId}
              date={new Date().toISOString()}
              img="https://wt-obk.wearable-technologies.com/wp-content/uploads/2019/06/Sorrel-drug-delivery-1.jpg"
            />
          );
        })}
      </div>
    </div>
  );
}
