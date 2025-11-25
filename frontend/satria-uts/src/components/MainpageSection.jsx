import React from "react";
import "./MSection.css";
import { Link } from "react-router-dom";
import logo from "../assets/medcom.png";

const MainpageSection = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-r from-teal-400 to-green-600 p-6 main-wrapper">

        <div className="flex items-center gap-4 mb-8 logo-box">
          <img className="h-20 drop-shadow-xl rounded-lg" alt="Medcom Logo" />
        </div>

        <div
          className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border
                        border-gray-200 backdrop-blur-lg main-card"
        >
          <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
            Database Kesiswaan
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="menu-button">
                  <Link
                    to="/Database"
                    className="text-white font-semibold text-lg tracking-wide"
                  >
                    Cek Database Siswa
                  </Link>
                </li>

                <li className="menu-button">
                  <Link
                    to="/DbGuru"
                    className="text-white font-semibold text-lg tracking-wide"
                  >
                    Cek Database Guru
                  </Link>
                </li>
                <li className="menu-button">
                  <Link
                    to="/About"
                    className="text-white font-semibold text-lg tracking-wide"
                  >
                    Tentang Website Ini
                  </Link>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE DESCRIPTION */}
            <article className="info-box">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">
                Selamat Datang Di Database Siswa SMK Medikacom Versi 1.0
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Sistem Informasi Data Siswa ini berisi fitur pengolahan dan
                penyajian data siswa, laporan biodata siswa,dan data guru, Dibuat agar pemantauan informasi sekolah lebih
                mudah, cepat, dan efisien.
              </p>
            </article>
          </div>
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

export default MainpageSection;
