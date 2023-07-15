import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="container-fluid header">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid mt-3">
                <img src="./images/logo.png" alt="" width="150px" 
                onClick={(e) => {
                    navigate("/");
                  }}
                />

                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
                    <li
                      className="nav-item"
                      onClick={(e) => {
                        navigate("/individuals");
                      }}
                    >
                      <Link
                        className="nav-link active fs-5 mx-md-4 "
                        href="./individuals.html"
                      >
                        <strong className=" hightlight-text">
                          Individuals
                        </strong>
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={(e) => {
                        navigate("/teams");
                      }}
                    >
                      <Link
                        className="nav-link active fs-5 mx-md-4"
                        href="./teams.html"
                      >
                        <strong className=" hightlight-text">Teams</strong>
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={(e) => {
                        navigate("/enterprise");
                      }}
                    >
                      <Link
                        className="nav-link active fs-5 mx-md-4"
                        href="./enterprise.html"
                      >
                        <strong className=" hightlight-text">Enterprise</strong>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
