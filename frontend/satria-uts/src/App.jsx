import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainpageSection from "./components/MainpageSection";
import Database from "./pages/Database"
import Mainpage from "./pages/Mainpage"
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Database" element={<Database />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<p>404 Not Found</p>} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
