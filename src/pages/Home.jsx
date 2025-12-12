import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Start from "../components/Start";
import Alert from "../components/Alert";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Warning from "../components/Warning";

const Home = () => {
  const [showStart, setShowStart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [alert, setAlert] = useState(false);
  const [warning, setWarning] = useState(true);
  const [warningName, setWarningName] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [apps, setApps] = useState([]);
  const audio = new Audio("/sounds/boot.mp3");
  useEffect(() => {
    audio.play();
  }, []);

  const handleRecent = (name, image, fun) => {
    const flag = apps.find((i) => i.name === name);
    let updated;
    const item = {
      name,
      image,
      fun,
      index: apps.length > 0 ? apps[apps.length - 1].index + 1 : 0,
    };
    if (!flag) {
      updated = [...apps, item];
    } else {
      updated = apps.filter((i) => i.name !== name);
      updated.push(item);
    }
    setApps(updated);
  };

  const handleClose = (name) => {
    const updated = apps.filter((i) => i.name !== name);
    setApps(updated);
  };

  return (
    <div
      className={`min-h-screen wallpaper relative pb-10 overflow-hidden ${
        warning ? "" : ""
      }`}
      onClick={() => {
        setShowStart(false);
        setAlert(false);
      }}
    >
      <div class="flex flex-col gap-3 w-[10%] items-center pt-5">
        <button
          className=" text-white flex flex-col justify-center items-center  transparent w-24 h-24 rounded gap-1 cursor-pointer"
          onDoubleClick={() => {
            setShowAbout(true);
            handleRecent("About Me", "/images/aboutme.png", setShowAbout);
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
        >
          <img src="/images/contact.png" alt="img" className="w-16" />
          <p className="text-[14px] ">Contact Me</p>
        </button>
      </div>

      {showAbout && (
        <About
          setShow={setShowAbout}
          apps={apps}
          handleClose={handleClose}
          handleRecent={handleRecent}
          setShowAbout={setShowAbout}
          setAlert={setAlert}
          setImage={setImage}
          setName={setName}
          setLink={setLink}
        />
      )}
      {showProjects && (
        <Projects
          setShow={setShowProjects}
          apps={apps}
          handleClose={handleClose}
          handleRecent={handleRecent}
          setShowProjects={setShowProjects}
          setAlert={setAlert}
          setImage={setImage}
          setName={setName}
          setLink={setLink}
        />
      )}
      {showResume && (
        <Resume
          setShow={setShowResume}
          apps={apps}
          handleClose={handleClose}
          handleRecent={handleRecent}
          setShowResume={setShowResume}
          setAlert={setAlert}
          setImage={setImage}
          setName={setName}
          setLink={setLink}
        />
      )}

      {warning && (
        <Warning setShow={setWarning} name={warningName} msg={warningMsg} />
      )}
      {warning && (
        <div className="absolute inset-0 bg-black/70 z-100 "></div>
      )}

      {alert && (
        <Alert setShow={setAlert} image={image} name={name} link={link} />
      )}
      {showStart && (
        <Start
          setShowStart={setShowStart}
          setShowAbout={setShowAbout}
          setShowProjects={setShowProjects}
          setShowResume={setShowResume}
          setAlert={setAlert}
          setImage={setImage}
          setName={setName}
          setLink={setLink}
          handleRecent={handleRecent}
          setWarning={setWarning}
          setWarningMsg={setWarningMsg}
          setWarningName={setWarningName}
        />
      )}
      <Footer
        setShowStart={setShowStart}
        apps={apps}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Home;
