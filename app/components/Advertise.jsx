"use client";

import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

const adList = [
  {
    metric: "Shops",
    value: "3",
  },
  {
    postfix: "~",
    metric: "customers",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Since",
    value: "2018",
  },
];

export default function AdvertiseSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-primary-300 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {adList.map((advertise, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:mx-0 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {advertise.prefix}
                {advertise.value}
                {/* <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(advertise.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                /> */}
                {advertise.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{advertise.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
