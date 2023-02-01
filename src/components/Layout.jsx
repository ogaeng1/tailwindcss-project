import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
