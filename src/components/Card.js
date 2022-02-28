// Card component = subcomponent of the Portfolio component

function Card({ projectName, desc, hrefWeb, hrefGit, cardImage, imgAlt }) {
  return (
    <div className="container m-auto">
      <a
        href={hrefWeb}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div>
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cardImage}
            alt={imgAlt}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <a href={hrefWeb} target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {projectName}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {desc}
            </p>
            <button className="uppercase mt-5 text-sm font-semibold hover:underline">
              <a href={hrefWeb} className="text-blue-500 text-[#0096a9] ">
                Deployed app link
              </a>
            </button>
            <button className="uppercase mt-5 text-sm font-semibold hover:underline">
              <a href={hrefGit} className="text-blue-500 text-[#0096a9] ">
                Repository link
              </a>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
