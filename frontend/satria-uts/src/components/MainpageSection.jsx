import React from "react";
import "./MSection.css";
import { Link } from "react-router-dom";
import Database from "../pages/Database";
import placeholder from "../assets/placeholder.png"
const MainpageSection = () => {
  return (
    <>
      <header>
    <div id="top-header">
        <div id="logo">
            <img src={placeholder} />
        </div>
        <nav>
            <ul>
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Our Products</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    </div>
    <div id="header-image-menu">
        
        <h2 id="image-text">
            A Basic Web Design course by GeeksforGeeks
        </h2>
    </div>
</header>

      <section>
        <nav className="navs">
          <ul className="uls">
            <li>

              <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"><Link to="/Database">Database</Link></button>
            </li>
            <li>
              <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
            </li>
            <li>
              <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
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
