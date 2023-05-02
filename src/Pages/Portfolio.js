import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Developer Name
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    currentPage === "About" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setCurrentPage("About")}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    currentPage === "Portfolio" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setCurrentPage("Portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    currentPage === "Contact" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setCurrentPage("Contact")}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    currentPage === "Resume" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setCurrentPage("Resume")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default Portfolio;
