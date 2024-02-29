import { useState } from "react"

import Nav from "../components/Nav"
import Rso from "../components/Rso";
import CreateRSO from "../components/CreateRSO";

const RsoPage = () => {
    const [userLevel, setUserLevel] = useState(2);

    return (
        <div>
            <Nav userLevel={userLevel}/>
            <Rso userLevel={userLevel}/>
            <CreateRSO />
        </div>
    )
}

export default RsoPage
