// Portfolio component - will be displayed when the Portfolio tab in main nav is clicked
// import Card from "./Card";
import planet from "../images/planet.gif";
import planner from "../images/planner-mockup.png";
import weather from "../images/weather-dash.png";
import pack from "../images/POT-login.png";
import tech from "../images/tech-blog-dashboard.png";
import note from "../images/note-taker-dashboard.png";
//import cardImage from "../images/cardimage.jpg";

function Portfolio() {
  return (
    <div>
      <div className="flex place-content-evenly space-x-4 m-8">
        <div>
          <a
            href="/"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={planet}
              alt="planet earth animation"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Carbon Down Website
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Check and offset your carbon footprint
              </p>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://github.com/jitasek/carbon-down"
                >
                  Repository link
                </a>
              </button>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://jitasek.github.io/carbon-down/"
                >
                  Deployed app link
                </a>
              </button>
            </div>
          </a>
        </div>
        <div>
          <a
            href="/"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={planner}
              alt="day planner dashboard"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Day Planner
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Simple calendar application
              </p>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://github.com/jitasek/day-planner"
                >
                  Repository link
                </a>
              </button>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://jitasek.github.io/day-planner/"
                >
                  Deployed app link
                </a>
              </button>
            </div>
          </a>
        </div>
        <div>
          <a
            href="/"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={weather}
              alt="weather dashboard page"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Weather Dashboard
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                5-day weather outlook for cities
              </p>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://github.com/jitasek/weather-dashboard-app"
                >
                  Repository link
                </a>
              </button>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://jitasek.github.io/weather-dashboard-app/"
                >
                  Deployed app link
                </a>
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="flex place-content-evenly space-x-4 m-8">
        <div>
          <a
            href="/"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={pack}
              alt="pack on track homepage"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pack On Track Website
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Keep track of your active online orders
              </p>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://github.com/JenBerlin/Pack-On-Track/tree/dev"
                >
                  Repository link
                </a>
              </button>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://intense-lowlands-65258.herokuapp.com/"
                >
                  Deployed app link
                </a>
              </button>
            </div>
          </a>
        </div>
        <div>
          <a
            href="/"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={tech}
              alt="tech blog dashboard"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tech Blog
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                CMS-style blog site for developers
              </p>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://github.com/jitasek/tech-blog"
                >
                  Repository link
                </a>
              </button>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://aqueous-tundra-23493.herokuapp.com/"
                >
                  Deployed app link
                </a>
              </button>
            </div>
          </a>
        </div>
        <div>
          <a
            href="/"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={note}
              alt="note taker app"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Project 3
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Write and save your notes
              </p>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://github.com/jitasek/note-taker"
                >
                  Repository link
                </a>
              </button>
              <button className="uppercase mt-5 text-sm font-semibold hover:underline">
                <a
                  className="text-blue-500 text-[#0096a9] "
                  href="https://jitkas-note-taker.herokuapp.com/"
                >
                  Deployed app link
                </a>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>

    // // <div>
    // {
    //   /* <div className="flex space-x-4 m-8">
    //     <Card projectName="Project 1" desc="Project 1 description goes here." />
    //     <Card projectName="Project 2" desc="Project 2 description goes here." />
    //     <Card projectName="Project 3" desc="Project 3 description goes here." />
    //   </div>
    //   <div className="flex space-x-4 m-8">
    //     <Card projectName="Project 1" desc="Project 1 description goes here." />
    //     <Card projectName="Project 2" desc="Project 2 description goes here." />
    //     <Card projectName="Project 3" desc="Project 3 description goes here." />
    //   </div> */
    // }
    // // </div>
  );
}

export default Portfolio;
