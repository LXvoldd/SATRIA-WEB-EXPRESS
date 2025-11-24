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
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Dashboard
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Settings
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Profile
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Messages
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-400">
                      Logout
                    </a>
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
                    pengolahan data siswa, data guru, data kelas, data
                    pelajaran, pembagian kelas, pembagian wali kelas,
                    penginputan nilai siswa, pencarian data siswa dan guru.
                    Aplikasi ini juga dilengkapi report-report untuk keperluan
                    akademik yakni antara lain: laporan dafatar guru, laporan
                    biodata guru, laporan daftar siswa, laporan biodata siswa,
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
