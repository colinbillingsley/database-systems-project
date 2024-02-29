import { useState } from "react"

const Rso = () => {
    const [myRsos, setMyRsos] = useState([]);
    const [activeRsos, setActiveRsos] = useState([]);

    return (
        <div className="rso-container">
            <div className="my-rsos-content-container">
                <h2 className="main-heading">My RSOs</h2>
                <div className="my-rsos-cards-container">
                    {myRsos.length === 0 ? <div className="no-joined-rsos"><p>You are not a part of any RSOs.</p></div> : ''}
                </div>
            </div>
            <div className="active-rsos-content-container">
                <h2 className="main-heading">Active RSOs</h2>
                <div className="active-rsos-cards-container">
                    {activeRsos.length === 0 ? <div className="no-active-rsos"><p>There are currently no RSOs active at your university.</p></div> : ''}
                </div>
            </div>
        </div>
    )
}

export default Rso
