import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Comments = ({eventComments}) => {

    const setComments = () => {
        const eventCommentsSection = document.querySelector('.event-comments');
        
        // comments exist
        if (eventComments) {
            eventComments.forEach(item => {
                // create comment container to hold all elements
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('comment-container');

                // create comment header element to hold username (and edit/delete if user comment)
                const commentHeader = document.createElement('div');
                commentHeader.classList.add('comment-header');

                // create username element
                const username = document.createElement('p');
                username.classList.add('comment-username');
                username.innerText = `@${item.username}`;

                // const icons = document.createElement('ul');
                // icons.classList.add('comment-icons');

                // const edit = document.createElement('li');
                // edit.classList.add('comment-edit');
                // edit.innerHTML = `Edit`

                // const deleteComment = document.createElement('li');
                // deleteComment.classList.add('comment-delete');
                // deleteComment.innerHTML = `Delete`

                // icons.appendChild(edit);
                // icons.appendChild(deleteComment);

                commentHeader.appendChild(username);
                // commentHeader.appendChild(icons);

                // create comment element
                const userComment = document.createElement('p');
                userComment.classList.add('user-comment');
                userComment.innerText = item.comment;

                // add comment header and the user comment to comment container
                commentContainer.appendChild(commentHeader);
                commentContainer.appendChild(userComment);
                
                // add comment container to event comment container
                eventCommentsSection.appendChild(commentContainer)
            });
        }
    }

    useEffect(() => {
        setComments();
    }, [eventComments])

    return (
        <div className="comments-section">
            <h3 className="main-heading">Comments</h3>
            <div className="leave-comment-section">
                <p>
                    <label htmlFor="comment">Leave a comment?</label>
                    <input type="text" name="comment" id="comment" placeholder="Add a comment about the event..."/>
                </p>
            </div>
            <div className="event-comments"></div>
        </div>
    )
}

export default Comments
