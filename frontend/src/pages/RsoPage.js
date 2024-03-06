import { useState } from "react"

import Rso from "../components/Rso";
import CreateRSO from "../components/CreateRSO";

const RsoPage = () => {
    const [userLevel, setUserLevel] = useState(2);

    return (
        <div>
            <Rso userLevel={userLevel}/>
            <CreateRSO />
        </div>
    )
}

export default RsoPage
