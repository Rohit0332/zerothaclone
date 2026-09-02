import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5   border-top">
        <h1 className="fs-2 text-center">People</h1>
      </div>

      <div className="row p-5  mt-5  text-muted fs-6">
        <div className="col-6">
          <img
            src="Images\images\nithinKamath.jpg"
            style={{ width: "60%", borderRadius: "60%" }}
          />
          <h4 className="mt-5 "> Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>                                                
        <div className="col-6 p-5 text-center">
          <p>
            Nithin Kamath bootstrapped founded to India's largest broker to
            empower retails trader based on networth as per NSE.
          </p>
          <p>
            NSE broker factsheet Prevent unauthorised transactions in account
            Update your mobile numbers/email IDs with your stock brokers.
          </p>
          <p>
            Contribution inintiatives to empower retails trader a nd invest. Our
            fintech and incubators has invested in several fintech startups
            withn the goal the growing the indians capital traders.
          </p>
          <p> Tacterial Consulting Private Limited |</p>
          <p>
            {" "}
            Connect on
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Homepage
            </a>{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Trading
            </a>{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
