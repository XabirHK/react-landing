import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function TopPannel() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-gray-700">
                Some nice text
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Some text will be here{" "}
                <a
                    href="https://tailwindcss.com/?ref=creativetim"
                    className="text-gray-700"
                    target="_blank"
                >
                    NischchintoPur
                </a>
                . Some more nice text
                </p>
                <div className="mt-12">
                {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                    Get started
                </a>
                <a
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    target="_blank"
                >
                    Github Star
                </a> */}
                </div>
            </div>
            </div>
        </div>

        <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
            src={require("assets/img/pattern_react.png")}
            alt="..."
        />
    </section>
    
  );
}