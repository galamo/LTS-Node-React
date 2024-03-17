type PumpProps = {
  serialNumber: string;
  img: string;
  version?: string;
  date: string;
  events?: any;
};

export default function PumpCard(props: PumpProps) {
  return (
    <div
      data-t-pump={props.serialNumber}
      id={props.serialNumber}
      style={{
        textAlign: "center",
        border: "1px solid black",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <span>Sid: {props.serialNumber} </span>
      <h3>Version {props.version || "No Version"} </h3>
      <h3>Created at: {props.date} </h3>
      <img
        src={props.img}
        height={100}
        width={100}
        alt="Tal where is the image?"
      />
    </div>
  );
}
