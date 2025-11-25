import React from "react";
import "./MSection.css";
import { Link } from "react-router-dom";
import Database from "../pages/Database";
import placeholder from "../assets/placeholder.png";
const MainpageSection = () => {
  return (
    <>
      <div className="p-14"></div>
      <div className="min-h-screen bg-linear-to-r from-teal-400 to-green-600  p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            Database Kesiswaan
          </h1>
          <div>
            <div className="grid grid-cols-2 gap-2">
              {" "}
              <div className="...">
                <ul>
                  <li className="mb-4 bg-gray-500 h-10 flex items-center pl-4">
                    <Link
                      to="/Database"
                      className=" text-white hover:text-gray-300 font-bold"
                    >
                      Cek Database Siswa
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="...">
                {" "}
                <article>
                  <h1 className="font-bold">
                    SELAMAT DATANG DI SISTEM INFORMASI DATA SISWA SEDERHANA
                  </h1>
                  <p>
                    {" "}
                    Sistem Informasi Data Siswa ini berisi fitur-fitur tentang
                    pengolahan data siswa, dan laporan biodata siswa,
                    dan laporan nilai siswa.
                  </p>
                </article>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <footer className="">
        <p>Database Kesiswaan, All Rights Reserved</p>
      </footer>
    </>
  );
};

export default MainpageSection;
