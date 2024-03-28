import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({eventRating, setEventRating, setStarRating, mouseOverStars, mouseLeaveStars, onStarClick}) => {
    
    return (
        <div className="rate-section">
            <ul className="stars" onMouseLeave={mouseLeaveStars}>
                <li id="star1" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                <li id="star2" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                <li id="star3" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                <li id="star4" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
                <li id="star5" className="star-item white" onMouseOver={mouseOverStars} onClick={onStarClick}><FontAwesomeIcon icon={faStar} size="xl" /></li>
            </ul>
        </div>
    )
}

export default Rating
