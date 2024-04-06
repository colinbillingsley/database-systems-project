import { useEffect, useState } from "react";
import GoogleMaps from "./GoogleMap";

const CreateEvent = () => {
    const [event_name, setEvent_Name] = useState('');
    const [event_host, setEvent_Host] = useState('');
    const [event_phone, setEvent_Phone] = useState('');
    const [event_email, setEvent_Email] = useState('');
    const [event_type, setEvent_Type] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        console.log(latitude);
        console.log(longitude);
    })

    const HandleCancelClick = (e) => {
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
                            <input className="create-event-text-field" type="text" name="event-name" id="event-name" placeholder="Enter event name" required/>
                        </div>

                        {/* event host */}
                        <div className="form-section">
                            <label htmlFor="event-host">Event Host</label>
                            <input className="create-event-text-field" type="text" name="event-host" id="event-host" placeholder="Enter event host name/organization" required/>
                        </div>

                        {/* event description */}
                        <div className="form-section">
                            <label htmlFor="event-description">Event Description</label>
                            <textarea className="create-event-text-field" name="event-description" id="event-description" rows="10" placeholder="Enter a description of the event..." required></textarea>
                        </div>

                        {/* select location */}
                        <div className="form-section">
                            <label htmlFor="event-location">Event location</label>
                            <GoogleMaps 
                                latitude={latitude}
                                setLatitude={setLatitude}
                                longitude={longitude}
                                setLongitude={setLongitude}
                            />
                        </div>

                        <div className="create-event-in-line-section">
                            {/* category selection */}
                            <div className="form-section">
                                <label htmlFor="event-category">Event Category</label>
                                <select className="create-event-select-field" name="event-category" id="event-category" required>
                                    <option disabled selected value> -- Select a Category  -- </option>
                                    <option value="academic">Academic</option>
                                    <option value="art">Art</option>
                                    <option value="career-jobs">Career/Jobs</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="fundraising">Fundraising</option>
                                    <option value="gaming">Gaming</option>
                                    <option value="health">Health</option>
                                    <option value="meeting">Meeting</option>
                                    <option value="recreation-exercise">Recreation/Exercise</option>
                                    <option value="service-volunteer">Service/Volunteer</option>
                                    <option value="social">Social</option>
                                    <option value="sports">Sports</option>
                                    <option value="tech">Tech</option>
                                    <option value="other">Uncategorized/Other</option>
                                </select>
                            </div>

                            {/* type selection */}
                            <div className="form-section">
                                <label htmlFor="event-type">Event Type</label>
                                <select className="create-event-select-field" name="event-type" id="event-type" required>
                                    <option disabled selected value> -- Select an Event Type  -- </option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="rso">RSO</option>
                                </select>
                            </div>
                        </div>

                        <div className="create-event-in-line-section">
                            {/* event date */}
                            <div className="form-section">
                                <label htmlFor="event-date">Event Date</label>
                                <input className="create-event-text-field" type="text" name="event-date" id="event-date" placeholder="Example: 01/01/24" required/>
                            </div>

                            {/* time selection */}
                            <div className="form-section time-section">
                                <label htmlFor="event-time">Event Start Time</label>
                                <select className="create-event-select-field" name="event-time" id="event-time" required>
                                    <option disabled selected value> -- Select a Time  -- </option>
                                    <option value="12am">12:00am</option>
                                    <option value="1am">1:00am</option>
                                    <option value="2am">2:00am</option>
                                    <option value="3am">3:00am</option>
                                    <option value="4am">4:00am</option>
                                    <option value="5am">5:00am</option>
                                    <option value="6am">6:00am</option>
                                    <option value="7am">7:00am</option>
                                    <option value="8am">8:00am</option>
                                    <option value="9am">9:00am</option>
                                    <option value="10am">10:00am</option>
                                    <option value="11am">11:00am</option>
                                    <option value="12pm">12:00pm</option>
                                    <option value="1pm">1:00pm</option>
                                    <option value="2pm">2:00pm</option>
                                    <option value="3pm">3:00pm</option>
                                    <option value="4pm">4:00pm</option>
                                    <option value="5pm">5:00pm</option>
                                    <option value="6pm">6:00pm</option>
                                    <option value="7pm">7:00pm</option>
                                    <option value="8pm">8:00pm</option>
                                    <option value="9pm">9:00pm</option>
                                    <option value="10pm">10:00pm</option>
                                    <option value="11pm">11:00pm</option>
                                </select>
                                <p>Note: Events can only be hosted for an hour long. Therefore, your event end time is an hour from the selected start time.</p>
                            </div>
                        </div>

                        <div className="create-event-in-line-section">
                            {/* contact phone number */}
                            <div className="form-section">
                                <label htmlFor="event-phone-number">Contact Phone Number</label>
                                <input className="create-event-text-field" type="text" name="event-phone-number" id="event-phone-number" placeholder="Example: 000-000-0000" required/>
                            </div>

                            {/* contact email */}
                            <div className="form-section">
                                <label htmlFor="event-email">Contact email</label>
                                <input className="create-event-text-field" type="text" name="event-email" id="event-email" placeholder="Example: abc@gmail.com" required/>
                            </div>
                        </div>

                        {/* create/cancel buttons */}
                        <div className="form-section btn-section">
                            <button className="cancel-btn" onClick={HandleCancelClick}>Cancel</button>
                            <button className="create-btn" type="submit">Create Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent
