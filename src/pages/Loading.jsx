import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../store/useGlobalStore";

const Loading = () => {
  const loaderRef = useRef(null);
  const loaderDivRef = useRef(null);
  const navigate = useNavigate();
  const audio = new Audio("/sounds/loading.mp3");
  const { vol } = useGlobalStore();
  useEffect(() => {
    if (vol) audio.play();
  }, []);

  useEffect(() => {
    const width = loaderDivRef.current.getBoundingClientRect().width;
    loaderRef.current.animate(
      [
        { transform: "translateX(-35px)" },
        { transform: `translateX(${width}px)` },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    setTimeout(() => {
      navigate("/login");
    }, 2800);
  }, []);

  return (
    <div className="bg-black min-h-dvh text-white flex justify-center items-center  flex-col relative">
      <div className="flex flex-col w-fit">
        <img
          src="/images/xp.png"
          alt="Windows xp logo"
          className="w-16 lg:w-24 ml-auto"
        />
        <h1 className="relative">
          <span className=" lg:font-extrabold text-4xl lg:text-5xl">Karan Sharma</span>
          <span className="text-red-500 absolute lg:text-2xl -top-1 lg:font-bold">
            XP
          </span>
        </h1>
        <h1 className="w-full">Sorftware Developer</h1>
        <div
          className="border border-white rounded-2xl h-6 w-[60%] mx-auto mt-6 flex px-2 items-center overflow-hidden"
          ref={loaderDivRef}
        >
          <div className="flex gap-0.5" ref={loaderRef}>
            <div className="h-2 w-2 bg-blue-500"></div>
            <div className="h-2 w-2 bg-blue-500"></div>
            <div className="h-2 w-2 bg-blue-500"></div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden px-5 mt-10 text-center">
        <p><span className="text-red-500">XP</span> works best on a laptop or desktop. You’re currently on a phone.</p>
      </div>
    </div>
  );
};

export default Loading;
