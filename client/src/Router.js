import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Filter from "./Components/Filter";
import Success from "./Components/Success";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Payment from "./Components/Payment";
import TimeFilter from "./Components/TimeFilter";
import Reservation from "./Components/Reservation";
import ParkingLotMap from "./Components/ParkingLotMap";
import ParkingDetail from "./Components/ParkingDetail";
import EditProfile from "./Components/EditProfile";
import AddVehicle from "./Components/AddVehicle";
import EditVehicle from "./Components/EditVehicle";

import { isAuthenticated } from "./auth/helper";
import ProtectedRoute from "./ProtectRoute";
import BookingList from "./Components/BookingList";

const user = isAuthenticated();

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute user={user}>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/map",
    element: (
      <ProtectedRoute user={user}>
        <ParkingLotMap />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProtectedRoute user={user}>
        <Contact />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute user={user}>
        <Payment />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reservation",
    element: (
      <ProtectedRoute user={user}>
        <Reservation />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute user={user}>
        <Admin />
      </ProtectedRoute>
    ),
  },

  {
    path: "/success",
    element: (
      <ProtectedRoute user={user}>
        <Success />
      </ProtectedRoute>
    ),
  },
  {
    path: "/timefilter",
    element: (
      <ProtectedRoute user={user}>
        <TimeFilter />
      </ProtectedRoute>
    ),
  },
  {
    path: "/parkingdetail",
    element: (
      <ProtectedRoute user={user}>
        <ParkingDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/filter",
    element: (
      <ProtectedRoute user={user}>
        <Filter />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit/profile",
    element: (
      <ProtectedRoute user={user}>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add/vehicle",
    element: (
      <ProtectedRoute user={user}>
        <AddVehicle />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit/vehicle",
    element: (
      <ProtectedRoute user={user}>
        <EditVehicle />
      </ProtectedRoute>
    ),
  },
  {
    path: "/list/booking",
    element: (
      <ProtectedRoute user={user}>
        <BookingList />
      </ProtectedRoute>
    ),
  },
]);
