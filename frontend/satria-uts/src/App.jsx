import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainpageSection from "./components/MainpageSection";
import Database from "./pages/Database"
import Mainpage from "./pages/Mainpage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Database" element={<Database />} />
          {/* Other routes */}
          <Route path="*" element={<p>404 Not Found</p>} />{" "}
          {/* Catch-all for unmatched routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
