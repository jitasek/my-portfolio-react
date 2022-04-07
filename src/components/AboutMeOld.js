import dancingHouse from "../images/dancingHouse.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-wrap md items-center h-screen">
      <div className="bg-white w-full md:w-1/2 h-screen">
        <div className="mx-32">
          {/* heading */}
          <h1 className="text-6xl font-bold mt-16">&lt;Hey there!&gt;</h1>

          {/* subheading */}
          <div
            style={{ fontFamily: "Fira Mono" }}
            className="flex mt-16 font-light text-gray-500"
          >
            <div className="pr-4">
              <span className="uppercase">Who</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">
                Web Dev
              </p>
            </div>
            <div className="pr-4">
              <span className="uppercase">What</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">
                Full-Stack
              </p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Why</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">
                Passion
              </p>
            </div>
          </div>

          {/* short bio */}
          <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
            <p>
              I am Jitka and I love to improve people's lives through
              technology. I am a fan of a seamless user experience.{" "}
            </p>
            <br></br>
            <p>
              On my professional journey, I've looked into it from multiple
              perspectives: starting with web audits, web analytics, through UX
              (re)design, web content creation, e2e management of digital
              projects, creating my own product in an agile way.{" "}
            </p>
            <br></br>
            <p>
              It was an enjoyable and inspiring journey which took me to my
              desired destination - web development. I am actively building new
              skills and knowledge every day and I am loving it. Feel free to
              check some of my starting{" "}
              <Link className="text-blue-500 text-[#0096a9]" to="/portfolio">
                projects
              </Link>
              .
            </p>
          </div>

          <button className="uppercase mt-5 text-sm font-semibold hover:underline">
            <Link className="text-blue-500 text-[#0096a9] " to="/portfolio">
              check my projects
            </Link>
          </button>
        </div>
      </div>
      <div className="bg-red-600 w-full md:w-1/2 h-screen">
        <img
          src={dancingHouse}
          className="h-screen w-full"
          alt="Dancing House in Prague by Zsombor Buttyán on Unsplash"
        />
      </div>
    </div>
  );
}

export default AboutMe;