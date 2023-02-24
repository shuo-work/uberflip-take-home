import React from "react";
import Carousel from "../components/Carousel";

export default function Countries(): JSX.Element {
  return (
    <section className="pt-32 pb-40 bg-orange-100 min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h4 className="font-heading text-2xl sm:text-2xl lg:text-2xl mb-7">
            Choose A Country
          </h4>
          <div className="inline-flex p-2 items-center border border-gray-400 rounded-full">
            <button className="inline-flex items-center px-4 sm:px-8 py-2 bg-white rounded-full shadow">
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={17}
                  cy={17}
                  r="15.75"
                  fill="white"
                  stroke="#DDDEE1"
                  strokeWidth="2.5"
                />
                <path
                  d="M22.8897 14.1751L21.825 13.1105C21.7901 13.0755 21.7487 13.0477 21.703 13.0287C21.6574 13.0098 21.6084 13 21.559 13C21.5095 13 21.4605 13.0098 21.4149 13.0287C21.3692 13.0477 21.3278 13.0755 21.2929 13.1105L15.8495 18.8567L12.7294 15.7354C12.6579 15.6639 12.5609 15.6238 12.4598 15.6238C12.3586 15.6238 12.2617 15.6639 12.1901 15.7354L11.1115 16.8148C11.04 16.8863 10.9999 16.9833 10.9999 17.0844C10.9999 17.1855 11.04 17.2825 11.1115 17.354L15.5491 21.8943C15.5901 21.9345 15.6398 21.9645 15.6944 21.9821C15.7491 21.9997 15.807 22.0043 15.8637 21.9956C15.9221 22.0057 15.9821 22.0018 16.0387 21.9842C16.0953 21.9666 16.1469 21.9358 16.1892 21.8943L22.8897 14.7076C22.9603 14.637 23 14.5412 23 14.4413C23 14.3415 22.9603 14.2457 22.8897 14.1751V14.1751Z"
                  fill="#D6D7DA"
                />
                <defs>
                  <rect
                    width={12}
                    height={9}
                    fill="white"
                    transform="translate(11 13)"
                  />
                </defs>
              </svg>
              <span className="ml-3 sm:ml-5 sm:text-lg font-medium">All</span>
            </button>
            <button className="inline-block px-4 sm:px-10 sm:text-lg font-medium text-gray-500 hover:text-gray-600">
              Canada
            </button>
            <button className="inline-block px-4 sm:px-10 sm:text-lg font-medium text-gray-500 hover:text-gray-600">
              France
            </button>
            <button className="inline-block px-4 sm:px-10 sm:text-lg font-medium text-gray-500 hover:text-gray-600">
              Spain
            </button>
            <button className="inline-block px-4 sm:px-10 sm:text-lg font-medium text-gray-500 hover:text-gray-600">
              USA
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
