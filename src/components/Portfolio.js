// Portfolio component - will be displayed when the Portfolio tab in main nav is clicked
import Card from "./Card";
import planet from "../images/planet.gif";
import planner from "../images/planner-mockup.png";
import weather from "../images/weather-dash.png";
import pack from "../images/POT-login.png";
import tech from "../images/tech-blog-dashboard.png";
import note from "../images/note-taker-dashboard.png";
//import cardImage from "../images/cardimage.jpg";

const cardProps = [
  {
    projectName: "Carbon Down",
    desc: "Check and offset your carbon footprint",
    hrefWeb: "https://jitasek.github.io/carbon-down/",
    hrefGit: "https://github.com/jitasek/carbon-down",
    cardImage: planet,
    imgAlt: "planet earth animation",
  },
  {
    projectName: "Day Planner",
    desc: "Simple calendar application",
    hrefWeb: "https://jitasek.github.io/day-planner/",
    hrefGit: "https://github.com/jitasek/day-planner",
    cardImage: planner,
    imgAlt: "day planner dashboard",
  },
  {
    projectName: "Weather Dashboard",
    desc: "5-day weather outlook for cities",
    hrefWeb: "https://jitasek.github.io/weather-dashboard-app/",
    hrefGit: "https://github.com/jitasek/weather-dashboard-app",
    cardImage: weather,
    imgAlt: "weather dashboard page",
  },
  {
    projectName: "Pack On Track Website",
    desc: "Keep track of your active online orders",
    hrefWeb: "https://intense-lowlands-65258.herokuapp.com/",
    hrefGit: "https://github.com/JenBerlin/Pack-On-Track/tree/dev",
    cardImage: pack,
    imgAlt: "pack on track homepage",
  },
  {
    projectName: "Tech Blog",
    desc: "CMS-style blog site for developers",
    hrefWeb: "https://aqueous-tundra-23493.herokuapp.com/",
    hrefGit: "https://github.com/jitasek/tech-blog",
    cardImage: tech,
    imgAlt: "tech blog dashboard",
  },
  {
    projectName: "Note Taker",
    desc: "Write and save your notes",
    hrefWeb: "https://jitkas-note-taker.herokuapp.com/",
    hrefGit: "https://github.com/jitasek/note-taker",
    cardImage: note,
    imgAlt: "note taker app",
  },
];

function Portfolio() {
  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto flex my-8 gap-8">
        {cardProps.slice(0, 3).map((card) => (
          <Card {...card} />
        ))}
      </div>
      <div className="container mx-auto flex my-8 gap-8">
        {cardProps.slice(3, 6).map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
}

// function Portfolio() {
//   return (
//     <div>

//
//         <div>
//           <a
//             href="/"
//             className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//           >
//             <img
//               className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
//               src={note}
//               alt="note taker app"
//             />
//             <div className="flex flex-col justify-between p-4 leading-normal">
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 Project 3
//               </h5>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Write and save your notes
//               </p>
//               <button className="uppercase mt-5 text-sm font-semibold hover:underline">
//                 <a
//                   className="text-blue-500 text-[#0096a9] "
//                   href="https://github.com/jitasek/note-taker"
//                 >
//                   Repository link
//                 </a>
//               </button>
//               <button className="uppercase mt-5 text-sm font-semibold hover:underline">
//                 <a
//                   className="text-blue-500 text-[#0096a9] "
//                   href="https://jitkas-note-taker.herokuapp.com/"
//                 >
//                   Deployed app link
//                 </a>
//               </button>
//             </div>
//           </a>
//         </div>
//     </div>

//     // // <div>
//     // {
//     //   /* <div className="flex space-x-4 m-8">
//     //     <Card projectName="Project 1" desc="Project 1 description goes here." />
//     //     <Card projectName="Project 2" desc="Project 2 description goes here." />
//     //     <Card projectName="Project 3" desc="Project 3 description goes here." />
//     //   </div>
//     //   <div className="flex space-x-4 m-8">
//     //     <Card projectName="Project 1" desc="Project 1 description goes here." />
//     //     <Card projectName="Project 2" desc="Project 2 description goes here." />
//     //     <Card projectName="Project 3" desc="Project 3 description goes here." />
//     //   </div> */
//     // }
//     // // </div>
//   );
// }

export default Portfolio;
