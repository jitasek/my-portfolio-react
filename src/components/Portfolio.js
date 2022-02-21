// Portfolio component - will be displayed when the Portfolio tab in main nav is clicked
import Card from "./Card";

function Portfolio() {
  return (
    <div className="flex space-x-4">
      <Card projectName="Project 1" desc="Project 1 description goes here." />
      <Card projectName="Project 2" desc="Project 2 description goes here." />
      <Card projectName="Project 3" desc="Project 3 description goes here." />
    </div>
  );
}

export default Portfolio;
