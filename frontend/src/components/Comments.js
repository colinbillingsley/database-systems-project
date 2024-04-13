import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faStar, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../hooks/useAuthContext";
import { formatDistanceToNow } from 'date-fns';

import Rating from "./Rating";
import axios from "axios";

const Comments = ({eventComments, setEventComments, setComments, eventId, eventRating, setEventRating, setStarRating, mouseOverStars, mouseLeaveStars, onStarClick}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [text, setText] = useState(``);
    const [isEditing, setIsEditing] = useState(false);
    const { user } = useAuthContext();
    const [usernames, setUsernames] = useState({});

    // fetch all the usernames for each comment from event
    const fetchUsernames = async () => {
        const usernamesMap = {};
        // go through all the event comments
        for (const comment of eventComments) {
            try {
                // call the api to get the username via uid
                const response = await axios.get(`http://localhost:3500/user/api/user/${comment.uid}`);
                // set the map of usernames by having the key be the uid and value as username
                usernamesMap[comment.uid] = response.data.user.username;
            } catch (error) {
                console.log("Error fetching username:", error);
            }
        }
        setUsernames(usernamesMap);
    };

    // handle cancel creating a comment
    const handleCancel = (e) => {
        e.preventDefault();
        // reset input
        const input = document.querySelector('#comment');
        input.value = '';

        // reset other fields
        setText('');
        setEventRating(0);
        setStarRating();

        setError(false);
        setErrorMessage('');
    }

    // handle accept comment changes click
    const handleAcceptChanges = async (e) => {
        e.preventDefault();
        setIsEditing(false);

        // send new changes to db
        const event_id = parseInt(eventId);
        const uid = user.uid;
        const baseUrl = `http://localhost:3500/comment/api/update`;
        try {
            const response = await axios.patch(`${baseUrl}`, {text, event_id, uid});
            console.log("success updating comment");

            // go through and find the users comment and update the text
            const updatedComments = eventComments.map(comment => {
            if (comment.uid === uid) {
                return { ...comment, text };
            }
            return comment;
            });

            setEventComments(updatedComments);
        } catch (error) {
            console.log("error updating comment");
            console.log(error);
            return null;
        }
    }

    // handle cancel comment changes click
    const handleCancelChanges = () => {
        setIsEditing(false);
        setError(false);
        setErrorMessage('');
    }

    // give the ability to edit the user's comment when clicked
    const handleEditClick = () => {
        setIsEditing(true);
    }

    // delete the user's comment
    const handleDeleteClick = async (e) => {
        e.preventDefault();

        const baseUrl = `http://localhost:3500/comment/api/delete/${user.uid}/${eventId}`;
        try {
            const response = await axios.delete(`${baseUrl}`);
            console.log("comment deleted");
            // update the comments for the events to remove users comment
            const updatedComments = eventComments.filter(comment => comment.uid !== user.uid);

            // set the new comments of event
            setEventComments(updatedComments);

            // reset values in case
            setEventRating(0);
            setStarRating();
            setText("");
            setError(false);
            setErrorMessage('');
        } catch (error) {
            console.log(error);
        }
    }

    // set the comment based on input
    const handleReviewInputChange = (e) => {
        setText(e.target.value);
        setError(false);
        setErrorMessage('');
    }

    // set the comment based on input
    const handleCommentChange = (e) => {
        setText(e.target.value);
        setError(false);
        setErrorMessage('');
    }

    // submit new comment for event o the database
    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        // get each field
        const uid = user.uid;
        const event_id = parseInt(eventId);
        const rating = eventRating;
        const timestamp = new Date();
        
        // define the url
        const baseUrl = `http://localhost:3500/comment/api/create`;

        try {
            // call the api to insert new comment
            const response = await axios.post(`${baseUrl}`, {event_id, uid, text, rating, timestamp});
            console.log("success creating comment");
            
            // create new comment object with same inputs inserted in db
            const newComment = {
                event_id: event_id,
                uid: uid,
                text: text,
                rating: rating,
                timestamp: timestamp,
            };

            // insert the new comment into the event comments
            const updatedComments = [...eventComments, newComment];
            setEventComments(updatedComments);

            // reset review fields
            setText("");
            setEventRating(0);
        } catch (error) {
            setError(true);
            setErrorMessage(error.response.data.error);
            return null;
        }
    }

    // format the timestamp to display how long ago the comment was created
    const timeAgo = (timestamp) => {
        const distance = formatDistanceToNow(new Date(timestamp));
        return `${distance} ago`;
    }

    useEffect(() => {
        fetchUsernames();
    }, [eventComments])

    return (
        <div className="comments-section">
            <h3 className="main-heading">Reviews</h3>
            {!eventComments.some(comment => comment.uid === user.uid)
            ?   <div className="leave-comment-section">
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
                            <input type="text" name="comment" id="comment" placeholder="Add a comment about the event..." onChange={handleReviewInputChange}/>
                            <div className="review-buttons">
                                <button onClick={handleCancel}>Cancel</button>
                                <button onClick={handleCommentSubmit} type="submit">Comment</button>
                            </div>
                            {error
                                ?   <p className="error">{errorMessage}</p>
                                :   ''
                            }
                        </div>
                    </form>
                </div>
            :''
            }
            
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
                                    <p className="comment-username">@{usernames[comment.uid]}</p>
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
                            {user.uid === comment.uid && isEditing
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
