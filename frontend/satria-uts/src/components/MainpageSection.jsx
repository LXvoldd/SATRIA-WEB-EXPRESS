import React from "react";
import "./MSection.css";
const MainpageSection = () => {
  return (
    <>
      <header className="headers">
      </header>

      <section>
        <nav className="navs">
          <ul className="uls">
            <li>
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
          <h1>London</h1>
          <p>
            London is the capital city of England. It is the most populous city
            in the United Kingdom, with a metropolitan area of over 13 million
            inhabitants.
          </p>
          <p>
            Standing on the River Thames, London has been a major settlement for
            two millennia, its history going back to its founding by the Romans,
            who named it Londinium.
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
