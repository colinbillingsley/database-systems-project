import { useState } from "react";
import Events from "../components/Events";
import Nav from "../components/Nav";

const AllEvents = () => {
    const [userLevel, setUserLevel] = useState(1);

    return (
        <div className="All-events-container">
            <Nav userLevel={userLevel}/>
            <Events userLevel={userLevel}/>
        </div>
    )
}

export default AllEvents
