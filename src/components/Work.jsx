import React from "react";
import Card from "./Card";
import POTImg from "../assets/POT-login.png";
import WeatherImg from "../assets/weather-dash.png";
import PlanetImg from "../assets/planet.gif";
import PlannerImg from "../assets/planner-mockup.png";
import TechBlogImg from "../assets/tech-blog-dashboard.png";
//import NoteTakerImg from "../assets/note-taker-dashboard.png";
import WithUImg from "../assets/withu.png";

const cardProps = [
  {
    hrefWeb: "https://intense-lowlands-65258.herokuapp.com/",
    hrefGit: "https://github.com/JenBerlin/Pack-On-Track/tree/dev",
    cardImg: POTImg,
    imgAlt: "pack on track homepage",
    projectType: "Bootstrap CSS, JS, Express.js, Sequelize, MySQL",
  },
  {
    hrefWeb: "https://jitasek.github.io/weather-dashboard-app/",
    hrefGit: "https://github.com/jitasek/weather-dashboard-app",
    cardImg: WeatherImg,
    imgAlt: "weather dashboard page",
    projectType: "Bootstrap CSS, jQuery, JS, Server-Side API",
  },
  {
    hrefWeb: "https://jitasek.github.io/day-planner/",
    hrefGit: "https://github.com/jitasek/day-planner",
    cardImg: PlannerImg,
    imgAlt: "day planner dashboard",
    projectType: "JS, Moment.js, jQuery, local storage",
  },
  {
    hrefWeb: "https://jitasek.github.io/carbon-down/",
    hrefGit: "https://github.com/jitasek/carbon-down",
    cardImg: PlanetImg,
    imgAlt: "planet earth animation",
    projectType: "Bulma CSS, JS, jQuery, local storage ",
  },
  {
    hrefWeb: "https://aqueous-tundra-23493.herokuapp.com/",
    hrefGit: "https://github.com/jitasek/tech-blog",
    cardImg: TechBlogImg,
    imgAlt: "tech blog dashboard",
    projectType:
      "Express.js API, sessions, handlebars, mySQL, Sequelize, bcrypt",
  },
  //   {
  //     hrefWeb: "https://jitkas-note-taker.herokuapp.com/",
  //     hrefGit: "https://github.com/jitasek/note-taker",
  //     cardImg: NoteTakerImg,
  //     imgAlt: "note taker app",
  //     projectType: "Express.js, npm, fs, uuid, API",
  //   },
  {
    hrefWeb: "https://mysterious-springs-56819.herokuapp.com/",
    hrefGit: "https://github.com/Amir-Fard2025/WithU",
    cardImg: WithUImg,
    imgAlt: "with u app homepage",
    projectType:
      "Material UI, React, JS, Node.js, Express.js, GraphQL, MongoDB, Mongoose",
  },
];

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#291b24]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fece6c]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for all my projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* 6 card containers - grid items */}
          {cardProps.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

// container class on line 18 --> so I can define my own width
// mystyle-div = my own styling I define in index.css
// because there's already the style={...} on line 19, I had to add "!important" to my hover class in index.css so that React does not ignore it
