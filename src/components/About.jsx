import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { TiTabsOutline } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaShareSquare, FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgChevronDoubleUp } from "react-icons/cg";
import { SiSpring } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import useGlobalStore from "../store/useGlobalStore";
import { motion } from "motion/react";

const About = () => {
  const {
    apps,
    setShowAbout,
    setAlert,
    setName,
    setLink,
    setImage,
    handleRecent,
    handleClose,
    screenHeight,
    screenWidth,
    setIsFull,
  } = useGlobalStore();
  const [z, setZ] = useState(0);
  const [full, setFull] = useState(false);
  const [top, setTop] = useState("10");
  const [left, setLeft] = useState("10");
  const [social, setSocial] = useState(true);
  const [skills, setSkills] = useState(true);
  const [software, setSoftware] = useState(true);
  const [size, setSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const temp = apps.find((i) => i.name === "About Me");
    setZ(temp?.index || 0);
  }, [apps]);

  const divRef = useRef(null);

  useEffect(() => {
    setSize({
      x: divRef?.current?.offsetWidth || 0,
      y: divRef?.current?.offsetHeight || 0,
    });
  });

  return (
    <motion.div
      drag={!full}
      dragConstraints={{
        left: -100,
        top: 0,
        right: screenWidth - size.x * 1.2,
        bottom: screenHeight -500,
      }}
      animate={{
        x: full ? 0 : undefined,
        y: full ? 0 : undefined,
      }}
      ref={divRef}
      className={`absolute ${
        full
          ? "top-0 left-0 w-full h-full"
          : "w-full h-[95dvh]  top-0 left-0 lg:top-[2%] lg:left-[10%]  lg:w-[60%] lg:h-[80vh]"
      } border border-blue-600  rounded overflow-hidden flex flex-col`}
      style={
        full
          ? { backgroundColor: "#ebe9d6", zIndex: 100 }
          : { backgroundColor: "#ebe9d6", zIndex: z }
      }
      onClick={(e) => {
        e.stopPropagation();
        handleRecent("About Me", "/images/aboutme.png", setShowAbout);
      }}
    >
      <div className="bg-blue-600 flex justify-between p-2 items-center text-white">
        <div className="flex items-center gap-2">
          <img src={`/images/aboutme.png`} alt="" className="w-6" />
          <p className="text-[14px] font-bold">About Me</p>
        </div>
        <div className="flex gap-1">
          <button
            className=" hover:bg-green-600 p-1 border border-white rounded text-white cursor-pointer"
            onClick={() => {
              setShowAbout(false);
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
              setShowAbout(false);
              handleClose("About Me");
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
            <img src={`/images/aboutme.png`} alt="" className="w-4" />
            About Me
          </div>
          <div className="bg-gray-500 py-1 flex items-end ">
            <RiArrowDropDownLine className="w-5 text-white h-full" />
          </div>
        </div>

        <p className="text-gray-400 text-[14px] font-bold mx-4">Go</p>
      </div>
      <div className="flex h-full overflow-auto text-white ">
        <div className="w-[40%] lg:w-[25%] h-full border-r border-gray-400 flex flex-col items-center blue-gradient-down py-4  gap-4 overflow-auto hide-scrollbar">
          <div className="w-[90%] lg:w-[80%] ">
            <button
              className="font-bold blue-gradient w-full text-left px-2 py-1 text-[12px] rounded-t flex justify-between items-center cursor-pointer"
              onClick={() => setSocial(!social)}
            >
              Social Links
              <CgChevronDoubleUp size={16} />
            </button>
            {social && (
              <div className="font-bold text-black w-full text-left p-2 text-[10px] rounded-b border-white gap-2 flex flex-col bg-blue-200">
                <button
                  className="flex gap-1.5 cursor-pointer items-center"
                  onClick={() => {
                    setLink("https://www.instagram.com/imksh.3/");
                    setName("Instagram");
                    setImage("/images/instagram.png");
                    setAlert(true);
                  }}
                >
                  <img
                    src="/images/instagram.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  Instagram
                </button>
                <button
                  className="flex gap-1.5 cursor-pointer items-center"
                  onClick={() => {
                    setLink("https://github.com/imksh");
                    setName("GitHub");
                    setImage("/images/github.png");
                    setAlert(true);
                  }}
                >
                  <img
                    src="/images/github.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  GitHub
                </button>
                <button
                  className="flex gap-1.5 cursor-pointer items-center"
                  onClick={() => {
                    setLink("https://www.linkedin.com/in/imksh3/");
                    setName("LinkedIn");
                    setImage("/images/linkedin.png");
                    setAlert(true);
                  }}
                >
                  <img
                    src="/images/linkedin.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  LinkedIn
                </button>
              </div>
            )}
          </div>

          <div className="w-[90%] lg:w-[80%] ">
            <button
              className="font-bold blue-gradient w-full text-left px-2 py-1 text-[12px] rounded-t flex justify-between items-center cursor-pointer"
              onClick={() => setSkills(!skills)}
            >
              Skills
              <CgChevronDoubleUp size={16} />
            </button>
            {skills && (
              <div className="font-bold text-black w-full text-left p-2 text-[10px] rounded-b border-white gap-2 flex flex-col bg-blue-200">
                <button className="flex gap-1.5">
                  <img
                    src="/images/java.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  Java
                </button>
                <button className="flex gap-1.5">
                  <img
                    src="/images/js.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  JavaScript
                </button>
                <button className="flex gap-1.5">
                  <img
                    src="/images/react1.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  React
                </button>
                <button className="flex gap-1.5">
                  <img
                    src="/images/react.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  React Native
                </button>
                <button className="flex gap-1.5 items-center">
                  <img
                    src="/images/db.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  DataBase
                </button>
                <button className="flex gap-1.5 items-center">
                  <img
                    src="/images/html.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  HTML
                </button>
                <button className="flex gap-1.5 items-center">
                  <img
                    src="/images/css.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded "
                  />
                  CSS
                </button>
                <button className="flex gap-1.5 items-center">
                  <img
                    src="/images/node.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  Node js
                </button>
                <button className="flex gap-1.5 items-center">
                  <SiSpring className="text-green-700 text-[14px]" />
                  Spring Boot
                </button>
              </div>
            )}
          </div>

          <div className="w-[90%] lg:w-[80%] ">
            <button
              className="font-bold blue-gradient w-full text-left px-2 py-1 text-[12px] rounded-t flex justify-between items-center cursor-pointer"
              onClick={() => setSoftware(!software)}
            >
              Software
              <CgChevronDoubleUp size={16} />
            </button>
            {software && (
              <div className="font-bold text-black w-full text-left p-2 text-[10px] rounded-b border-white gap-2 flex flex-col bg-blue-200">
                <button className="flex gap-1.5 items-center">
                  <VscVscode className="text-blue-700 text-[14px]" />
                  VS Code
                </button>
                <button className="flex gap-1.5 items-center">
                  <SiIntellijidea className="text-[14px]" />
                  Intellij Idea
                </button>
                <button className="flex gap-1.5">
                  <img
                    src="/images/github.png"
                    alt=""
                    className="w-4 h-4 object-cover rounded"
                  />
                  GitHub
                </button>
                <button className="flex gap-1.5 items-center">
                  <SiPostman className="text-orange-400 text-[14px]" />
                  Postman
                </button>
                <button className="flex gap-1.5 items-center">
                  <IoLogoFigma className="text-red-500 text-[14px]" />
                  Figma
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-[60%] lg:w-[75%] min-full blue-gradient2 flex flex-col py-4 lg:p-4 overflow-auto hide-scrollbar">
          <h2 className="font-extrabold text-3xl mx-auto lg:mx-0">About Me</h2>
          <div className="m-4 flex flex-col lg:flex-row  gap-8 lg:max-w-[700px]">
            <div>
              <img
                src="/images/karan.jpg"
                alt=""
                className="max-w-[200px] rounded-2xl w-[150px] lg:w-[10vw]"
              />
            </div>
            <div className="flex flex-col  gap-2">
              <p>
                I’m an engineering student with a strong focus on building
                practical, real-world software. I enjoy turning ideas into
                working products—whether it’s a frontend interface, a backend
                system, or a complete project that solves an actual problem. I
                learn fast, experiment a lot, and prefer building things that
                people can use rather than just theory.
              </p>
              <p>
                Most of my work revolves around JavaScript, React, Node.js, and
                Python. I’ve worked on everything from interactive UI components
                to small games, automation tools, and ML-based projects. I like
                writing clean, efficient code and understanding why something
                works instead of blindly copying patterns. Debugging,
                optimizing, and simplifying logic is something I enjoy.
              </p>
              <p>
                Outside of projects, I’m constantly exploring new tech,
                improving existing code, and building small experiments to
                sharpen my skills. I’m driven by curiosity and the desire to
                keep improving with every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
