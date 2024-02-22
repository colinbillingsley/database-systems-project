import GoogleMap from "./GoogleMap";

const CreateEvent = () => {

    const HandleCancelClick = (e) => {
        e.preventDefault();
        const createEvent = document.querySelector('.create-event-wrapper');
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
                            <label htmlFor="event-name">Event Name:</label>
                            <input type="text" name="event-name" id="event-name" placeholder="Enter event name"/>
                        </div>

                        {/* event description */}
                        <div className="form-section">
                            <label htmlFor="event-description">Event Description:</label>
                            <textarea name="event-description" id="event-description" rows="10" placeholder="Enter a description of the event..."></textarea>
                        </div>

                        <div className="create-event-in-line-section">
                            {/* category selection */}
                            <div className="form-section">
                                <label htmlFor="event-category">Select event category</label>
                                <select name="event-category" id="event-category">
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
                                <label htmlFor="event-type">Select event type</label>
                                <select name="event-type" id="event-type">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="rso">RSO</option>
                                </select>
                            </div>
                        </div>

                        <div className="create-event-in-line-section">
                            {/* event date */}
                            <div className="form-section">
                                <label htmlFor="event-date">Enter event date</label>
                                <input type="text" name="event-date" id="event-date" placeholder="Enter event date"/>
                            </div>

                            {/* time selection */}
                            <div className="form-section time-section">
                                <label htmlFor="event-time">Select event start time</label>
                                <select name="event-time" id="event-time">
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
                                <label htmlFor="event-phone-number">Enter contact phone number</label>
                                <input type="text" name="event-phone-number" id="event-phone-number" placeholder="Enter contact phone number"/>
                            </div>

                            {/* contact email */}
                            <div className="form-section">
                                <label htmlFor="event-email">Enter contact email</label>
                                <input type="text" name="event-email" id="event-email" placeholder="Enter contact email"/>
                            </div>
                        </div>

                        {/* select location */}
                        <div className="form-section">
                            <label htmlFor="event-location">Select event location</label>
                            <GoogleMap />
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
