import { useState } from "react";
import Events from "../components/Events";

const AllEvents = () => {
    const [userLevel, setUserLevel] = useState(1);

    return (
        <div className="All-events-container">
            <Events userLevel={userLevel}/>
        </div>
    )
}

export default AllEvents
