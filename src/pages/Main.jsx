import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Layout>
      <div className="w-full h-screen bg-blue-500 gap-7 flex flex-col justify-center items-center md:flex-row">
        <Link to="/premier">
          <div className="main-logo">
            <img src="./images/premier.jpg" alt="" className="rounded-[10px]" />
          </div>
        </Link>
        <Link to="/laliga">
          <div className="main-logo">
            <img src="/images/laliga.jpg" alt="" className="rounded-[10px]" />
          </div>
        </Link>
        <Link to="/bundes">
          <div className="main-logo">
            <img src="/images/bundes.jpg" alt="" className="rounded-[10px]" />
          </div>
        </Link>
        <Link to="/serie">
          <div className="main-logo">
            <img src="/images/serie.jpg" alt="" className="rounded-[10px]" />
          </div>
        </Link>
        <Link to="/ligue">
          <div className="main-logo">
            <img src="/images/ligue.jpg" alt="" className="rounded-[10px]" />
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Main;
