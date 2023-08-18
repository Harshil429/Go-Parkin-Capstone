import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./styles/payment.css";

const Payment = () => {
  return (
    <>
      <Navbar />
      <section class="card">
        <div class="container">
          <div class="card__box">
            <h2>Do payment</h2>
            <form name="card" class="forms">
              <label for="number">Card number</label>
              <input
                placeholder="1111-2222-3333-4444"
                type="text"
                maxlength="16"
                class="long-number forms__input forms__input--large"
              />
              <label for="name">Card name</label>
              <input
                type="text"
                name="name"
                placeholder="Tammy Wolfe"
                class="forms__input forms__input--large"
              />

              <div class="card__form__expiry">
                <label>Card expiry</label>
                <select class="month-select minimal forms__input forms__input--smal">
                  <option>Expiry Month</option>
                  <option selected>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <span>&nbsp; / &nbsp;</span>
                <select class="year-select  forms__input forms__input--small">
                  <option>Expiry Year</option>
                  <option selected>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                </select>
              </div>

              <div class="card__form__cvc">
                <label>Security number</label>
                <input
                  type="password"
                  maxlength="3"
                  placeholder="eg. 123"
                  class="forms__input forms__input--small"
                  name="cvc"
                  required
                />
              </div>
            </form>
            <button class="btn btn-outline-info btn--checkout click">
              Pay securely
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Payment;
