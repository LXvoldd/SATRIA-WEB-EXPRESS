import React from "react";

import Navbar from "../components/Navbar";
import MainpageSection from "../components/MainpageSection";
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <>
      <MainpageSection />
      <Navbar />
    </>
  );
};

export default Mainpage;
