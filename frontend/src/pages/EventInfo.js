import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Comments from "../components/Comments";
import EventContent from "../components/EventContent";
import axios from "axios";

const tempComment = {
    uid: 4,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsam provident dicta amet fugiat. Quaerat maxime eligendi eveniet, nam similique modi inventore est placeat culpa molestias, fugiat dolores. Maiores, nihil!
    Voluptas, quasi saepe? Magnam modi velit unde eaque distinctio sit blanditiis voluptate voluptas hic, doloremque consectetur vitae cum sed nobis quae cumque, repellat ratione nostrum fugit quos totam facere minus.`,
    rating: 3,
    timestamp: '2024-03-02 03:14:07'
}

const EventInfo = () => {
    const [eventInfo, setEventInfo] = useState({});
    const [eventComments, setEventComments] = useState([tempComment]);
    const [eventRating, setEventRating] = useState(0);
    const { event_id: eventId } = useParams();

    const getEvent = async () => {
        await axios.get(`http://localhost:3500/event/api/events/${parseInt(eventId)}`)
            .then((response) => {
                const event = response.data.event;
                setEventInfo(event);
            })
    }

    useEffect(() => {
        getEvent();
        setStarRating();
    }, [])

    // set the color of stars based on current rating when entering event page
    const setStarRating = () => {
        if (eventRating === 0) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'white';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'white';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 1) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'white';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 2) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 3) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 4) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        } else {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'gold';
        }
    }

    // color stars white or gold accordingly when hovering over them
    const mouseOverStars = (e) => {
        if (e.target.id === "star1") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'white';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star2") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star3") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star4") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        } else if (e.target.id === "star5"){
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'gold';
        }
    }

    // reset star coloring to event rating when leaving stars
    const mouseLeaveStars = () => {
        if (eventRating === 0) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'white';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'white';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 1) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'white';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 2) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 3) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (eventRating === 4) {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        } else {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'gold';
        }
    }

    // set eventRating and set stars colors to gold or white accordingly
    const onStarClick = (e) => {
        if (e.target.id === "star1") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            setEventRating(1);
            const star2 = document.querySelector("#star2");
            star2.style.color = 'white';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star2") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            setEventRating(2);
            const star3 = document.querySelector("#star3");
            star3.style.color = 'white';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star3") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            setEventRating(3);
            const star4 = document.querySelector("#star4");
            star4.style.color = 'white';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star4") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            setEventRating(4);
            const star5 = document.querySelector("#star5");
            star5.style.color = 'white';
        }
        else if (e.target.id === "star5") {
            const star1 = document.querySelector("#star1");
            star1.style.color = 'gold';
            const star2 = document.querySelector("#star2");
            star2.style.color = 'gold';
            const star3 = document.querySelector("#star3");
            star3.style.color = 'gold';
            const star4 = document.querySelector("#star4");
            star4.style.color = 'gold';
            const star5 = document.querySelector("#star5");
            star5.style.color = 'gold';
            setEventRating(5);
        }
    } 

    return (
        <div className="event-info">
            <div className="event-info-container">
                <div className="event-info-left-content">
                    {eventInfo && <EventContent eventInfo={eventInfo}/>}
                    {eventComments && <Comments 
                    eventComments={eventComments} 
                    setEventComments={setEventComments}
                    eventID={eventInfo.event_id}
                    eventRating={eventRating}
                    setEventRating={setEventRating}
                    setStarRating={setStarRating}
                    mouseOverStars={mouseOverStars}
                    mouseLeaveStars={mouseLeaveStars}
                    onStarClick={onStarClick}
                    />}
                </div>

                <div className="event-info-right-content">
                    <div className="location-section">
                        <h3>Location</h3>
                        <p>{eventInfo.location}</p>
                    </div>
                    <hr />
                    <div className="contact-section">
                        <h3>Contact Info</h3>
                        <p>{eventInfo.event_host}</p>
                        <p>{eventInfo.event_email}</p>
                        <p>{eventInfo.event_phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventInfo
