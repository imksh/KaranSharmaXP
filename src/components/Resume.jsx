import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { TiTabsOutline } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaShareSquare, FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import useGlobalStore from "../store/useGlobalStore";
import { motion } from "motion/react";

const Resume = () => {
  const {
    apps,
    setShowResume,
    handleRecent,
    handleClose,
    screenWidth,
    screenHeight,
    setIsFull,
  } = useGlobalStore();
  const [z, setZ] = useState(0);
  const [full, setFull] = useState(false);
  const [top, setTop] = useState("20");
  const [left, setLeft] = useState("30");
  const [zoom, setZoom] = useState(false);
  const [size, setSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const temp = apps.find((i) => i.name === "My Resume");
    setZ(temp?.index || 0);
  }, [apps]);
  const divRef1 = useRef(null);
  useEffect(() => {
    setSize({
      x: divRef1?.current?.offsetWidth || 0,
      y: divRef1?.current?.offsetHeight || 0,
    });
  });
  return (
    <motion.div
      drag={!full}
      animate={{
        x: full ? 0 : 300,
        y: full ? 0 : 50,
      }}
      dragConstraints={{
        left: -100,
        top: 0,
        right: screenWidth - size.x * 1.2,
        bottom: screenHeight - size.y,
      }}
      ref={divRef1}
      className={`absolute ${
        full
          ? "top-0 left-0 w-full h-full"
          : "w-full h-[95dvh]  top-0 left-0 lg:top-[8%] lg:left-[10%] lg:w-[40%] lg:h-[80vh]"
      }  min-w-[60%] rounded overflow-hidden flex flex-col`}
      style={
        full
          ? { backgroundColor: "#ebe9d6", zIndex: 500 }
          : { backgroundColor: "#ebe9d6", zIndex: z }
      }
      onClick={(e) => {
        e.stopPropagation();
        handleRecent("My Resume", "/images/pdf.png", setShowResume);
      }}
    >
      <div className="bg-blue-600 flex justify-between p-2 items-center text-white">
        <div className="flex items-center gap-2">
          <img src={`/images/pdf.png`} alt="" className="w-6" />
          <p className="text-[14px] font-bold">My Resume</p>
        </div>
        <div className="flex gap-1">
          <button
            className=" hover:bg-green-600 p-1 border border-white rounded text-white cursor-pointer"
            onClick={() => {
              setShowResume(false);
              setIsFull(false);
            }}
          >
            <LuMinus />
          </button>
          <button
            className=" hover:bg-green-600 p-1 border border-white rounded text-white cursor-pointer"
            onClick={() => {
              setIsFull(!full);
              setFull(!full);
            }}
          >
            <TiTabsOutline />
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 p-1 border border-white rounded text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowResume(false);
              handleClose("My Resume");
            }}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300  ">
        <div className="flex items-center ">
          <button className="text-[12px] font-bold w-16 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">
            File
          </button>
          <button className="text-[12px] font-bold w-16 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">
            View
          </button>
          <button className="text-[12px] text-gray-500 w-16 py-1 ">Help</button>
        </div>
        <div className="px-5 bg-white h-full">
          <img src="/images/xp.png" alt="" className="w-6 p-1" />
        </div>
      </div>

      <div className=" py-2 flex items-center min-h-14 gap-2">
        <div className="flex items-center gap-1 border-r border-gray-300">
          <button className="flex gap-1 items-center px-2 text-[12px] cursor-pointer">
            <IoArrowBackCircle className="text-gray-400" size={32} /> Back
          </button>
          <button className="flex gap-1 items-center px-2 text-[12px] cursor-pointer">
            <IoArrowForwardCircleSharp className="text-gray-400" size={32} />{" "}
            Forward
          </button>
        </div>
        {/* <div className="flex min-w-[220px] justify-between">
          <button className="flex gap-1 items-center pr-2 text-[12px] cursor-pointer hover:border-2 hover:border-gray-500 rounded">
            <img src="/images/explorer.png" alt="" className="w-8" />
            My Projects
          </button>
          <button className="flex gap-1 items-center p-1 text-[12px] cursor-pointer hover:border-2 hover:border-gray-500 rounded ">
            <img src="/images/pdf.png" alt="" className="w-6" />
            My Resume
          </button>
        </div> */}
      </div>

      <div className="flex items-center py-2 border border-gray-300">
        <p className="text-gray-500 px-2">Address</p>
        <div className="flex flex-1 justify-between bg-white items-center rounded overflow-hidden">
          <div className="flex gap-2 items-center text-[12px] pl-2">
            <img src={`/images/pdf.png`} alt="" className="w-4" />
            My Resume
          </div>
          <div className="bg-gray-500 py-1 flex items-end ">
            <RiArrowDropDownLine className="w-5 text-white h-full" />
          </div>
        </div>

        <p className="text-gray-400 text-[14px] font-bold mx-4">Go</p>
      </div>
      <div className="w-full h-full  flex-1  overflow-auto bg-gray-600 mx-auto hide-scrollbar">
        <img
          src="/images/resume.png"
          alt=""
          className={`h-full max-w-[80%] hide-scrollbar  mx-auto ${
            zoom
              ? `scale-125 lg:scale-200  cursor-zoom-out ${
                  full ? "mt-16 lg:mt-72" : "mt-16 lg:mt-52"
                }`
              : "cursor-zoom-in"
          }`}
          onClick={() => setZoom(!zoom)}
        />
      </div>
    </motion.div>
  );
};

export default Resume;
