import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// images
import dot from "./img/dots-3.png";
import img1 from "./img/tm-img-01.jpg";
import img2 from "./img/tm-img-02.jpg";
import img3 from "./img/tm-img-03.jpg";
import img4 from "./img/tm-img-04.jpg";
import img5 from "./img/tm-img-05.jpg";
import img6 from "./img/tm-img-06.jpg";
import img7 from "./img/tm-img-07.jpg";
import Footer from "./Footer";

const Home = () => {
  const [startcheckInDate, setStartcheckInDate] = useState(new Date());
  const [startcheckOutDate, setStartcheckOutDate] = useState(new Date());
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="tm-main-content" id="top">
        <NavBar />

        <div className="tm-page-wrap mx-auto">
          <section className="tm-banner ">
            <div className="tm-container-outer tm-banner-bg">
              <div className="container justify-content-center">
                <div className="row tm-banner-row tm-banner-row-header">
                  <div className="col-xs-12">
                    <div className="tm-banner-header">
                      <h1 className="text-uppercase tm-banner-title">
                        Let's begin
                      </h1>
                      <img src={dot} alt="Dots" />
                      <p className="tm-banner-subtitle">
                        We assist you to book the nearest and convinient parking
                        slot.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="tm-down-arrow-link"
                      >
                        <i className="fa fa-2x fa-angle-down tm-down-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tm-banner-overlay"></div>
              </div>
            </div>
          </section>

          <section className="p-5 tm-container-outer tm-bg-gray">
            <div className="container justify-content-center">
              <div className="row">
                <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
                  <h2 className="text-uppercase mb-4">
                    DON'T LET <strong>PARKING</strong> BE A HASSLE. RESERVE YOUR
                    SPOT TODAY!
                  </h2>
                  <p className="mb-4">
                    We offer a variety of parking options to meet your needs,
                    including short-term, daily, weekly, and monthly parking.
                    Whether you're traveling for business or leisure, you can
                    count on us to provide you with safe, secure, and convenient
                    parking.
                  </p>
                  <a
                    href="/reservation"
                    className="text-uppercase btn-primary tm-btn"
                  >
                    Click Here To Book Your Parking Spot
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="tm-container-outer" id="tm-section-2">
            <section className="tm-slideshow-section">
              <div className="tm-slideshow">
                <Slider {...settings}>
                  <img src={img1} alt="Image" />
                  <img src={img2} alt="Image" />
                  <img src={img3} alt="Image" />
                </Slider>
              </div>
              <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="">EARLY BIRD SPECIAL</h2>
                <p>
                  Advanced parking slot booking is a convenient and efficient
                  system that allows individuals to reserve parking spaces in
                  advance. This technology-driven approach has revolutionized
                  the way people park their vehicles, saving them time and
                  effort. One popular feature of advanced parking slot booking
                  systems is the "Early Bird Special." Let's explore this
                  concept in more detail.
                </p>
                <a
                  href="#"
                  className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                >
                  now $ 14.00 per day
                </a>
              </div>
            </section>
            <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse">
              <div className="tm-right tm-slideshow tm-slideshow-highlight">
                <Slider {...settings}>
                  <img src={img3} alt="Image" />
                  <img src={img1} alt="Image" />
                  <img src={img2} alt="Image" />
                </Slider>
              </div>

              <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                <h2 className="">FREQUENT PARKER REWARDS</h2>
                <p>
                  Frequent Parker Rewards programs are loyalty programs offered
                  by parking facilities to incentivize and reward regular
                  customers. These programs aim to foster customer loyalty,
                  encourage repeat business, and provide additional benefits to
                  frequent parkers. By offering various perks and rewards,
                  parking facilities can enhance the overall parking experience
                  and build strong, long-term relationships with their
                  customers.
                </p>
                <a
                  href="#"
                  className="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight"
                >
                  now $ 12.00 per day
                </a>
              </div>
            </section>
            <section className="tm-slideshow-section">
              <div className="tm-slideshow">
                <Slider {...settings}>
                  <img src={img2} alt="Image" />
                  <img src={img1} alt="Image" />
                  <img src={img3} alt="Image" />
                </Slider>
              </div>
              <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="">WEEKEND PARKING DEAL</h2>
                <p>
                  When it comes to weekend plans, finding a parking spot can
                  often be a daunting task. The last thing you want is to spend
                  precious time searching for parking or end up paying
                  exorbitant fees. Fortunately, advanced parking slot booking
                  has emerged as a convenient solution, allowing you to secure
                  your parking spot in advance and take advantage of attractive
                  weekend parking deals. In this article, we will explore the
                  benefits of advanced parking slot booking and how it can
                  enhance your weekend parking experience.
                </p>
                <a
                  href="#"
                  className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
                >
                  now $ 45.00 per day
                </a>
              </div>
            </section>
          </div>
          <div className="tm-container-outer" id="tm-section-3">
            <div className="tab-content clearfix">
              <div className="tab-pane fade show active" id="1a">
                <div className="tm-recommended-place-wrap">
                  <div className="tm-recommended-place">
                    <img
                      src={img6}
                      alt="Image"
                      className="img-fluid tm-recommended-img"
                    />
                    <div className="tm-recommended-description-box">
                      <h3 className="tm-recommended-title">LUTON AIRPORT</h3>
                      <p className="tm-text-highlight">MEET & GREET SERVICE</p>
                      <p className="tm-text-gray">
                        1 day to 5 days, 7/12/2021 till 8/11/2021,{" "}
                        <strong>price per day</strong>
                      </p>
                    </div>
                    <a href="#" className="tm-recommended-price-box">
                      <p className="tm-recommended-price">$25</p>
                      <p className="tm-recommended-price-link">Book Now</p>
                    </a>
                  </div>

                  <div className="tm-recommended-place">
                    <img
                      src={img7}
                      alt="Image"
                      className="img-fluid tm-recommended-img"
                    />
                    <div className="tm-recommended-description-box">
                      <h3 className="tm-recommended-title">LUTON AIRPORT</h3>
                      <p className="tm-text-highlight">VALUE PARKING</p>
                      <p className="tm-text-gray">
                        Regular price, <strong>price per day</strong>
                      </p>
                    </div>
                    <div id="preload-hover-img"></div>
                    <a href="#" className="tm-recommended-price-box">
                      <p className="tm-recommended-price">$60</p>
                      <p className="tm-recommended-price-link">Book Now</p>
                    </a>
                  </div>

                  <div className="tm-recommended-place">
                    <img
                      src={img5}
                      alt="Image"
                      className="img-fluid tm-recommended-img"
                    />
                    <div className="tm-recommended-description-box">
                      <h3 className="tm-recommended-title">OXFORD CIRCUS</h3>
                      <p className="tm-text-highlight">FLEXIBLE</p>
                      <p className="tm-text-gray">
                        15 days to 30 days, <strong>total price</strong>
                      </p>
                    </div>
                    <a href="#" className="tm-recommended-price-box">
                      <p className="tm-recommended-price">$45</p>
                      <p className="tm-recommended-price-link">Book Now</p>
                    </a>
                  </div>

                  <div className="tm-recommended-place">
                    <img
                      src={img4}
                      alt="Image"
                      className="img-fluid tm-recommended-img"
                    />
                    <div className="tm-recommended-description-box">
                      <h3 className="tm-recommended-title">OXFORD CIRCUS</h3>
                      <p className="tm-text-highlight">OUTDOOR PARKING</p>
                      <p className="tm-text-gray">
                        Regular price, <strong>price per day</strong>
                      </p>
                    </div>
                    <a href="#" className="tm-recommended-price-box">
                      <p className="tm-recommended-price">$78</p>
                      <p className="tm-recommended-price-link">Book Now</p>
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
                >
                  Show More Places
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
