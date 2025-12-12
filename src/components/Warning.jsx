import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";

function Warning({ setShow, name, msg }) {
  return (
    <div
      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  border border-blue-600 w-[30%] rounded overflow-hidden flex flex-col z-111"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-blue-600 flex justify-between p-2 items-center text-white">
        <div className="flex items-center gap-2">
          <IoIosWarning size={20} className="text-yellow-400"/>
          <p className="text-[14px]">Alert</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 p-1 border border-white rounded text-white cursor-pointer"
          onClick={() => setShow(false)}
        >
          <IoMdClose />
        </button>
      </div>
      <div
        className="flex flex-col gap-3 justify-center items-center p-4 text-center"
        style={{ backgroundColor: "#ebe9d6" }}
      >
        <IoIosWarning size={54} className="text-yellow-400" />
        <p className="font-bold">{name}</p>
        <p>{msg}</p>
        <div className="flex justify-between w-[90%] my-3">
          <button
            className="bg-white py-1 rounded cursor-pointer w-[100px] hover:bg-blue-600 hover:text-white"
            onClick={() => setShow(false)}
          >
            Cancle
          </button>
          <button
            className="bg-white  py-1 rounded cursor-pointer w-[100px] hover:bg-blue-600 hover:text-white"
            onClick={() => setShow(false)}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default Warning;
