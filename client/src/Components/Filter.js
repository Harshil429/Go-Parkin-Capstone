import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filter = () => {
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDestination(value);
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your logic for handling the search goes here
        // You can pass the form data to a parent component for processing or trigger an API call.
    };


    return (
        <div className="filter-container">
            <form className="filter-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                        <label htmlFor="inputCity">Enter Your Destination</label>
                        <input
                            name="destination"
                            type="text"
                            className="form-control"
                            id="enterDestination"
                            placeholder="Enter your destination"
                            value={destination}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputCheckIn">Check In Date</label>
                        <DatePicker
                            id="checkInDate"
                            className="form-control"
                            selected={checkInDate}
                            onChange={(date) => setCheckInDate(date)}
                        />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputCheckOut">Check Out Date</label>
                        <DatePicker
                            id="checkOutDate"
                            className="form-control"
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                        />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputStartTime">Select Start Time</label>
                        <select
                            id="startTime"
                            className="form-control"
                            value={startTime}
                            onChange={handleStartTimeChange}
                            placeholder="Select Start Time"
                        >
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 AM">12:00 PM</option>
                            <option value="1:00 AM">1:00 PM</option>
                            <option value="2:00 AM">2:00 PM</option>
                            <option value="3:00 AM">3:00 PM</option>
                            <option value="4:00 AM">4:00 PM</option>
                            <option value="5:00 AM">5:00 PM</option>
                        </select>
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputEndTime">Select End Time</label>
                        <select
                            id="inputEndTime"
                            className="form-control"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            placeholder="Select End Time"
                        >
                            <option value="">Select End Time</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">12:30 PM</option>
                            <option value="1:00 AM">1:00 PM</option>
                            <option value="2:00 AM">2:00 PM</option>
                            <option value="3:00 AM">3:00 PM</option>
                            <option value="4:00 AM">4:00 PM</option>
                            <option value="5:00 AM">5:00 PM</option>

                        </select>
                    </div>
                </div>
                <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1 m-auto pb-4">
                        <label htmlFor="btnSubmit">&nbsp;</label>
                        <button
                            type="submit"
                            className="btn btn-primary tm-btn tm-btn-search text-uppercase"
                            id="btnSubmit"
                        >
                            Check Availability
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Filter;
