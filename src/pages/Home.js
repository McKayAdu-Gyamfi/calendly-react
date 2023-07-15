import React from 'react'

const Home = () => {
  return (
    <div>
    <div className="container">
    <div className="row">
      <div className="col-6 my-md-3">
        <h1 className="fw-bolder display-2">Easy</h1>
        <h1 className="fw-bolder display-2">scheduling</h1>
        <h1 className="fw-bolder display-2">
          <span style={{ color: "blue" }}>ahead</span>
        </h1>
        <p className="my-md-4">
          Calendly is your hub for scheduling meetings
          <br />
          professionally and efficiently, eliminating the hassle of
          <br />
          back-and-forth emails so you can get back to work.
        </p>
        <div className="input-group col-6 ">
          <input
            className="shadow bg-body-tertiary"
            type="email"
            placeholder="Enter email here"
          />
          <button className="btn shadow btn-dark" type="button">
            Sign-up
          </button>
        </div>
        <div>
          <p className="text-secondary my-md-2">
            Create your free account. No credit card required.
          </p>
        </div>
      </div>
      <div className="col-6">
        <img src="./images/pic1.jpg" alt="" className="img-fluid" />
      </div>
    </div>
  </div>

  <div className="container-fluid bg-light my-5">
    <h1 className="text-center py-5">
      Simplified scheduling for more than
      <br />
      <span style={{ color: "blue" }}>10,000,000</span> users worldwide
    </h1>
    <div className="container">
      <div className="row pb-5 text-center">
        <div className="col-3">
          <img
            src="./images/dropbox_logoo.png"
            alt=""
            className=""
            width="150px"
          />
        </div>
        <div className="col-3">
          <img src="./images/ebay.png" alt="" className="" width="150px" />
        </div>
        <div className="col-3">
          <img
            src="./images/twilio_logoo.png"
            alt=""
            className=""
            width="150px"
          />
        </div>
        <div className="col-3">
          <img
            src="./images/zenefits.png"
            alt=""
            className=""
            width="150px"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="container my-5">
    <div className="row gy-3" style={{marginLeft: '60px'}}>
        <div className="col-md-4">
            <div>
              <span className="point">1.</span>
            </div>                
            <div>
              <hr className="vertical-line" style={{display: "inline-block", border:" none", borderRight: "2px solid rgb(207, 206, 206)", height: '190px', verticalAlign: "middle"}}/>
              <span style={{display: "inline-block", verticalAlign: "middle"}}>
                <h3>Create<br/>simple rules</h3>
                <p className="lead py-3"><strong>Let Calendly know your<br/>availability preferences and<br/>it'll do the work for you.</strong> </p>
              </span>
            </div>
        </div>
        <div className="col-md-4">
            <div>
              <span className="point">2.</span>
            </div>                
            <div>
              <hr className="vertical-line" style={{display: "inline-block", border: "none", borderRight: "2px solid rgb(207, 206, 206)", height: '190px', verticalAlign: "middle"}}/>
              <span style={{display: "inline-block", verticalAlign: "middle"}}>
                <h3>Share your<br/>link</h3>
                <p className="lead py-3"><strong>Send guests your Calendly<br/>link or embed it on your<br/>website.</strong> </p>
              </span>
            </div>
        </div>
        <div className="col-md-4">
            <div>
              <span className="point">3.</span>
            </div>                
            <div>
            <hr className="vertical-line" style={{display: "inline-block", border: "none", borderRight: "2px solid rgb(207, 206, 206)", height: '190px', verticalAlign: "middle"}}/>
              <span style={{display: "inline-block", verticalAlign: "middle"}}>
                <h3>Get booked</h3>
                <p className="lead py-3"><strong>They pick a time and the<br/>event is added to your<br/>calendar.</strong> </p>
              </span>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Home