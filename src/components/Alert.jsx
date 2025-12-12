import React from "react";
import { IoMdClose } from "react-icons/io";

function Alert({ setShow, image, name, link }) {
  return (
    <div
      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border border-blue-600 w-[30%] rounded overflow-hidden flex flex-col z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-blue-600 flex justify-between p-2 items-center text-white">
        <div className="flex items-center gap-2">
          <img src={`${image}`} alt="" className="w-6" />
          <p className="text-[14px]">Open Link</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 p-1 border border-white rounded text-white cursor-pointer"
          onClick={() => setShow(false)}
        >
          <IoMdClose />
        </button>
      </div>
      <div
        className="flex flex-col gap-3 justify-center items-center py-4"
        style={{ backgroundColor: "#ebe9d6" }}
      >
        <img src={`${image}`} alt="" className="w-12" />
        <p className="font-bold">Open Link</p>
        <p>{`Are you sure you want to open "${name || "This"}"?`}</p>
        <div className="flex justify-between w-[80%] my-3">
          <button
            className="bg-white py-1 rounded cursor-pointer w-[100px] hover:bg-blue-600 hover:text-white"
            onClick={() => setShow(false)}
          >
            Cancle
          </button>
          <button
            className="bg-white  py-1 rounded cursor-pointer w-[100px] hover:bg-blue-600 hover:text-white"
            onClick={() => {
              window.location.href = link;
              setShow(false);
            }}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
