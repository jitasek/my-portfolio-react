import React, { useState } from "react";
import EmailValidator from "email-validator";
//import { useForm, Controller } from "react-hook-form";

function Contact() {
  let [info, setInfo] = useState("");
  const validateEmail = (e) => {
    console.log("Current email is: ", e.target.value);
    const emailValidator = EmailValidator.validate(e.target.value);
    if (emailValidator === true) {
      console.log("Email is valid.");
      setInfo("");
    } else {
      setInfo("Email not valid. Please enter a valid email.");
      console.log("Info: ", info);
    }
  };
  const clearField = () => {
    setInfo("");
  };

  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="container flex-items-center">
              <form className=" w-1/3 space-y-4 text-gray-700">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <label className="block mb-1" htmlFor="formGridCode_card">
                      Name
                    </label>
                    <input
                      className="w-full h-10 px-3 text-base border rounded-lg focus:shadow-outline"
                      type="text"
                      id="formGridCode_card"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full">
                    <label className="block mb-1" htmlFor="formGridCode_card">
                      Email
                    </label>
                    <input
                      className="w-full h-10 px-3 text-base border rounded-lg focus:shadow-outline"
                      type="text"
                      id="formGridCode_card"
                      placeholder="Enter your email"
                      onBlur={validateEmail}
                      onFocus={clearField}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <label className="block mb-1" htmlFor="formGridCode_card">
                      Message
                    </label>
                    <textarea
                      className="w-full h-16 px-3 py-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
                      placeholder="Enter your message here"
                    ></textarea>
                  </div>
                </div>

                <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
