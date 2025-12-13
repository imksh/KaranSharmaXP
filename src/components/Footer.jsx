import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import useGlobalStore from "../store/useGlobalStore";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";

const Footer = () => {
  const { apps, showStart, setShowStart, handleClose, vol, setVol } =
    useGlobalStore();
  const [full, setFull] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [message, setMessage] = useState(false);
  const defaultSound = new Audio("/sounds/default.mp3");
  const [about, setAbout] = useState("");

  const t = new Date();
  const [time, setTime] = useState(
    t.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  useEffect(() => {
    setTimeout(() => {
      const d = new Date();
      const time = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(time);
    }, 1000);
  }, [time]);

  useEffect(() => {
    setTimeout(() => {
      setAbout("");
    }, 7000);
  }, [about]);

  function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    if (vol) defaultSound.play();
    setFull(true);
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    if (vol) defaultSound.play();
    setFull(false);
  }

  return (
    <div
      className="fixed bottom-0 left-0 bg-blue-800 w-full h-10 text-white flex items-center justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="flex bg-green-700 h-full items-center w-[35%] lg:w-[10%] pl-3 gap-2 fade cursor-pointer"
        onClick={() => setShowStart(!showStart)}
      >
        <img src="/images/xp.png" alt="xp logo" className="w-6 object-cover" />
        <p>Start</p>
      </button>
      <div className="hidden lg:flex justify-baseline flex-1 ">
        {apps?.map((item, indx) => (
          <button
            key={indx}
            className="flex gap-1 items-center justify-between border-r border-gray-300 px-2 cursor-pointer"
            onClick={() => {
              item.fun((prev) => !prev);
            }}
          >
            <img src={item?.image} alt="" className="w-4" />
            {item?.name}
            <button
              className=" hover:bg-red-600 p-1 mx-0.5 text-white cursor-pointer rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                item.fun(false);
                handleClose(item.name);
              }}
            >
              <IoMdClose />
            </button>
          </button>
        ))}
      </div>
      <div className="h-full flex items-center bg-blue-500 px-2 lg:px-5 gap-3">
        {about && (
          <div
            className=" lg:flex absolute text-center -top-40 -translate-x-[50%] text-[12px] text-black p-3 rounded-2xl"
            style={{ backgroundColor: "#ebe9d6" }}
          >
            {about}
          </div>
        )}
        <button
          className="cursor-pointer"
          onMouseEnter={() => {
            setShowInfo(true);
            setMessage("Click to view Info");
          }}
          onMouseLeave={() => {
            setShowInfo(false);
            setMessage("");
          }}
          onClick={() =>
            setAbout(
              "Hi, I’m Karan Sharma. I build web and app projects with a focus on clean design, performance, and practical problem-solving. This XP-style portfolio is a fun experiment to showcase my work."
            )
          }
        >
          <BsInfoCircle size={18} />
        </button>
        {showInfo && !about && (
          <div
            className="hidden lg:flex absolute -top-12 text-[12px] text-black p-3 rounded-2xl"
            style={{ backgroundColor: "#ebe9d6" }}
          >
            {message}
          </div>
        )}
        <button
          className="cursor-pointer"
          onMouseEnter={() => {
            setShowInfo(true);
            setMessage(vol ? "Mute Volume" : "Unmute Volume");
          }}
          onMouseLeave={() => {
            setShowInfo(false);
            setMessage("");
          }}
          onClick={() => {
            setVol(!vol);
          }}
        >
          {vol ? (
            <IoVolumeHighOutline size={20} />
          ) : (
            <IoVolumeMuteOutline size={20} />
          )}
        </button>

        {full ? (
          <button
            onClick={closeFullscreen}
            className="cursor-pointer"
            onMouseEnter={() => {
              setShowInfo(true);
              setMessage("Toggle Full Screen");
            }}
            onMouseLeave={() => {
              setShowInfo(false);
              setMessage("Toggle Full Screen");
            }}
          >
            <FaToggleOn size={24} className="text-blue-700" />
          </button>
        ) : (
          <button
            onClick={openFullscreen}
            className="cursor-pointer"
            onMouseEnter={() => {
              setShowInfo(true);
              setMessage("Toggle Full Screen");
            }}
            onMouseLeave={() => {
              setShowInfo(false);
              setMessage("Toggle Full Screen");
            }}
          >
            <FaToggleOff size={24} />
          </button>
        )}

        <p className="text-[14px] font-bold min-w-[60px] lg:min-w-[100px]">
          {time}
        </p>
      </div>
    </div>
  );
};

export default Footer;
