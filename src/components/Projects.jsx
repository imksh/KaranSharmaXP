import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { TiTabsOutline } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaShareSquare, FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import YTHome from "./YTHome";
import YTProject from "./YTProject";
import useGlobalStore from "../store/useGlobalStore";
import { motion } from "motion/react";

const Projects = () => {
  const {
    apps,
    setShowProjects,
    setAlert,
    setName,
    setLink,
    setImage,
    handleRecent,
    handleClose,
    screenWidth,
    screenHeight,
    setIsFull,
  } = useGlobalStore();

  const [z, setZ] = useState(0);
  const [full, setFull] = useState(false);
  const [top, setTop] = useState("15");
  const [left, setLeft] = useState("18");
  const [active, setActive] = useState("all");
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const parentRef = useRef(null);
  const [screen, setScreen] = useState("");
  const windowsWidth = window.innerWidth;
  const [size, setSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.clientWidth);
    }
    console.log(divRef.current.clientWidth);

    if (parentRef.current) {
      setHeight(parentRef.current.clientHeight);
    }
  }, [full]);
  useEffect(() => {
    const temp = apps.find((i) => i.name === "My Projects");
    setZ(temp?.index || 0);
  }, [apps]);

  const capitial = (item) => {
    const arr = item.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  };

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
        x: full ? 0 : 200,
        y: full ? 0 : undefined,
      }}
      dragConstraints={
        !full
          ? {
              left: -100,
              top: 0,
              right: screenWidth - size.x * 1.2,
              bottom: screenHeight -500,
            }
          : {}
      }
      ref={divRef1}
      className={`absolute ${
        full
          ? "top-0 left-0 w-full h-full"
          : "w-full h-[95dvh]  top-0 left-0 lg:top-[8%] lg:left-[10%] lg:w-[60%] lg:h-[80vh]"
      }  min-w-[60%] rounded  flex flex-col overflow-hidden`}
      style={
        full
          ? { backgroundColor: "#ebe9d6", zIndex: 100 }
          : { backgroundColor: "#ebe9d6", zIndex: z }
      }
      onClick={(e) => {
        e.stopPropagation();
        handleRecent("My Projects", "/images/explorer.png", setShowProjects);
      }}
    >
      <div
        className="bg-blue-600 flex justify-between p-2 items-center text-white"
        ref={divRef}
      >
        <div className="flex items-center gap-2">
          <img src={`/images/explorer.png`} alt="" className="w-6" />
          <p className="text-[14px] font-bold">My Projects</p>
        </div>
        <div className="flex gap-1">
          <button
            className=" hover:bg-green-600 p-1 border border-white rounded text-white cursor-pointer"
            onClick={() => {
              setShowProjects(false);
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
              setShowProjects(false);
              handleClose("My Projects");
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
          <img src="/images/xp.png" alt="" className="w-7 p-1" />
        </div>
      </div>

      <div className=" py-2 flex items-center min-h-14 gap-2">
        <div className="flex items-center gap-1 border-r border-gray-300">
          <button
            className="flex gap-1 items-center px-2 text-[12px] cursor-pointer"
            onClick={() => setScreen("")}
          >
            <IoArrowBackCircle
              className={`${
                screen === ""
                  ? "text-gray-400"
                  : "text-green-500 hover:text-green-700"
              }  `}
              size={32}
            />{" "}
            Back
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
            <img src={`/images/explorer.png`} alt="" className="w-4" />
            My Projects
          </div>
          <div className="bg-gray-500 py-1 flex items-end ">
            <RiArrowDropDownLine className="w-5 text-white h-full" />
          </div>
        </div>
        <p className="text-gray-400 text-[14px] font-bold mx-4">Go</p>
      </div>

      <div
        className="bg-black w-full h-full text-white relative  hide-scrollbar"
        ref={parentRef}
      >
        <div className=" flex h-[70px] items-center  justify-between px-2 lg:p-3 border-b border-b-gray-400 absolute top-0 left-0 w-full header">
          <div className="overflow-hidden flex items-center gap-2 ">
            <img
              src="/images/yt1.png"
              alt=""
              className="w-16 h-8 lg:w-20 lg:h-10 object-cover rounded-2xl lg:rounded-[20px] "
            />
            <h2 className="lg:text-2xl font-bold">My Projects</h2>
          </div>
          <div
            className={`hidden lg:flex items-center absolute left-[50%] -translate-x-[50%] ${
              width > 1000 ? "lg:w-[25%]" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search"
              className={`border border-gray-400 rounded-l-2xl py-2 px-3 ${
                width > 1000 ? "w-full" : ""
              }`}
            />
            <div className="bg-gray-400  p-3 rounded-r-2xl">
              <FaSearch size={18} />
            </div>
          </div>

          <div className="flex gap-3 text-3xl">
            <button
              className="flex gap-1.5 cursor-pointer items-center"
              onClick={() => {
                setLink("https://www.instagram.com/imksh.3/");
                setName("LinkedIn");
                setImage("/images/instaglinkedinram.png");
                setAlert(true);
              }}
            >
              <FaLinkedin
                className={`${windowsWidth < 400 ? "text-2xl" : ""}`}
              />
            </button>
            <button
              className="flex gap-1.5 cursor-pointer items-center"
              onClick={() => {
                setLink("https://www.instagram.com/imksh.3/");
                setName("LinkedIn");
                setImage("/images/instaglinkedinram.png");
                setAlert(true);
              }}
            >
              <FaGithub className={`${windowsWidth < 400 ? "text-2xl" : ""}`} />
            </button>
            <button
              className="flex gap-1.5 cursor-pointer items-center"
              onClick={() => {
                setLink("https://www.instagram.com/imksh.3/");
                setName("LinkedIn");
                setImage("/images/instagram.png");
                setAlert(true);
              }}
            >
              <FaInstagramSquare
                className={`${windowsWidth < 400 ? "text-2xl" : ""}`}
              />
            </button>
          </div>
        </div>
        <div className="pt-[70px] flex h-full ">
          <div
            className={`w-[35%] lg:w-[20%] max-w-[200px] ${
              screen !== "" && windowsWidth < 400 ? "hidden" : "flex"
            } flex-1 flex-col pr-2 lg:pr-4 border-r border-gray-600 gap-2 py-2`}
          >
            <div className="flex w-full gap-2 ">
              <div
                className={`w-[5px] h-full ${
                  active === "all" ? "bg-red-500" : ""
                }`}
              ></div>
              <button
                className={`flex items-center gap-3 flex-1 px-4 py-1 rounded-lg cursor-pointer ${
                  active === "all" ? "bg-neutral-700/50" : ""
                }`}
                onClick={() => {
                  setActive("all");
                }}
              >
                <IoHomeOutline size={22} />
                All
              </button>
            </div>
            <div className="flex w-full gap-2 ">
              <div
                className={`w-[5px] h-full ${
                  active === "image" ? "bg-red-500" : ""
                }`}
              ></div>
              <button
                className={`flex items-center gap-3 flex-1 px-4 py-1 rounded-lg cursor-pointer ${
                  active === "image" ? "transparent-gray" : ""
                }`}
                onClick={() => {
                  setActive("image");
                }}
              >
                <FaRegImage size={22} />
                Image
              </button>
            </div>
            <div className="flex w-full gap-2 ">
              <div
                className={`w-[5px] h-full ${
                  active === "web" ? "bg-red-500" : ""
                }`}
              ></div>
              <button
                className={`flex items-center gap-3 flex-1 px-4 py-1 rounded-lg cursor-pointer ${
                  active === "web" ? "transparent-gray" : ""
                }`}
                onClick={() => {
                  setActive("web");
                }}
              >
                <TbWorld size={22} />
                Web
              </button>
            </div>
            <div className="flex w-full gap-2 ">
              <div
                className={`w-[5px] h-full ${
                  active === "video" ? "bg-red-500" : ""
                }`}
              ></div>
              <button
                className={`flex items-center gap-3 flex-1 px-4 py-1 rounded-lg cursor-pointer ${
                  active === "video" ? "transparent-gray" : ""
                }`}
                onClick={() => {
                  setActive("video");
                }}
              >
                <IoVideocamOutline size={22} />
                Video
              </button>
            </div>
            <div className="flex w-full gap-2 ">
              <div
                className={`w-[5px] h-full ${
                  active === "mobile" ? "bg-red-500" : ""
                }`}
              ></div>
              <button
                className={`flex items-center gap-3 flex-1 px-4 py-1 rounded-lg cursor-pointer ${
                  active === "mobile" ? "transparent-gray" : ""
                }`}
                onClick={() => {
                  setActive("mobile");
                }}
              >
                <FaMobileAlt size={22} />
                Mobile
              </button>
            </div>
          </div>
          {screen === "" ? (
            <YTHome width={width} setScreen={setScreen} />
          ) : (
            <YTProject width={width} screen={screen} setScreen={setScreen} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
