import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainpageSection from "./components/MainpageSection";
import Database from "./pages/Database"
import Mainpage from "./pages/Mainpage"
import DbGuru from "./pages/DbGuru";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Database" element={<Database />} />
          <Route path="/DbGuru" element={<DbGuru />} />
          <Route path="*" element={<p>404 Not Found</p>} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
