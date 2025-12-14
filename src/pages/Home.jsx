import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Start from "../components/Start";
import Alert from "../components/Alert";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Warning from "../components/Warning";
import useGlobalStore from "../store/useGlobalStore";
import { toast } from "react-hot-toast";

const Home = () => {
  const {
    showStart,
    showAbout,
    showProjects,
    showResume,
    alert,
    warning,
    setShowStart,
    setShowAbout,
    setShowProjects,
    setShowResume,
    setAlert,
    setWarning,
    setWarningName,
    setWarningMsg,
    handleRecent,
    vol,
  } = useGlobalStore();

  const audio = new Audio("/sounds/boot.mp3");
  const width = window.innerWidth;
  useEffect(() => {
    if (vol) audio.play();
  }, []);

  return (
    <div
      className={`min-h-dvh ${
        width < 400 ? "wallpaper-small" : "wallpaper"
      }  relative pb-10 overflow-hidden `}
      onClick={() => {
        setShowStart(false);
        setAlert(false);
      }}
    >
      <div class="flex flex-col ml-10 lg:ml-0 gap-3 w-[10%] items-center pt-5">
        <button
          className=" text-white flex flex-col justify-center items-center  transparent w-24 h-24 rounded gap-1 cursor-pointer"
          onDoubleClick={() => {
            setShowAbout(true);
            handleRecent("About Me", "/images/aboutme.png", setShowAbout);
          }}
          onClick={() => {
            toast.success("Double Click to open");
          }}
        >
          <img src="/images/aboutme.png" alt="img" className="w-16" />
          <p className="text-[14px] ">About Me</p>
        </button>
        <button
          className=" text-white flex flex-col justify-center items-center  transparent w-24 h-24 rounded gap-1  cursor-pointer"
          onDoubleClick={() => {
            setShowResume(true);
            handleRecent("My Resume", "/images/pdf.png", setShowResume);
          }}
          onClick={() => {
            toast.success("Double Click to open");
          }}
        >
          <img src="/images/pdf.png" alt="img" className="w-16" />
          <p className="text-[14px] ">My Resume</p>
        </button>
        <button
          className=" text-white flex flex-col justify-center items-center  transparent w-24 h-24 rounded gap-1 cursor-pointer"
          onDoubleClick={() => {
            setShowProjects(true);
            handleRecent(
              "My Projects",
              "/images/explorer.png",
              setShowProjects
            );
          }}
          onClick={() => {
            toast.success("Double Click to open");
          }}
        >
          <img src="/images/explorer.png" alt="img" className="w-16" />
          <p className="text-[14px] ">My Projects</p>
        </button>
        <button
          className=" text-white flex flex-col justify-center items-center  transparent w-24 h-24 rounded gap-1 cursor-pointer"
          onDoubleClick={(e) => {
            e.stopPropagation();
            setWarning(true);
            setWarningName("Contacts");
            setWarningMsg(
              "Contact details will be available soon. Thanks for waiting!"
            );
          }}
          onClick={() => {
            toast.success("Double Click to open");
          }}
        >
          <img src="/images/contact.png" alt="img" className="w-16" />
          <p className="text-[14px] ">Contact Me</p>
        </button>
      </div>

      {showAbout && <About />}
      {showProjects && <Projects />}
      {showResume && <Resume />}

      {warning && <Warning />}
      {warning && <div className="absolute inset-0 bg-black/70 z-100 "></div>}
      {alert && <Alert />}
      {alert && <div className="absolute inset-0 bg-black/70 z-100 "></div>}

      {showStart && <Start />}
      <Footer />
    </div>
  );
};

export default Home;
