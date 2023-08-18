import React, { useEffect, useState } from "react";
import moment from "moment";
import { Space, Table, Tag } from "antd";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getAllParkingSpot } from "../reservation/helper";
import { isAuthenticated } from "../auth/helper";
const columns = [
  {
    title: "Booking No.",
    dataIndex: "serialNumber",
    key: "serialNumber",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Location Name",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Date of Booking ",
    dataIndex: "dateOfBooking",
    key: "dateOfBooking",
    render: (dateOfBooking) => moment(dateOfBooking).format("MMMM DD, YYYY"),
  },
  {
    title: "Entry Time",
    dataIndex: "entryTime",
    key: "entryTime",
    render: (entryTime) => moment(entryTime, "HH:mm").format("hh:mm A"),
  },
  {
    title: "Exit Time",
    dataIndex: "exitTime",
    key: "exitTime",
    render: (exitTime) => moment(exitTime, "HH:mm").format("hh:mm A"),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  //   {
  //     title: "Action",
  //     dataIndex: "action",
  //     key: "action",
  //     render: (text, record) => (
  //       <span>
  //         <button type="link">Edit</button>
  //         <button type="link">Delete</button>
  //       </span>
  //     ),
  //   },
];
const user = isAuthenticated();

const BookingList = () => {
  const [allBooking, setAllBooking] = useState([]);

  useEffect(() => {
    getAllParkingSpot(user.user._id)
      .then((d) => setAllBooking(d))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <NavBar />
      <h3 className="text-center">
        List of all {user.user.firstName}'s booking
      </h3>
      <Table columns={columns} dataSource={allBooking} size="middle" />

      <Footer />
    </>
  );
};
export default BookingList;
