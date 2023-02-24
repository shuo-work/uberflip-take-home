import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="w-full md:w-1/2 p-6">
      <div className="md:max-w-md">
        <h2 className="mb-5 font-heading font-bold text-primary text-4xl sm:text-5xl">
          Register
        </h2>
        <div className="flex flex-wrap -m-2 mb-2">
          <div className="w-full p-2">
            <p className="mb-2.5 font-medium text-base text-gray-600">
              Email address
            </p>
            <div className="p-px bg-gradient-cyan rounded-lg">
              <input
                className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline focus:ring-4 focus:ring-indigo-500 rounded-lg"
                type="text"
                placeholder="i.e. john@example.com"
                name="email"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <p className="mb-2.5 font-medium text-base text-gray-600">
              First Name
            </p>
            <div className="p-px bg-gradient-cyan rounded-lg">
              <input
                className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline focus:ring-4 focus:ring-indigo-500 rounded-lg"
                type="text"
                placeholder="i.e. John"
                name="firstName"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <p className="mb-2.5 font-medium text-base text-gray-600">
              Last Name
            </p>
            <div className="p-px bg-gradient-cyan rounded-lg">
              <input
                className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline focus:ring-4 focus:ring-indigo-500 rounded-lg"
                type="text"
                placeholder="i.e. Doe"
                name="lastName"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <p className="mb-2.5 font-medium text-base text-gray-600">
              Password
            </p>
            <div className="p-px bg-gradient-cyan rounded-lg">
              <input
                className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline focus:ring-4 focus:ring-indigo-500 rounded-lg"
                type="text"
                placeholder="********"
                name="password"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <p className="mb-2.5 font-medium text-base text-gray-600">
              Confirm Password
            </p>
            <div className="p-px bg-gradient-cyan rounded-lg">
              <input
                className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-white outline focus:ring-4 focus:ring-indigo-500 rounded-lg"
                type="text"
                placeholder="********"
                name="confirm_password"
              />
            </div>
          </div>
        </div>

        <div className="group relative md:max-w-max mb-4">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
          <button className="p-1 w-full font-heading font-semibold text-xs text-white  bg-black uppercase tracking-px overflow-hidden rounded-full mt-2">
            <div className="relative py-5 px-14 bg-gradient-blue overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-700 transition ease-in-out duration-500" />
              <p className="relative z-10 group-hover:text-gray-100">Login</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
