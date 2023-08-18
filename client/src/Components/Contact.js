import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { isAuthenticated } from "../auth/helper";
const Contact = () => {
  const [msg, setMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const user = isAuthenticated();

  const handleChange = (event) => {
    setMsg(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // sendContactMsg(msg, user.customer._id).then(() => {
    //   setSuccessMsg(true);
    // });
  };

  return (
    <>
      <Navbar />
      <section class="contact_us">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              {successMsg && (
                <div className="alert alert-success mt-3">
                  <h4>Your message send to the GoParkin team. Thank you!</h4>
                </div>
              )}

              <div class="contact_inner mt-4">
                <div class="row">
                  <div class="col-md-10">
                    <div class="contact_form_inner">
                      <div class="contact_field">
                        <h3>Contact Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!.
                        </p>
                        <textarea
                          class="form-control form-group"
                          placeholder="Message"
                          name="msg"
                          onChange={handleChange}
                        ></textarea>
                        <button
                          onClick={handleSubmit}
                          class="contact_form_submit"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="right_conatct_social_icon d-flex align-items-end">
                      <div class="socil_item_inner d-flex">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook-square"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div class="d-flex info_single align-items-center">
                    <i class="fa fa-address-book"></i>
                    <span>+1 123 456 789</span>
                  </div>
                  <div class="d-flex info_single align-items-center">
                    <i class="fa fa-envelope"></i>
                    <span>info@goparkin.com</span>
                  </div>
                  <div class="d-flex info_single align-items-center">
                    <i class="fa fa-map-marker"></i>
                    <span>
                      1000+ partners and 65+ Service city across India, USA,
                      Canada & UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
