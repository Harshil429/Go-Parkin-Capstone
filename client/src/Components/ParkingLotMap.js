import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBuilding } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ParkingSlot = ({ booked, onClick }) => {
  return (
    <div
      className={`parking-slot ${booked ? "booked" : "vacant"}`}
      onClick={onClick}
    >
      {booked ? (
        <FontAwesomeIcon icon={faCar} className="car-icon" />
      ) : (
        <FontAwesomeIcon icon={faCar} className="car-icon vacant-icon" />
      )}
    </div>
  );
};

const DashedLine = () => {
  return <div className="dashed-line" />;
};

const ParkingBuilding = () => {
  return (
    <div className="parking-building">
      <FontAwesomeIcon icon={faBuilding} className="building-icon" />
    </div>
  );
};

const ParkingLotMap = () => {
  const [slots, setSlots] = useState(Array(30).fill(false)); // Initialize with 30 vacant slots

  const handleSlotClick = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index] = !updatedSlots[index];
    setSlots(updatedSlots);
  };

  return (
    <>
      <NavBar />
      <h1 className="text-center mt-5 mb-0">Select your parking spot</h1>
      <div className="parking-lot-map mt-0">
        <div className="left-section">
          <div className="left-buildings">
            <ParkingBuilding />
            <ParkingBuilding />
            <ParkingBuilding />
          </div>
        </div>
        <div className="parking-lot">
          <div className="parking-row">
            {slots.slice(0, 5).map((booked, index) => (
              <ParkingSlot
                key={index}
                booked={booked}
                onClick={() => handleSlotClick(index)}
              />
            ))}
          </div>
          <DashedLine />
          <div className="parking-row">
            {slots.slice(5, 10).map((booked, index) => (
              <ParkingSlot
                key={index + 5}
                booked={booked}
                onClick={() => handleSlotClick(index + 5)}
              />
            ))}
          </div>

          <div className="gap" />

          <div className="parking-row">
            {slots.slice(10, 15).map((booked, index) => (
              <ParkingSlot
                key={index + 10}
                booked={booked}
                onClick={() => handleSlotClick(index + 10)}
              />
            ))}
          </div>
          <DashedLine />

          <div className="parking-row">
            {slots.slice(15, 20).map((booked, index) => (
              <ParkingSlot
                key={index + 15}
                booked={booked}
                onClick={() => handleSlotClick(index + 15)}
              />
            ))}
          </div>
          <div className="gap" />

          <div className="parking-row">
            {slots.slice(20, 25).map((booked, index) => (
              <ParkingSlot
                key={index + 20}
                booked={booked}
                onClick={() => handleSlotClick(index + 20)}
              />
            ))}
          </div>

          <DashedLine />
          <div className="parking-row">
            {slots.slice(25, 30).map((booked, index) => (
              <ParkingSlot
                key={index + 25}
                booked={booked}
                onClick={() => handleSlotClick(index + 25)}
              />
            ))}
          </div>
          <div class="exit exit--back" />
        </div>

        <div className="right-section">
          <div className="right-buildings">
            <ParkingBuilding />
            <ParkingBuilding />
            <ParkingBuilding />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParkingLotMap;
