import { useEffect, useState } from "react";
import GoogleMaps from "./GoogleMap";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateEvent = () => {
    const [event_name, setEvent_Name] = useState('');
    const [event_host, setEvent_Host] = useState('');
    const [event_phone, setEvent_Phone] = useState('');
    const [event_email, setEvent_Email] = useState('');
    const [event_type, setEvent_Type] = useState('');
    const [category, setCategory] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState('');
    const [location_name, setLocation_Name] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const {user} = useAuthContext();

    useEffect(() => {
    })

    const getRsoId = async () => {
        const baseUrl = `http://localhost:3500/rso/api/rsos/name/${event_host}`;
        try {
            const response = await axios.get(baseUrl);
            return response.data.rsoId;
        } catch (error) {
            const createError = document.querySelector('.error');
            createError.innerHTML = error.response.data.error;
        }
    }

    // method to handle inserting a new event
    const insertEvent = async () => {
        const baseUrl = `http://localhost:3500/event/api/events`;

        if (eventDate.length > 0) {
            // Split the input date into month, day, and year components
            const [month, day, year] = eventDate.split('-');
            // Create a new Date object with the provided components
            const formattedDate = new Date(year, month - 1, day);

            // Check if the formattedDate is a valid date
            if (isNaN(formattedDate.getTime())) {
                console.error('Invalid date:', eventDate);
                return;
            }

            // Format the date as 'YYYY-MM-DD'
            var formattedDateString = formattedDate.toISOString().slice(0, 10);
        }

        try {
            const response = await axios.post(baseUrl, {time, desc, location_name, date: formattedDateString, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude});
            console.log("success inserting event");
            return response.data.eventId;
        } catch (error) {
            const createError = document.querySelector('.error');
            createError.innerHTML = error.response.data.error;
        }
    }

    const insertEventByType = async (event_id, event_type, rso_id) => {
        const baseUrl = `http://localhost:3500/event/api/event/type`;
        const created_by = user.uid;
        try {
            const response = await axios.post(baseUrl, {event_id, created_by, event_type, rso_id});
            console.log("Event type successfully inserted into DB")
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // method to handle when user cancels creating event
    // clears all the input
    const handleCancelClick = (e) => {
        e.preventDefault();
        const createEvent = document.querySelector('.create-event-wrapper');
        const textFields = document.querySelectorAll('.create-event-text-field');
        const selectFields = document.querySelectorAll('.create-event-select-field');

        // reset text fields
        textFields.forEach(field => {
            field.value = "";
        });

        selectFields.forEach(field => {
            field.value = field.options[0].value;
        });
        // hide the event menu
        createEvent.classList.add('hidden');
    }

    // method to activate process of inserting a new event into the db
    const handleCreateClick = async (e) => {
        e.preventDefault();

        try {
            // if RSO event
            if (event_type === 'RSO') {
                const rso_id = await getRsoId();
                // insert new event into Event table, and get the id
                if (rso_id) {
                    const event_id = await insertEvent();
                    // use the id and event type to insert into the correct event type table
                    await insertEventByType(event_id, event_type, rso_id);
                }
            }

            // if Public or Private
            else {
                // insert new event into Event table, and get the id
                const event_id = await insertEvent();
                // use the id and event type to insert into the correct event type table
                await insertEventByType(event_id, event_type, null);
            }
        } catch (error) {
            console.log("error inserting event into db via both Events Table and type Table");
            console.log(error);
        }
    }

    // set the name value and reset error text
    const handleEventNameChange = (e) => {
        const createError = document.querySelector('.error');
        setEvent_Name(e.target.value);
        createError.innerHTML = '';
    }
    // set the host value and reset error text
    const handleEventHostChange = (e) => {
        const createError = document.querySelector('.error');
        setEvent_Host(e.target.value);
        createError.innerHTML = '';
    }
    // set the description value and reset error text
    const handleEventDescChange = (e) => {
        const createError = document.querySelector('.error');
        setDesc(e.target.value);
        createError.innerHTML = '';
    }
    // set the location value and reset error text
    const handleEventLocationChange = () => {
        const createError = document.querySelector('.error');
        createError.innerHTML = '';
    }

    // set the category value and reset error text
    const handleEventCategoryChange = (e) => {
        const createError = document.querySelector('.error');
        setCategory(e.target.value);
        createError.innerHTML = '';
    }
    // set the type value and reset error text
    const handleEventTypeChange = (e) => {
        const createError = document.querySelector('.error');
        setEvent_Type(e.target.value);
        createError.innerHTML = '';
    }
    // set the date value and reset error text
    const handleEventDateChange = (e) => {
        const createError = document.querySelector('.error');
        setEventDate(e.target.value);
        createError.innerHTML = '';
    }
    // set the time value and reset error text
    const handleEventTimeChange = (e) => {
        const createError = document.querySelector('.error');
        setTime(e.target.value);
        createError.innerHTML = '';
    }
    // set the phone value and reset error text
    const handleEventPhoneChange = (e) => {
        const createError = document.querySelector('.error');
        setEvent_Phone(e.target.value);
        createError.innerHTML = '';
    }
    // set the email value and reset error text
    const handleEventEmailChange = (e) => {
        const createError = document.querySelector('.error');
        setEvent_Email(e.target.value);
        createError.innerHTML = '';
    }
    
    return (
        <div className="create-event">
            <div className="create-event-wrapper hidden">
                <div className="create-event-header">
                    <h2>Create Event</h2>
                    <p>Please fill out the information below to request to create an event.</p>
                    <hr />
                </div>

                <div className="create-event-main">
                    <form action="" method="POST">
                        {/* event name */}
                        <div className="form-section">
                            <label htmlFor="event-name">Event Name</label>
                            <input onChange={handleEventNameChange} className="create-event-text-field" type="text" name="event-name" id="event-name" placeholder="Enter event name" required/>
                        </div>

                        {/* event host */}
                        <div className="form-section">
                            <label htmlFor="event-host">Event Host</label>
                            <input onChange={handleEventHostChange} className="create-event-text-field" type="text" name="event-host" id="event-host" placeholder="Enter event host name/organization" required/>
                        </div>

                        {/* event description */}
                        <div className="form-section">
                            <label htmlFor="event-description">Event Description</label>
                            <textarea onChange={handleEventDescChange} className="create-event-text-field" name="event-description" id="event-description" rows="10" placeholder="Enter a description of the event..." required></textarea>
                        </div>

                        {/* select location */}
                        <div className="form-section">
                            <label htmlFor="event-location">Event location</label>
                            <GoogleMaps 
                                latitude={latitude}
                                setLatitude={setLatitude}
                                longitude={longitude}
                                setLongitude={setLongitude}
                                location_name={location_name}
                                setLocation_Name={setLocation_Name}
                                handleEventLocationChange={handleEventLocationChange}
                            />
                        </div>

                        <div className="create-event-in-line-section">
                            {/* category selection */}
                            <div className="form-section">
                                <label htmlFor="event-category">Event Category</label>
                                <select onChange={handleEventCategoryChange} className="create-event-select-field" name="event-category" id="event-category" required>
                                    <option disabled selected value> -- Select a Category  -- </option>
                                    <option value="Academic">Academic</option>
                                    <option value="Art">Art</option>
                                    <option value="Career/Jobs">Career/Jobs</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Fundraising">Fundraising</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Health">Health</option>
                                    <option value="Meeting">Meeting</option>
                                    <option value="Recreation/Exercise">Recreation/Exercise</option>
                                    <option value="Service/Volunteer">Service/Volunteer</option>
                                    <option value="Social">Social</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Uncategorized/Other">Uncategorized/Other</option>
                                </select>
                            </div>

                            {/* type selection */}
                            <div className="form-section">
                                <label htmlFor="event-type">Event Type</label>
                                <select onChange={handleEventTypeChange} className="create-event-select-field" name="event-type" id="event-type" required>
                                    <option disabled selected value> -- Select an Event Type  -- </option>
                                    <option value="Public">Public</option>
                                    <option value="Private">Private</option>
                                    <option value="RSO">RSO</option>
                                </select>
                            </div>
                        </div>

                        <div className="create-event-in-line-section">
                            {/* event date */}
                            <div className="form-section">
                                <label htmlFor="event-date">Event Date</label>
                                <input onChange={handleEventDateChange} className="create-event-text-field" type="text" name="event-date" id="event-date" placeholder="Example: DD-MM-YYYY" required/>
                            </div>

                            {/* time selection */}
                            <div className="form-section time-section">
                                <label htmlFor="event-time">Event Start Time</label>
                                <select onChange={handleEventTimeChange} className="create-event-select-field" name="event-time" id="event-time" required>
                                    <option disabled selected value> -- Select a Time  -- </option>
                                    <option value="00:00:00">12:00 am</option>
                                    <option value="1:00:00">1:00 am</option>
                                    <option value="2:00:00">2:00 am</option>
                                    <option value="3:00:00">3:00 am</option>
                                    <option value="4:00:00">4:00 am</option>
                                    <option value="5:00:00">5:00 am</option>
                                    <option value="6:00:00">6:00 am</option>
                                    <option value="7:00:00">7:00 am</option>
                                    <option value="8:00:00">8:00 am</option>
                                    <option value="9:00:00">9:00 am</option>
                                    <option value="10:00:00">10:00 am</option>
                                    <option value="11:00:00">11:00 am</option>
                                    <option value="12:00:00">12:00 pm</option>
                                    <option value="13:00:00">1:00 pm</option>
                                    <option value="14:00:00">2:00 pm</option>
                                    <option value="15:00:00">3:00 pm</option>
                                    <option value="16:00:00">4:00 pm</option>
                                    <option value="17:00:00">5:00 pm</option>
                                    <option value="18:00:00">6:00 pm</option>
                                    <option value="19:00:00">7:00 pm</option>
                                    <option value="20:00:00">8:00 pm</option>
                                    <option value="21:00:00">9:00 pm</option>
                                    <option value="22:00:00">10:00 pm</option>
                                    <option value="23:00:00">11:00 pm</option>
                                </select>
                                <p>Note: Events can only be hosted for an hour long. Therefore, your event end time is an hour from the selected start time.</p>
                            </div>
                        </div>

                        <div className="create-event-in-line-section">
                            {/* contact phone number */}
                            <div className="form-section">
                                <label htmlFor="event-phone-number">Contact Phone Number</label>
                                <input onChange={handleEventPhoneChange} className="create-event-text-field" type="text" name="event-phone-number" id="event-phone-number" placeholder="Example: 000-000-0000" required/>
                            </div>

                            {/* contact email */}
                            <div className="form-section">
                                <label htmlFor="event-email">Contact email</label>
                                <input onChange={handleEventEmailChange} className="create-event-text-field" type="text" name="event-email" id="event-email" placeholder="Example: abc@gmail.com" required/>
                            </div>
                        </div>

                        <p className="error"></p>

                        {/* create/cancel buttons */}
                        <div className="form-section btn-section">
                            <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                            <button className="create-btn" type="submit" onClick={handleCreateClick}>Create Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent
