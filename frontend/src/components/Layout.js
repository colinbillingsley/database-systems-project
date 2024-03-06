import { Outlet } from "react-router-dom"
import { useState } from "react";

import Nav from "./Nav"

const Layout = () => {
    const [userLevel, setUserLevel] = useState(2);

    return (
        <div>
            <Nav userLevel={userLevel}/>
            <Outlet userLevel={userLevel}/>
        </div>
    )
}

export default Layout
