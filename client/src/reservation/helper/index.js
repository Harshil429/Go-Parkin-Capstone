import { API } from "../../backend";

export const createReservation = (reservationData) => {
  return fetch(`${API}/parking/book`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationData),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getAllParkingSpot = (userId) => {
  return fetch(`${API}/parking/booked/${userId}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
