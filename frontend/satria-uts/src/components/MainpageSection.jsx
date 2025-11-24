import React from "react";
import "./MSection.css";
import { Link } from "react-router-dom";
import Database from "../pages/Database";
import placeholder from "../assets/placeholder.png";
const MainpageSection = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="div-content grow">
          <div class="grid grid-cols-2 gap-4">
            <div class="...">
              {" "}
              <nav className="navs bg-gray-500">
                <ul className="uls">
                  <li>
                    <button
                      type="button"
                      className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                    >
                      <Link to="/Database">Database</Link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                    >
                      <Link to="/About">About</Link>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="bg-white">
              {" "}
              <section>
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
              </section>
            </div>
          </div>
        </div>

        <footer className="">
          <p>Footer</p>
        </footer>
      </div>
    </>
  );
};

export default MainpageSection;
