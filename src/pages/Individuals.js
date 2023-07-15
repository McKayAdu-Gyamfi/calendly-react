import React from "react";
import "../style.css";

const Individuals = () => {
  return (
    <div>
      
      <div className="container">
        <div className="row">
          <div className="col-6 my-md-3">
            <h1 className="fw-bolder display-2">The genius way</h1>
            <h1 className="fw-bolder display-2">
              to work <span style={{ color: "blue" }}>better</span>
            </h1>
            <p className="my-md-4">
              Calendly makes it easy to work smarter when you're
              <br />
              working solo. Meetings, sessions and apointments
              <br />
              become more efficient ways to achieve success and
              <br />
              accomplish goals.
            </p>
            <div className="input-group col-6 ">
              <button className="btn2 shadow" type="button">
                Sign-up for free
              </button>
            </div>
          </div>
          <div className="col-6">
            <img
              src="./images/Calendly-Recruiting.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6 my-md-5">
            <img src="./images/lady.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-6 my-md-5 paragraph">
            <div>
              <p className="text-secondary my-md-2">A CURATED CALENDAR</p>
            </div>
            <h3 className="fw-bolder">Book up efficiently</h3>
            <p className="my-md-4">
              When invitees select a meeting slot from your schedule, they
              <br />
              only see the times you're available, and only the length and
              <br />
              type of meeting you want to have. Your schedule fills up
              <br />
              efficiently, and everyone avoids excess email exchanges.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6 my-md-5">
            <div>
              <p className="text-secondary my-md-2">
                AUTOMATED NOTIFICATIONS & FOLLOW-UPS
              </p>
            </div>
            <h3 className="fw-bolder">
              Work like you have a<br />
              personal assistant
            </h3>
            <p className="my-md-4">
              Because Calendly automates administrativ tasks like
              <br />
              like sending reminder emails and follow-ups, you can focus on
              <br />
              the work that builds your business and brings customers
              <br />
              back for more.
            </p>
          </div>
          <div className="col-6 my-md-5">
            <img
              src="./images/bossu-checking-cell.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid konko">
        <div className="row">
            <div className="col-6 text-invivo">
                <h2>Find just-right plans<br/>for individuals and<br/>small teams</h2>
                <button type="button" className="btn btn-outline-dark">See our plans</button>
            </div>
        </div>
      </div>

      <div className="row bottom-row my-md-4">
        <div className="col-md-4">
            <h2 className="fw-bold">Easy</h2>
            <h2 className="fw-bold"><span style={{color: "blue"}}>ahead</span></h2>
            <p className="text-secondary">We take the work out of connecting with others<br/>so you can accomplish more</p>
            <div className="btn-group dropdown-btn">
                <button type="button" className="btn">English</button>
                <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="Spanish.html">Spanish</a></li>
                  <li><a className="dropdown-item" href="French.html">French</a></li>
                  <li><a className="dropdown-item" href="Twi.html">Twi</a></li>
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
export default Individuals;
