import React from 'react';
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <div>
    <div className="container">
    <div className="row">
      <div className="col-6 my-md-3">
        <h1 className="fw-bolder display-3"><span style={{color: "blue"}}>Power up </span><span style={{color: "rgb(33, 33, 82)"}}>your</span></h1>
        <h1 className="fw-bolder display-3"><span style={{color: "rgb(33, 33, 82)"}}>teams</span></h1>
        <p className="my-md-4">
          Calendly gives you control over team scheduling with a,<br />
          standardized, scalable process. It's seccure, easy to<br />
          manage, and integrate with your team's<br/>
          fvorite tools, so you can get everyone working as<br/>
          efficiently and effectively as possible.
        </p>
        <div className="btnContainer">
          <button className="button1 butt">Start for free</button>
          <button className="button2 butt">Contact Sales</button>
        </div>
       </div>
       <div className="col-6 my-md-4">
          <img src="./images/desola-lanre.jpg" alt="" className="img-fluid"/>
       </div>
    </div>
  </div>

  <div className="py-5">
    <h1 className="text-center fw-bold" style={{color: "rgb(33, 33, 82)"}}>Streamline tasks, extend team<br/>reach</h1>
  </div>

  <div className="row">
    <div className="col-6 my-md-5 mx-md-4">
       <img src="./images/good-faces.jpg" alt="" className="img-fluid" width="600px"/>
    </div>
    <div className="col-5 my-md-5 paragraph">
     <div>
         <p className="my-md-2">
             <span style={{color: "blue"}}>AUTOMATED ASSIGNMENT</span>
         </p>
       </div>
     <h3 className="fw-bolder">Control how your team gets<br/>booked</h3>
     <p className="my-md-4">
       With Calendly, you can offer session that are a few minutes<br />
       only see the times you're available, and only the length and<br />
       type of meeting you want to have. Your schedule fills up<br/>
       efficiently, and everyone avoids excess email exchanges.
     </p>
    </div>
 </div>

  <div className="row text-center">
    <p className="my-md-2 fw-bold">
      <span style={{color: "blue"}}>SOLUTIONS</span>
  </p>
  <h1 className="text-center fw-bold" style={{color: "rgb(33, 33, 82)"}}>The right Calendly for the work you do</h1>
  </div>

  <div className="row py-4 card-container">
    <div className="card shadow" style={{width: '18rem', padding: '1px', margin: '10px'}}>
      <img src="./images/group-study.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sales</h5>
        <p className="card-text">Get you best leads faster</p>
      </div>
      <div className="card-body">
        <Link href="#" className="card-link">Learn more</Link>
      </div>
    </div>
    <div className="card shadow" style={{width: '16rem', padding: '1px', margin: '10px'}}>
      <img src="./images/rasta-smile.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sales</h5>
        <p className="card-text">Less emailing, more closing</p>
      </div>
      <div className="card-body">
        <Link href="#" className="card-link">Learn more</Link>
      </div>
    </div>
    <div className="card shadow" style={{width: '18rem', padding: '1px', margin: '10px'}}>
      <img src="./images/racking-the-brain.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sales</h5>
        <p className="card-text">Connecct with customers when<br/>it matters</p>
      </div>
      <div className="card-body">
        <Link href="#" className="card-link">Learn more</Link>
      </div>
    </div>
    <div className="card shadow" style={{width: '18rem', padding: '1px', margin: '10px'}}>
      <img src="./images/study-group.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sales</h5>
        <p className="card-text">Boost student success</p>
      </div>
      <div className="card-body">
        <Link href="#" className="card-link">Learn more</Link>
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
              <li><Link className="dropdown-item" href="#">Spanish</Link></li>
              <li><Link className="dropdown-item" href="#">French</Link></li>
              <li><Link className="dropdown-item" href="#">Twi</Link></li>
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
  )
}

export default Teams;