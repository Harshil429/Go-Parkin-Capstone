import React from "react";
import "./styles/parkingdetail.css";
import logo from "./img/logo.png";
import Navbar from "./NavBar";
import Footer from "./Footer";

function ParkingDetail() {
  return (
    <>
      <Navbar />
      <div className="detail_parking m-18">
        <div class="card">
          <div className="row">
            <div className="col-md-6">
              <div class="card-features">
                <div class="card-feature">
                  <a className="d-flex mr-auto" href="#">
                    <img src={logo} alt="Site logo" width="50" />
                    <p
                      style={{
                        color: "#fecc4e",
                        fontSize: "10px",
                        marginLeft: "4px",
                        marginTop: "10px",
                      }}
                    >
                      GoParkin
                    </p>
                  </a>
                  <h3>GoParkin Onboarding</h3>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>40 min</span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fa fa-video-camera"></i>
                  <span>
                    Web conferencing details provided upon confirmation.
                  </span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fa fa-calendar"></i>
                  <span>7:00am - 7:40am, Tuesday, July 25, 2023</span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fa fa-globe"></i>
                  <span>Eastern Time - US & Canada</span>
                </div>
                <p className="mt-3">
                  Get GoParkin started with our support. A walk through the
                  features, and options - to craft a configuration most
                  beneficial to your organisation. It's 100% free.
                </p>
                <p className="mt-3">
                  Please use your business email address for registration.
                </p>
                <p className="mt-3">
                  If there is no time here that suits you, please message us at
                  contact-us@GoParkin.com
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card-form">
                <h4>Enter Details</h4>

                <form action="#">
                  <div class="form-item">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div class="form-item">
                    <label for="full-name">Full Name</label>
                    <input
                      type="full-name"
                      id="full-name"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div class="form-item">
                    <label for="companyName">Company Name</label>
                    <input
                      type="companyName"
                      id="companyName"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <button className="btn btn-primary " type="submit">
                    CREATE PARKING SPOT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ParkingDetail;
