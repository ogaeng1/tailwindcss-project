import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Premier from "../pages/Premier";
import Laliga from "../pages/Laliga";
import Bundes from "../pages/Bundes";
import Serie from "../pages/Serie";
import Ligue from "../pages/Ligue";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/premier" element={<Premier />} />
        <Route path="/laliga" element={<Laliga />} />
        <Route path="/bundes" element={<Bundes />} />
        <Route path="/serie" element={<Serie />} />
        <Route path="/ligue" element={<Ligue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
