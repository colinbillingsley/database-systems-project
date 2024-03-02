import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Comments from "../components/Comments";
import EventContent from "../components/EventContent";

// temp date for styling
const date = new Date();

// temp event for styling
const tempEvent = {
    id:'0',
    name: 'UCF Database Project',
    host: 'UCF',
    location: 'L3Harris Engineering Center Room 115',
    category: 'Tech',
    time: '3pm',
    date: `${date.toDateString()}`,
    type: 'Public',
    email: 'example@gmail.com',
    phone: '123-123-4567',
    description: `You are asked to implement a web-based application that solves the problems. Any student
    (user) may register with the application to obtain a user ID and a password. There are three
    user levels: super admin who creates a profile for a university (name, location, description,
    number of students, pictures, etc.), admin who owns an RSO and may host events, and student
    who uses the application to look up information about the various events.`
}

const tempComment = {
    id: 0,
    username: 'colinbillingsley',
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt voluptates voluptatibus enim praesentium deserunt quidem, consequuntur magni, laboriosam dolorem fuga explicabo. Nesciunt qui accusantium amet eaque voluptas dolorem dolorum!`
}

let tempRating = 0

const EventInfo = () => {
    const [eventInfo, setEventInfo] = useState('');
    const [eventComments, setEventComments] = useState([]);
    const [userLevel, setUserLevel] = useState(2);
    const [eventRating, setEventRating] = useState(tempRating);

    useEffect(() => {
        // get event data and set to eventInfo
        setEventInfo(tempEvent);
        // get comment data and set to eventComments
        setEventComments(eventComments => [...eventComments, tempComment]);
        // set rating based on current rating of event by user
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
            tempRating = 1;
            setEventRating(tempRating);
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
            tempRating = 2;
            setEventRating(tempRating);
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
            tempRating = 3;
            setEventRating(tempRating);
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
            tempRating = 4;
            setEventRating(tempRating);
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
            tempRating = 5;
            setEventRating(tempRating);
        }
    } 

    return (
        <div className="event-info">
            <div className="event-info-container">
                <div className="event-info-left-content">
                    <EventContent eventInfo={eventInfo}/>
                    <Comments eventComments={eventComments}/>
                </div>

                <div className="event-info-right-content">
                    <div className="location-section">
                        <h3>Location</h3>
                        <p>{eventInfo.location}</p>
                    </div>
                    <hr />
                    <div className="contact-section">
                        <h3>Contact Info</h3>
                        <p>{eventInfo.host}</p>
                        <p>{eventInfo.email}</p>
                        <p>{eventInfo.phone}</p>
                    </div>
                    <hr />
                    <div className="rate-section">
                        <h3>Rate Event</h3>
                        <ul className="stars" onMouseLeave={mouseLeaveStars}>
                            <li id="star1" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li id="star2" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li id="star3" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li id="star4" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li id="star5" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventInfo
