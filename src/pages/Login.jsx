import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RiLoader2Fill } from "react-icons/ri";
import useGlobalStore from "../store/useGlobalStore";

const Login = () => {
  const loaderRef = useRef(null);
  const audio = new Audio("/sounds/login.mp3");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { vol } = useGlobalStore();

  const handleRestart = () => {
    loaderRef.current.animate(
      [{ transform: "rotate(0deg)" }, { transform: `rotate(360deg)` }],
      {
        duration: 500,
        iterations: Infinity,
        easing: "linear",
      }
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleLogin = () => {
    if (vol) audio.play();
    setTimeout(() => {
      navigate("/home");
      audio.pause();
    }, 2000);

    setTimeout(() => {
      setShow(false);
    }, 2500);
  };

  return (
    <div className="bg-blue-800 min-h-dvh text-white flex justify-center items-center  flex-col relative">
      <div className="w-full my-auto"></div>
      {show ? (
        <div className="bg-blue-400 text-white flex justify-center items-center  relative w-full min-h-[80dvh] flex-col gap-6">
          <RiLoader2Fill className="animate-spin" size={40} />
          <h1 className="text-5xl font-extrabold">Welcome</h1>
        </div>
      ) : (
        <div className="bg-blue-400 text-white flex flex-col lg:flex-row justify-around items-center  relative w-full min-h-[80dvh]">
          <div className="flex pr-10 border-b lg:border-b-0  lg:border-r w-[90%] lg:w-[50%] min-h-[30dvh]  lg:h-[50vh] items-center">
            <div className="flex flex-col mx-auto lg:mx-0  pb-10 lg:pb-0 lg:items-baseline lg:pr-10 lg:w-fit lg:ml-[40%]">
              <img
                src="/images/xp.png"
                alt="Windows xp logo"
                className="w-16 lg:w-24 ml-auto"
              />
              <h1 className="relative">
                <span className="font-bold text-4xl lg:font-extrabold lg:text-5xl">
                  Karan Sharma
                </span>
                <span className="text-red-500 absolute text-2xl -top-1 font-bold">
                  XP
                </span>
              </h1>
              <h1 className="lg:w-full">Sorftware Developer</h1>

              <p className="mt-5 hidden lg:block">
                To begin, click on Karan Sharma to log in
              </p>
            </div>
          </div>

          <div className="w-full h-[30dvh] lg:h-auto lg:w-[50%]">
            <button
              className="lg:ml-[20%] flex mx-auto lg:mx-0 items-center px-4 py-2 rounded gap-5 cursor-pointer hover:bg-blue-600 lg:w-[60%] fade-right"
              onClick={() => {
                setShow(true);
                handleLogin();
              }}
            >
              <img
                src="/images/karan.jpg"
                alt="Karan Sharma"
                className="w-25 border-3 border-white rounded-2xl"
              />
              <div>
                <h2 className="text-2xl font-bold">Karan Sharma</h2>
                <p className="font-bold text-[12px] w-fit">
                  Software Developer
                </p>
              </div>
            </button>
          </div>
        </div>
      )}
      {show ? (
        <div className="w-full min-h-[10vh] items-center justify-between flex px-5 gap-2"></div>
      ) : (
        <div className="w-full min-h-[10vh] items-center justify-between flex px-5 gap-2">
          <button
            div
            className="min-h-full items-center flex px-5 gap-2 cursor-pointer mx-auto lg:mx-0"
            onClick={handleRestart}
          >
            <button className="bg-green-700 w-fit p-1 rounded  ">
              <RiLoader2Fill className="" size={22} ref={loaderRef} />
            </button>
            <p className="text-[14px]">Restart Karan Sharma XP</p>
          </button>

          <div className=" hidden lg:block text-[13px]">
            <p>After you log on, the system's yours to explore.</p>
            <p>Every detail has been designed with a purpose.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
