import { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { GrPowerShutdown } from "react-icons/gr";
import { FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Start = ({
  setShowStart,
  setShowAbout,
  setShowResume,
  setShowProjects,
  setAlert,
  setName,
  setImage,
  setLink,
  handleRecent,
  setWarning,
  setWarningMsg,
  setWarningName,
}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const logOff = new Audio("/sounds/off.mp3");

  return (
    <div
      className="absolute bottom-10 left-0 w-[30%] rounded overflow-hidden z-99"
      onClick={(e) => e.stopPropagation()}
    >
      <button className=" flex items-center p-2 gap-3 cursor-pointer bg-blue-600 text-white w-full">
        <img
          src="/images/karan.jpg"
          alt="Karan Sharma"
          className="w-12 border-2 border-white rounded ml-1"
        />
        <h2 className="font-bold">Karan Sharma</h2>
      </button>

      <div className="w-full flex">
        <div className="w-[55%] bg-white border-r border-gray-500 flex flex-col">
          <button
            className="flex gap-2 p-3 hover:bg-blue-700 hover:text-white cursor-pointer"
            onClick={() => {
              setShowProjects(true);
              setShowStart(false);
              handleRecent("My Projects", "/images/explorer.png");
            }}
          >
            <img src="/images/explorer.png" alt="" className="w-10" />
            <div className="flex flex-col items-baseline justify-center">
              <h2 className="font-bold">My Projects</h2>
              <p className="text-[12px] text-gray-500">View my works</p>
            </div>
          </button>
          <button
            className="flex gap-2 p-3 hover:bg-blue-700 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setWarning(true);
              setWarningName("Contacts");
              setWarningMsg(
                "Contact details will be available soon. Thanks for waiting!"
              );
              setShowStart(false);
            }}
          >
            <img src="/images/contact.png" alt="" className="w-10" />
            <div className="flex flex-col items-baseline justify-center">
              <h2 className="font-bold">Contact Me</h2>
              <p className="text-[12px] text-gray-500">Send me a message</p>
            </div>
          </button>
          <div className="w-[80%] border border-gray-200 mx-auto"></div>
          <button
            className="flex gap-2 p-3 hover:bg-blue-700 hover:text-white cursor-pointer"
            onClick={() => {
              setShowAbout(true);
              setShowStart(false);
              handleRecent("About Me", "/images/aboutme.png");
            }}
          >
            <img src="/images/aboutme.png" alt="" className="w-10" />
            <div className="flex flex-col items-baseline justify-center">
              <h2 className="text-[14px]">About Me</h2>
            </div>
          </button>
          <button
            className="flex gap-2 p-3 hover:bg-blue-700 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setWarning(true);
              setWarningName("Contacts");
              setWarningMsg(
                "Image Viewer will be available soon. Thanks for waiting!"
              );
              setShowStart(false);
            }}
          >
            <img src="/images/imageviewer.png" alt="" className="w-10" />
            <div className="flex flex-col items-baseline justify-center">
              <h2 className="text-[14px]">Image Viewer</h2>
            </div>
          </button>
          <button
            className="flex gap-2 p-3 hover:bg-blue-700 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setWarning(true);
              setWarningName("Contacts");
              setWarningMsg(
                "Media Player will be available soon. Thanks for waiting!"
              );
              setShowStart(false);
            }}
          >
            <img src="/images/player.png" alt="" className="w-10" />
            <div className="flex flex-col items-baseline justify-center">
              <h2 className="text-[14px]">Media Player</h2>
            </div>
          </button>
          <button
            className="flex gap-2  p-3 hover:bg-blue-700 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setWarning(true);
              setWarningName("Contacts");
              setWarningMsg(
                "Paint will be available soon. Thanks for waiting!"
              );
              setShowStart(false);
            }}
          >
            <img src="/images/paint.png" alt="" className="w-10" />
            <div className="flex flex-col items-baseline justify-center">
              <h2 className="text-[14px]">Paint</h2>
            </div>
          </button>
          <button
            className="flex gap-2 p-1 w-full justify-center items-center border-t border-gray-300  hover:bg-blue-700 hover:text-white cursor-pointer mt-auto"
            onClick={() => setShow(!show)}
          >
            <p className="font-bold">All Programs</p>
            <FaCaretRight size={32} className="text-green-700" />
          </button>
        </div>

        <div className="w-[45%] border-r bg-blue-200 flex flex-col">
          <button
            className="flex gap-2 p-2  hover:bg-blue-700 hover:text-white items-center cursor-pointer"
            onClick={() => {
              setLink("https://www.instagram.com/imksh.3/");
              setName("Instagram");
              setImage("/images/instagram.png");
              setAlert(true);
              setShowStart(false);
            }}
          >
            <img src="/images/instagram.png" alt="" className="w-8" />
            <h2 className="font-bold">Instagram</h2>
          </button>
          <button
            className="flex gap-2 p-2 hover:bg-blue-700 hover:text-white items-center cursor-pointer"
            onClick={() => {
              setLink("https://github.com/imksh");
              setName("GitHub");
              setImage("/images/github.png");
              setAlert(true);
              setShowStart(false);
            }}
          >
            <img src="/images/github.png" alt="" className="w-8" />
            <h2 className="font-bold">GitHub</h2>
          </button>
          <button
            className="flex gap-2 p-2  hover:bg-blue-700 hover:text-white items-center cursor-pointer"
            onClick={() => {
              setLink("https://www.linkedin.com/in/imksh3/");
              setName("LinkedIn");
              setImage("/images/linkedin.png");
              setAlert(true);
              setShowStart(false);
            }}
          >
            <img src="/images/linkedin.png" alt="" className="w-8" />
            <h2 className="font-bold">LinkedIn</h2>
          </button>
          <button
            className="flex gap-2 p-2 hover:bg-blue-700 hover:text-white items-center cursor-pointer"
            onClick={() => {
              setLink("https://wa.me/917295038835");
              setName("Whatsapp");
              setImage("/images/whatsapp.png");
              setAlert(true);
              setShowStart(false);
            }}
          >
            <img src="/images/whatsapp.png" alt="" className="w-8" />
            <h2 className="font-bold">Whatsapp</h2>
          </button>
          <div className="w-[90%] border border-gray-200 mx-auto"></div>
          <button
            className="flex gap-2 p-2 hover:bg-blue-700 hover:text-white cursor-pointer items-center"
            onClick={(e) => {
              e.stopPropagation();
              setWarning(true);
              setWarningName("Contacts");
              setWarningMsg(
                "Command Prompt will be available soon. Thanks for waiting!"
              );
            }}
          >
            <img src="/images/terminal.png" alt="" className="w-8" />
            <h2 className="text-[14px]">Command Prompt</h2>
          </button>
          {show && (
            <>
              <button
                className="flex gap-3 px-2 py-3 hover:bg-blue-700 hover:text-white cursor-pointer items-center "
                onClick={(e) => {
                  e.stopPropagation();
                  setWarning(true);
                  setWarningName("Contacts");
                  setWarningMsg(
                    "Music Player will be available soon. Thanks for waiting!"
                  );
                }}
              >
                <img src="/images/music.png" alt="" className="w-8" />
                <h2 className="text-[14px]">Music Player</h2>
              </button>
              <button
                className="flex gap-3 px-2 py-3 hover:bg-blue-700 hover:text-white cursor-pointer items-center "
                onClick={() => {
                  setShowResume(true);
                  setShowStart(false);
                  handleRecent("My Resume", "/images/pdf.png");
                }}
              >
                <img src="/images/pdf.png" alt="" className="w-8" />
                <h2 className="text-[14px]">My Resume</h2>
              </button>
              <button
                className="flex gap-3 px-2 py-3 hover:bg-blue-700 hover:text-white cursor-pointer items-center "
                onClick={() => {
                  setLink("https://x.com/imksh_3");
                  setName("X (Twitter)");
                  setImage("/images/twitter.png");
                  setAlert(true);
                  setShowStart(false);
                }}
              >
                <img src="/images/twitter.png" alt="" className="w-7" />
                <h2 className="text-[14px]">X (Twitter)</h2>
              </button>
            </>
          )}
        </div>
      </div>

      <div className=" flex items-center p-2 rounded  cursor-pointer bg-blue-600 text-white w-full justify-end pr-6 gap-8">
        <button
          className="flex items-center justify-center gap-1"
          onClick={() => {
            navigate("/login");
            logOff.play();
          }}
        >
          <div className="bg-yellow-500  border rounded p-1 border-white text-white cursor-pointer">
            <IoKeyOutline size={12} />
          </div>
          <p className="">Log Off</p>
        </button>
        <button
          className="flex items-center justify-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-red-500  border rounded p-1 border-white text-white">
            <GrPowerShutdown size={12} />
          </div>
          <p className="">Shut Down</p>
        </button>
      </div>
    </div>
  );
};

export default Start;
