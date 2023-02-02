import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[50%] h-[80px] m-[10px_auto] animate-spin-spinner">
      <FaSpinner className="w-[30%] h-[30%]" />
    </div>
  );
};

export default Loading;
