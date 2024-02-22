import { useState } from "react"

import Nav from "../components/Nav"
import Rso from "../components/Rso";

const RsoPage = () => {
    const [userLevel, setUserLevel] = useState(1);

    return (
        <div>
            <Nav userLevel={userLevel}/>
            <Rso />
        </div>
    )
}

export default RsoPage
