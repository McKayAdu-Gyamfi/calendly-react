import React from "react";
import "../style.css";

const Enterprise = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center my-md-5">
          <h1 className="fw-bolder display-3">
            <span style={{ color: "blue" }}>Way more </span>than a
          </h1>
          <h1 className="fw-bolder display-3">scheduling link</h1>
          <p className="paragraph my-md-4 ">
            Standardize on the #1 scheduling platform and
            <br />
            deliver the power of Calendly across you entire
            <br />
            organization.
          </p>
          <div className="input-group col-6 but">
            <button className="btn2 shadow" type="button">
              Contact sales
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid banner">
        <div className="row">
          <div className="text-center text-invivo">
            <h2>
              <span style={{ color: "white" }}>
                Trusted by more than 50,000 of the
                <br />
                world's leading organizations
              </span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3 contain">
              <img src="./images/dropbox.png" width="80px" alt="..." />
              <h5 className="fw-bolder">
                <span style={{ color: "white" }}>Dropbox</span>
              </h5>
            </div>
            <div className="col-3 contain">
              <img src="./images/ebayblackwhite.png" width="110px" alt="..." />
            </div>
            <div className="col-2 contain">
              <img src="./images/visa.png" width="80px" alt="..." />
            </div>
            <div className="col-3 contain">
              <img src="./images/ebayblackwhite.png" width="110px" alt="..." />
            </div>
            <div className="col-1 contain">
              <img src="./images/dropbox.png" width="50px" alt="..." />
              <h5 className="fw-bolder">
                <span style={{ color: "white" }}>Dropbox</span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-4 last-container">
        <div className="card" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>Sales</span>
            </h5>
            <img src="./images/sales.png" className="card-img-top" alt="..." />
            <p className="card-text">
              Convert more leads and
              <br />
              prospects into meetings
              <br />
              and revenue. Easily book
              <br />
              demos and customer calls
              <br />
              without the back and forth.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>Customer success</span>
            </h5>
            <img
              src="./images/customer-success.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              Deliver better support
              <br />
              interactions and customer
              <br />
              consultations. Stay
              <br />
              connected with automated
              <br />
              reminders and follow-ups.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>Recruiting</span>
            </h5>
            <img
              src="./images/recruiting.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              Fill your candidate pipeline
              <br />
              and book more interviews
              <br />
              and recuiter screens with
              <br />
              easy, standardized
              <br />
              scheduling.
            </p>
          </div>
        </div>
      </div>

      <div className="input-group col-6 but py-3">
        <button className="btn2 shadow" type="button">
          Learn more
        </button>
      </div>

      <div className="row bottom-row my-md-4 py-5">
        <div className="col-md-4">
          <h2 className="fw-bold">Easy</h2>
          <h2 className="fw-bold">
            <span style={{ color: "blue" }}>ahead</span>
          </h2>
          <p className="text-secondary">
            We take the work out of connecting with others
            <br />
            so you can accomplish more
          </p>
          <div className="btn-group dropdown-btn">
            <button type="button" className="btn">
              English
            </button>
            <button
              type="button"
              className="btn dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="Spanish.html">
                  Spanish
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="French.html">
                  French
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Twi.html">
                  Twi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <h4 className="fw-bold">About</h4>
          <p className="text-secondary">About Calendly</p>
          <p className="text-secondary">Contact sales</p>
          <p className="text-secondary">Newsroom</p>
          <p className="text-secondary">Careers</p>
          <p className="text-secondary">Security</p>
        </div>
        <div className="col-md-3">
          <h4 className="fw-bold">Solutions</h4>
          <p className="text-secondary">Customer Success</p>
          <p className="text-secondary">Sales</p>
          <p className="text-secondary">Recruiting</p>
          <p className="text-secondary">Education</p>
          <p className="text-secondary">Marketing</p>
        </div>
        <div className="col-md-2">
          <h4 className="fw-bold">Popular Features</h4>
          <p className="text-secondary">Embed Calendly</p>
          <p className="text-secondary">Availability</p>
          <p className="text-secondary">Sending Notifications</p>
          <p className="text-secondary">Using Calendly Mobile</p>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
