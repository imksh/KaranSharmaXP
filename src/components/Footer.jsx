import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const Footer = ({ setShowStart, apps, handleClose }) => {
  const [full, setFull] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [message, setMessage] = useState(false);
  const defaultSound = new Audio("/sounds/default.mp3");

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

  function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    defaultSound.play();
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
    defaultSound.play();
    setFull(false);
  }

  return (
    <div
      className="fixed bottom-0 left-0 bg-blue-800 w-full h-10 text-white flex items-center justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="flex bg-green-700 h-full items-center w-[10%] pl-3 gap-2 fade cursor-pointer"
        onClick={() => setShowStart((prev) => !prev)}
      >
        <img src="/images/xp.png" alt="xp logo" className="w-6 object-cover" />
        <p>Start</p>
      </button>
      <div className="flex justify-baseline flex-1 ">
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
      <div className="h-full flex items-center bg-blue-500 px-5 gap-3">
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
        >
          <BsInfoCircle size={18} />
        </button>
        {showInfo && (
          <div
            className="absolute -top-12 text-[12px] text-black p-3 rounded-2xl"
            style={{ backgroundColor: "#ebe9d6" }}
          >
            {message}
          </div>
        )}
        <button
          className="cursor-pointer"
          onMouseEnter={() => {
            setShowInfo(true);
            setMessage("Security");
          }}
          onMouseLeave={() => {
            setShowInfo(false);
            setMessage("");
          }}
        >
          <CiSettings size={20} />
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

        <p className="text-[14px] font-bold min-w-[100px]">{time}</p>
      </div>
    </div>
  );
};

export default Footer;
