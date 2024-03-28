import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faStar, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../hooks/useAuthContext";

import Rating from "./Rating";

const Comments = ({eventComments, setEventComments, eventID, eventRating, setEventRating, setStarRating, mouseOverStars, mouseLeaveStars, onStarClick}) => {
    const [comment, setComment] = useState(``);
    const [isEditing, setIsEditing] = useState(false);
    const { user } = useAuthContext();

    // handle accept comment changes click
    const handleAcceptChanges = () => {
        setIsEditing(false);

        // send new changes to db
        console.log(comment);
    }

    // handle cancel comment changes click
    const handleCancelChanges = () => {
        setIsEditing(false);
    }

    // give the ability to edit the user's comment when clicked
    const handleEditClick = () => {
        setIsEditing(true);
    }

    // delete the user's comment
    const handleDeleteClick = () => {
        console.log("delete clicked")
    }

    // function to get the username from uid of each comment
    const getUsername = async () => {

    }

    // set the comment based on input
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    // (eventually will submit the comment and rating to the database)
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        console.log("rating: " + eventRating);
        console.log("comment: " + comment);
    }

    // format the timestamp to display how long ago it was created
    const timeAgo = (timestamp) => {
        const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);

        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);

        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);

        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    return (
        <div className="comments-section">
            <h3 className="main-heading">Reviews</h3>
            <div className="leave-comment-section">
                <form onSubmit={handleCommentSubmit}>
                    <div>
                        <label htmlFor="comment">Leave a rating and comment?</label>
                        <Rating
                        eventRating={eventRating}
                        setEventRating={setEventRating}
                        setStarRating={setStarRating}
                        mouseOverStars={mouseOverStars}
                        mouseLeaveStars={mouseLeaveStars}
                        onStarClick={onStarClick}
                        />
                        <input type="text" name="comment" id="comment" placeholder="Add a comment about the event..." onChange={handleCommentChange}/>
                    </div>
                </form>
            </div>
            <ul className="comments-list">
                {eventComments.length === 0
                ? <p className="no-data">No reviews for event found.</p>
                : eventComments.map(comment => {
                    // Determine the number of stars based on the rating
                    const stars = [];
                    for (let i = 0; i < comment.rating; i++) {
                        stars.push(<i><FontAwesomeIcon icon={faStar} style={{color: 'gold'}}/></i>); // Render star icon
                    }

                    return (
                        <li className="comment-container">
                            <div className="comment-timestamp">
                                
                            </div>
                            <div className="comment-header">
                                <div className="user-time">
                                    <p className="comment-username">@{comment.uid}</p>
                                    <p className="comment-time">{timeAgo(comment.timestamp)}</p>
                                </div>
                                {user.uid === comment.uid 
                                ?   <div className="comment-icons-container">
                                        {!isEditing
                                        ?   <div>
                                                <i onClick={handleEditClick} className="comment-icon"><FontAwesomeIcon icon={faPenToSquare} /></i>
                                                <i onClick={handleDeleteClick} className="comment-icon"><FontAwesomeIcon icon={faTrash} /></i>
                                            </div>
                                        :   <div>
                                                <i onClick={handleAcceptChanges} className="comment-icon"><FontAwesomeIcon icon={faCheck} /></i>
                                                <i onClick={handleCancelChanges} className="comment-icon"><FontAwesomeIcon icon={faXmark} /></i>
                                            </div>
                                        }
                                    </div>
                                : ''
                                }
                            </div>
                            <p>{stars}</p>
                            {isEditing
                            ? <textarea
                            name=""
                            cols="30"
                            rows="10"
                            onChange={handleCommentChange}
                            >{comment.text}</textarea>
                            : <p className="user-comment">{comment.text}</p>
                            }
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Comments
