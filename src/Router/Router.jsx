import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Premier from "../pages/Premier";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/premier" element={<Premier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
