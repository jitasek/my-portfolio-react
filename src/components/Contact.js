function Contact() {
  return (
    <div className="container flex-items-center">
      <form className=" w-1/3 space-y-4 text-gray-700">
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block mb-1" for="formGridCode_card">
              Name
            </label>
            <input
              className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text"
              id="formGridCode_card"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block mb-1" for="formGridCode_card">
              Email
            </label>
            <input
              className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text"
              id="formGridCode_card"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block mb-1" for="formGridCode_card">
              Message
            </label>
            <textarea class="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>

            {/* <input

            // className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            // type="text"
            // id="formGridCode_card"
            /> */}
          </div>
        </div>

        <button class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
