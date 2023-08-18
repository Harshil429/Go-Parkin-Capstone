import React, { useState } from "react";
import "./styles/parkingdetail.css";
import logo from "./img/logo.png";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import DatePicker from "react-multi-date-picker";

const TimeFilter = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [value, onChange] = useState("10:00");
  return (
    <>
      <Navbar />
      <div className="detail_parking m-18">
        <div class="card">
          <div className="row">
            <div className="col-md-4">
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
            <div className="col-md-8">
              <div class="card-form">
                <h4>Select Date</h4>
                <div className="row mt-10">
                  <div className="col-md-7">
                    <Calendar
                      value={selectedDayRange}
                      onChange={setSelectedDayRange}
                      shouldHighlightWeekends
                    />
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TimeFilter;
