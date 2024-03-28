import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import RSOCard from "./RSOCard";

const Rso = ({userLevel}) => {
    const [myRsos, setMyRsos] = useState([]);
    const [activeRsos, setActiveRsos] = useState([]);
    const [inactiveRsos, setInactiveRsos] = useState([]);

    // open create rso menu when create rso is clicked
    const RSOClick = () => {
        const createRSO = document.querySelector('.create-rso-wrapper');
        createRSO.classList.remove('hidden');
    }

    useEffect(() => {

    },[])

    return (
        <div className="rso-container">
            <div className="rsos-heading-container">
                <h2 className="rso-main-heading">RSOs at [my University]</h2>
                {/* user is not student, they can create rso */}
                {userLevel !== 0 ? <button className="btn" onClick={RSOClick}>Create RSO</button> : ''}
            </div>

            <div className="my-rsos-content-container">
                <h2 className="rso-heading">My RSOs</h2>
                <div className="my-rsos-cards-container">
                    <ul className="list-of-my-rsos">
                            {/* check if there's any events in database */}
                            {(myRsos.length === 0) 
                                // if no rsos found, display message
                                ? 
                                <li>
                                    <p className="no-data">You are not a part of any RSOs.</p>
                                </li> 
                                // if rsos found, display all rsos
                                :
                                myRsos.map((rso, index) => {
                                    // format rso name to be placed in URL
                                    const trimmedName = rso.name.trim();
                                    const formattedName = trimmedName.replace(/\s+/g, '-');

                                    return (
                                        <li className="rso-item">
                                            <Link to={`/rsos/${rso.id}/${formattedName}`}>
                                                <RSOCard rso={rso}/>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
            
            <div className="active-rsos-content-container">
                <h2 className="rso-heading">Active RSOs</h2>
                <div className="active-rsos-cards-container">
                    <ul className="list-of-active-rsos">
                        {/* check if there's any events in database */}
                        {(activeRsos.length === 0) 
                            // if no rsos found, display message
                            ? 
                            <li>
                                <p className="no-data">There are no active RSOs at your university at the moment.</p>
                            </li> 
                            // if rsos found, display all rsos
                            :
                            activeRsos.map((rso, index) => {
                                // format rso name to be placed in URL
                                const trimmedName = rso.name.trim();
                                const formattedName = trimmedName.replace(/\s+/g, '-');

                                return (
                                    <li className="rso-item">
                                        <Link to={`/rsos/${rso.id}/${formattedName}`}>
                                            <RSOCard rso={rso}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="inactive-rsos-content-container">
                <h2 className="rso-heading">Inactive RSOs</h2>
                <div className="inactive-rsos-cards-container">
                    <ul className="list-of-active-rsos">
                        {/* check if there's any events in database */}
                        {(inactiveRsos.length === 0) 
                            // if no rsos found, display message
                            ? 
                            <li>
                                <p className="no-data">There are no inactive RSOs at your university at the moment.</p>
                            </li> 
                            // if rsos found, display all rsos
                            :
                            inactiveRsos.map((rso, index) => {
                                // format rso name to be placed in URL
                                const trimmedName = rso.name.trim();
                                const formattedName = trimmedName.replace(/\s+/g, '-');

                                return (
                                    <li className="rso-item">
                                        <Link to={`/rsos/${rso.id}/${formattedName}`}>
                                            <RSOCard rso={rso}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rso
