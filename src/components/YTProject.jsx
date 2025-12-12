import { useState, useEffect } from "react";
import data from "../data/projects.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const YTProject = ({ width, screen, setScreen }) => {
  const [img, setImg] = useState(0);
  const [item, setItem] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const d = data.find((i) => i.title === screen);
    setItem(d);
    const temp = data.filter((i) => i.title !== screen);
    setSuggestions(temp);
  }, [screen]);

  const capitial = (item) => {
    const arr = item.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  };

  if (!item) {
    return <div>Loading</div>;
  }

  return (
    <div className={`flex overflow-auto pb-40 w-full`}>
      <div
        className={`${
          width > 1000 ? "w-[70%]" : "w-full"
        } overflow-auto hide-scrollbar `}
      >
        <div
          className={`${
            width > 1000 ? "w-[95%]" : "w-[98%]"
          } mx-auto mt-4 rounded-2xl flex items-center relative justify-center border border-white h-[400px] `}
        >
          <button
            className={`font-extrabold hover:scale-120  text-gray-300  cursor-pointer absolute z-10 left-10
            `}
            onClick={() => setImg(img <= 0 ? item?.img?.length - 1 : img - 1)}
          >
            <IoIosArrowBack size={35} />
          </button>
          <img
            src={item?.img?.at(img)}
            alt=""
            className="h-[399px] object-cover rounded-2xl"
          />
          <button
            className={`font-extrabold mx-auto hover:scale-120 cursor-pointer 
               absolute z-10 right-10 text-gray-300 
            `}
            onClick={() => setImg(img >= item?.img?.length - 1 ? 0 : img + 1)}
          >
            <IoIosArrowForward size={35} />
          </button>
        </div>
        <div className="flex justify-between items-center py-4 px-2 w-[95%] mx-auto relative">
          <div className="flex gap-2 items-center">
            <img
              src="/images/karan.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className=" flex flex-col items-baseline">
              <p className="text-2xl font-bold">{item.title}</p>
            </div>
          </div>

          <div className="flex gap-1 absolute  left-[50%] -translate-x-[50%]">
            {item?.img?.map((i, indx) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border border-white ${
                  indx === img ? "bg-red-500" : ""
                }`}
              ></div>
            ))}
          </div>
          <div className="flex gap-2">
            {item?.type?.split(",").map((i) => (
              <div className="bg-red-500 px-4 py-1 flex justify-center items-center rounded-2xl">
                {capitial(i)}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[95%] mx-auto my-4">
          <p className="">
            <span className="font-bold">Tech: </span>
            {item?.tech}
          </p>
          <div>{item?.desc}</div>
        </div>
      </div>

      {width > 1000 && (
        <div className="w-[30%] flex flex-col overflow-auto pl-3">
          <p className="text-2xl font-bold my-4 mx-2">Suggested</p>
          <div className="flex flex-col gap-4">
            {suggestions?.map((i) => (
              <button
                className="flex  gap-3 cursor-pointer p-4 rounded-2xl w-[95%] hover:bg-neutral-700/50"
                onClick={() => {
                  setScreen(i.title);
                }}
              >
                <img src={i?.img[0]} alt="" className="w-40 rounded-[14px]" />
                <div>
                  <p className="mt-2 font-bold">{i.title}</p>
                  <div className="flex gap-1 text-gray-400">
                    {i.type.split(",").map((j, indx) => (
                      <p>
                        {capitial(j)}{" "}
                        {i.type.split(",").length - 1 !== indx && "•"}
                      </p>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YTProject;
