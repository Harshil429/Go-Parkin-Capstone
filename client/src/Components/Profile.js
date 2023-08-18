import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

import NavBar from "./NavBar";

import { isAuthenticated } from "../auth/helper";

import "./styles/profile.css";
import { getUser, getUserVehicleInfo } from "../user/helper";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  const user = isAuthenticated();

  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    make: "",
    model: "",
    year: "",
    platNumber: "",
    email: "",
  });
  const [vehicleInfo, setVehicleInfo] = useState(false);

  const {
    firstName,
    lastName,
    contactNumber,
    email,
    model,
    make,
    platNumber,
    year,
  } = values;

  const preload = (userId) => {
    getUser(userId)
      .then((data) => {
        setValues((prevState) => {
          return {
            ...prevState,
            firstName: data.firstName,
            lastName: data.lastName,
            contactNumber: data.contactNumber,
            email: data.email,
          };
        });
      })
      .catch((err) => console.log(err, "error"));

    getUserVehicleInfo(userId).then((data) => {
      if (data.vehicleInfo) {
        setVehicleInfo(true);
        setValues((prevState) => {
          return {
            ...prevState,
            make: data.vehicle.make,
            model: data.vehicle.model,
            year: data.vehicle.year,
            platNumber: data.vehicle.platNumber,
          };
        });
      } else {
        setVehicleInfo(false);
      }
    });
  };

  useEffect(() => {
    preload(user.user._id);
  }, []);

  return (
    <>
      <NavBar />
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100 w-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px" }}
                      fluid
                    />
                    <MDBTypography tag="h6" className="text-black">
                      {firstName + " " + lastName}
                    </MDBTypography>
                  </MDBCol>

                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBRow className="pt-1">
                        <MDBCol size="4" className="mb-3">
                          <MDBTypography tag="h6">User Profile</MDBTypography>
                        </MDBCol>
                        <MDBCol size="8" className="mb-3">
                          <button
                            onClick={() => {
                              navigate("/edit/profile");
                            }}
                          >
                            Edit Profile
                          </button>
                        </MDBCol>
                      </MDBRow>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Full Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            {firstName} {lastName}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            {contactNumber}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {email}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="pt-1">
                        <MDBCol size="4" className="mb-3">
                          <MDBTypography tag="h6" className="mt-5">
                            Vehicle Info
                          </MDBTypography>
                        </MDBCol>

                        <MDBCol size="8" className="mb-3 mt-4">
                          <button
                            onClick={() => {
                              if (vehicleInfo) {
                                navigate("/edit/vehicle");
                              } else {
                                navigate("/add/vehicle");
                              }
                            }}
                          >
                            {vehicleInfo
                              ? "Edit Vehicle Info"
                              : "Add Vehicle Info"}
                          </button>
                        </MDBCol>
                      </MDBRow>
                      <hr className="mt-0 mb-4" />

                      {vehicleInfo ? (
                        <div>
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Make</MDBTypography>
                              <MDBCardText className="text-muted">
                                {make}
                              </MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Model</MDBTypography>
                              <MDBCardText className="text-muted">
                                {model}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">
                                Plat Number
                              </MDBTypography>
                              <MDBCardText className="text-muted">
                                {platNumber}
                              </MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Year</MDBTypography>
                              <MDBCardText className="text-muted">
                                {year}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                        </div>
                      ) : (
                        <MDBTypography
                          tag="h6"
                          className="bg-warning p-2 text-white"
                        >
                          User has not registerd vehicle information.
                        </MDBTypography>
                      )}
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
