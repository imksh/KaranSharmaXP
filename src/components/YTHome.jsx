import React from "react";
import data from "../data/projects.json";

const YTHome = ({ width, setScreen }) => {
  return (
    <div
      className={`grid max-w-[80%] mx-auto p-4 gap-4 overflow-auto pb-52 ${
        width < "1000" ? "grid-cols-2 " : "grid-cols-3 "
      }`}
    >
      {data.map((item) => (
        <button
          className="flex flex-col items-baseline rounded-2xl cursor-pointer p-2 hover:bg-neutral-700/50 text-left"
          onClick={() => {
            setScreen(item.title);
          }}
        >
          <img src={item.img[0]} alt="" className="w-full rounded-2xl" />
          <div className="flex gap-3 items-center pl-1 pt-1 ">
            <img
              src="/images/karan.jpg"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div className=" flex flex-col items-baseline">
              <p className="font-bold mt-1 mb-0.5">{item.title}</p>
              <p className="text-gray-400">
                {/* {item.type.split(",").map((i) => capitial(i.trim()))} */}
                {item.tech}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default YTHome;
