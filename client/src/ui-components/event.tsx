export type PumpEventCard = {
  ActionType: string;
  EventId: string;
  Datetime: string;
};

export default function PumpEventCard(props: PumpEventCard) {
  const { ActionType, EventId, Datetime } = props;
  return (
    <div style={{ background: "pink" }}>
      <h1>{ActionType}</h1>
      <h2>{EventId}</h2>
      <h3>{Datetime}</h3>
    </div>
  );
}
