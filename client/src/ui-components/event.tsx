export type PumpEventCard = {
  ActionType: string;
  EventId: string;
  Datetime: string;
};

export default function PumpEventCard(props: PumpEventCard) {
  const { ActionType, EventId, Datetime, DateTime } = props;
  return (
    <div style={{ background: "pink" }}>
      <h1>{ActionType}</h1>
      <h2>{EventId}</h2>
      <h3>{new Date(DateTime).toLocaleString()}</h3>
    </div>
  );
}
