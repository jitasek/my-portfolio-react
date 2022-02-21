// Card component = subcomponent of the Portfolio component

function Card({ projectName }) {
  return (
    <h2 style={{ border: "1px solid green" }}>
      Card
      <h4>{projectName}</h4>
    </h2>
  );
}

export default Card;
