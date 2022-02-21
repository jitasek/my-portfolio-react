// Portfolio component - will be displayed when the Portfolio tab in main nav is clicked
import Card from "./Card";

function Portfolio() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Portfolio
      <Card projectName="Project 1" />
      <Card projectName="Project 2" />
      <Card projectName="Project 3" />
    </div>
  );
}

export default Portfolio;
