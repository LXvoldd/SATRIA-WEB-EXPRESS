import React from "react";
import sample from "../assets/medcom.png"
const About = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-r from-teal-400 to-green-600 p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            Mockup Database Kesiswaan SMK Medikacom
          </h1>
          <img src={sample} alt="" />
          <p>
            Website ini dibuat sebagai tugas Ulangan Akhir Semester yang
            memiliki fungsi <i>basic</i> seperti <i>CRUD</i>
          </p>
          <p>Kelompok 7</p>
          <p className="font-bold">Dibuat Oleh</p>
          <ul>
            <li>
              <p>Satria</p>
            </li>
            <li>
              <p>Azaria</p>
            </li>
            <li>
              <p>Dzaky</p>
            </li>
            <li>
              <p>Ihram</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="text-center mt-10 p-5 text-white bg-gray-900 shadow-inner">
        <p className="tracking-wide">
          Database Kesiswaan SMK Medikacom — All Rights Reserved ©2025
        </p>
      </footer>
    </>
  );
};

export default About;
