const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#291b24] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container div:*/}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#fece6c]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold pb-8">
            <p>Hi I'm Jitka, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a fan of a seamless user experience and love to improve
              people's lives through technology.{" "}
            </p>
            <br />
            <p>
              On my professional journey, I've looked into it from multiple
              perspectives: starting with web audits, web analytics, through UX
              (re)design, web content creation, e2e management of digital
              projects, creating my own product in an agile way.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;