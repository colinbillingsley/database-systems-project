import { useState } from "react"

import Nav from "./Nav"
import DayFilters from "./DayFilters";
import Filters from "./Filters";

const Events = () => {
    const [uniName, setUniName] = useState("UCF");
    const [dayFilter, setDayFilter] = useState("Day");
    const [dayFilterHeading, setDayFilterHeading] = useState("Today's Events");

    return (
        <div>
            <Nav />

            <div className="events-page-top">
                <h2 className="main-heading">Events at {uniName}</h2>
                <form>
                    <input type="text" name="searchbar" id="searchbar" placeholder="Search..."/>
                </form>
            </div>
            
            <div className="events-container">
                <div className="events-main-content">
                    <div className="day-filter-buttons-container">
                        <DayFilters dayFilter={dayFilter} setDayFilter={setDayFilter} setDayFilterHeading={setDayFilterHeading}/>
                    </div>
                    <h3 className="day-filter-heading">{dayFilterHeading}</h3>
                </div>

                <div className="events-side-content">
                    <Filters />
                </div>
            </div>
        </div>
    )
}

export default Events
