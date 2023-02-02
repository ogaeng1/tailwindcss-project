import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="bg-blue-500 w-[120px] h-screen box-border p-[30px] fixed lg:w-[15%]">
      <Link to="/">
        <div className="w-full h-12 text-[18px] flex mt-[50px] justify-center items-center p-[10px] rounded-[10px] hover:shadow-[0_0_20px] cursor-pointer xl:justify-start">
          <span className=" hidden xl:flex">🏠 홈으로</span>
          <span className="xl:hidden">홈</span>
        </div>
      </Link>
      {location.pathname === "/premier" ? (
        <Link to="/premier">
          <div className="w-full h-12 text-[18px] flex mt-[50px] items-center p-[10px] rounded-[10px] cursor-pointer bg-gray-500">
            <img
              src="images/premier.jpg"
              alt="프리미어리그"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">프리미어리그</span>
          </div>
        </Link>
      ) : (
        <Link to="/premier">
          <div className="w-full h-12 text-[18px] flex mt-[50px] items-center p-[10px] rounded-[10px] hover:shadow-[0_0_20px] cursor-pointer xl:w-full">
            <img
              src="images/premier.jpg"
              alt="프리미어리그"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">프리미어리그</span>
          </div>
        </Link>
      )}
      {location.pathname === "/laliga" ? (
        <Link to="/laliga">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] bg-gray-500 rounded-[10px] cursor-pointer">
            <img
              src="images/laliga.jpg"
              alt="라리가"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">라리가</span>
          </div>
        </Link>
      ) : (
        <Link to="/laliga">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] hover:shadow-[0_0_20px] cursor-pointer">
            <img
              src="images/laliga.jpg"
              alt="라리가"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">라리가</span>
          </div>
        </Link>
      )}
      {location.pathname === "/bundes" ? (
        <Link to="/bundes">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] bg-gray-500 cursor-pointer">
            <img
              src="images/bundes.jpg"
              alt="분데스리가"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">분데스리가</span>
          </div>
        </Link>
      ) : (
        <Link to="/bundes">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] hover:shadow-[0_0_20px] cursor-pointer">
            <img
              src="images/bundes.jpg"
              alt="분데스리가"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">분데스리가</span>
          </div>
        </Link>
      )}
      {location.pathname === "/serie" ? (
        <Link to="/serie">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] bg-gray-500 cursor-pointer">
            <img
              src="images/serie.jpg"
              alt="세리에"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">세리에A</span>
          </div>
        </Link>
      ) : (
        <Link to="/serie">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] hover:shadow-[0_0_20px] cursor-pointer">
            <img
              src="images/serie.jpg"
              alt="세리에"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">세리에A</span>
          </div>
        </Link>
      )}
      {location.pathname === "/ligue" ? (
        <Link to="/ligue">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] bg-gray-500 cursor-pointer">
            <img
              src="images/ligue.jpg"
              alt="리그1"
              className="w-[50px] h-10 rounded-[10px] mr-[15px]"
            />
            <span className="hidden xl:flex">리그1</span>
          </div>
        </Link>
      ) : (
        <Link to="/ligue">
          <div className="w-full h-12 text-[18px] flex mt-[20px] items-center p-[10px] rounded-[10px] hover:shadow-[0_0_20px] cursor-pointer">
            <img
              src="images/ligue.jpg"
              alt="리그1"
              className="w-[50px] h-10 rounded-[10px]"
            />
            <span className="ml-[15px] hidden xl:flex">리그1</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Menu;
