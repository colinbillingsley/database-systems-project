import { useState } from "react"

const Filters = ({filters, setFilters, filteredEvents, setFilteredEvents}) => {

    // add or remove filters when clicked on
    const handleFilterClick = (e) => {
        const id = document.getElementById(e.target.id);

        const isFilterInArray = filters.some(filter => filter.id === e.target.id);
        // add id to filters array if not in array already
        if (!isFilterInArray) {
            // add active class to id
            id.classList.add('active');

            // add id and value to filters array
            const tempObject = {
                id: null,
                value: null
            };
            tempObject.id = e.target.id;
            tempObject.value = e.target.textContent;

            setFilters([...filters, tempObject]);
        }
        
        // if filter already in array
        else {
            // remove the active class of id
            id.classList.remove('active');
            // remove id from filters array
            setFilters(filters.filter(filter => filter.id !== e.target.id));
            setFilteredEvents(filteredEvents.filter(event => event.category !== e.target.textContent || event.event_type !== e.target.textContent ))
        }
    };

    // clear all filters that are active
    const handleClearFilterClick = () => {
        // get every if in filters array and remove active class
        filters.forEach(filter => {
            document.getElementById(filter.id).classList.remove('active');
        });
        // set filters to empty array
        setFilters([])
    };

    return (
        <div className="filter-container">
            <div className="filter-heading-container">
                <h3>Filters</h3>
                <p onClick={handleClearFilterClick}>Clear All</p>
            </div>
            <ul className="filter-list">
                <li>
                    <p>Event Type:</p>
                    <ul className="filter-sublist">
                        <li id="1" className="filter-sublist-item" onClick={handleFilterClick}>Private</li>
                        <li id="2" className="filter-sublist-item" onClick={handleFilterClick}>RSO</li>
                        <li id="3" className="filter-sublist-item" onClick={handleFilterClick}>Public</li>
                    </ul>
                </li>
                <li>
                    <p>Event Categories:</p>
                    <ul className="filter-sublist">
                        <li id="4" className="filter-sublist-item" onClick={handleFilterClick}>Academic</li>
                        <li id="5" className="filter-sublist-item" onClick={handleFilterClick}>Art</li>
                        <li id="6" className="filter-sublist-item" onClick={handleFilterClick}>Career/Jobs</li>
                        <li id="7" className="filter-sublist-item" onClick={handleFilterClick}>Entertainment</li>
                        <li id="8" className="filter-sublist-item" onClick={handleFilterClick}>Fundraising</li>
                        <li id="9" className="filter-sublist-item" onClick={handleFilterClick}>Gaming</li>
                        <li id="10" className="filter-sublist-item" onClick={handleFilterClick}>Health</li>
                        <li id="11" className="filter-sublist-item" onClick={handleFilterClick}>Meeting</li>
                        <li id="12" className="filter-sublist-item" onClick={handleFilterClick}>Recreation/Exercise</li>
                        <li id="13" className="filter-sublist-item" onClick={handleFilterClick}>Service/Volunteer</li>
                        <li id="14" className="filter-sublist-item" onClick={handleFilterClick}>Social</li>
                        <li id="15" className="filter-sublist-item" onClick={handleFilterClick}>Sports</li>
                        <li id="16" className="filter-sublist-item" onClick={handleFilterClick}>Tech</li>
                        <li id="17" className="filter-sublist-item" onClick={handleFilterClick}>Uncategorized/Other</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Filters
