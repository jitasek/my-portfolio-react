import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#291b24]">
      {/* Container */}
      <div>
        <div>
          <p>Experience</p>
          <p>These are the technologies I've worked with</p>
        </div>

        <div>
          <div>
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
