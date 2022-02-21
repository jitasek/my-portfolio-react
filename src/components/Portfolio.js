// Portfolio component - will be displayed when the Portfolio tab in main nav is clicked
import Card from "./Card";

function Portfolio() {
  return (
    <div>
      Portfolio
      <Card projectName="Project 1" />
      <Card projectName="Project 2" />
      <Card projectName="Project 3" />
    </div>
  );
}

export default Portfolio;
