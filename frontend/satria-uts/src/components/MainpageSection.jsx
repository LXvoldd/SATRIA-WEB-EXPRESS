import React from "react";
import "./MSection.css";
import { Link } from "react-router-dom";
import Database from "../pages/Database";
const MainpageSection = () => {
  return (
    <>
      <header className="headers">
      </header>

      <section>
        <nav className="navs">
          <ul className="uls">
            <li>

<Link to={Database}/>
              <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">cek data siswa</button>
            </li>
            <li>
              <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
            </li>
            <li>
              <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
            </li>
          </ul>
        </nav>

        <article className="articles">
          <h1></h1>
          <p>
            
          </p>
          <p>
            
          </p>
        </article>
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default MainpageSection;
