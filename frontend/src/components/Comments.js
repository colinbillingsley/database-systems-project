import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Comments = ({eventComments}) => {

    return (
        <div className="comments-section">
            <h3 className="main-heading">Comments</h3>
            <div className="leave-comment-section">
                <p>
                    <label htmlFor="comment">Leave a comment?</label>
                    <input type="text" name="comment" id="comment" placeholder="Add a comment about the event..."/>
                </p>
            </div>
            <ul className="comments-list">
                {eventComments.length === 0
                ? <p className="no-data">No comments for event found.</p>
                : eventComments.map(comment => {
                    return (
                        <li className="comment-container">
                            <div className="comment-header">
                                <p className="comment-username">@{comment.username}</p>
                                <div className="comment-icons-container">
                                    <i className="comment-icon"><FontAwesomeIcon icon={faPenToSquare} /></i>
                                    <i className="comment-icon"><FontAwesomeIcon icon={faTrash} /></i>
                                </div>
                            </div>
                            <p className="user-comment">{comment.comment}</p>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Comments
