const DayFilters = ({dayFilter, setDayFilter, setDayFilterHeading}) => {
    
    // when one of the day filters is clicked on
    const handleDayFilterClick = (e) => {
        // set the filter
        const text = e.target.innerHTML;
        setDayFilter(text);

        // set the heading of events
        switch(text) {
            case 'Day':
                setDayFilterHeading("Today's Events");
                break;
            case 'Week':
                setDayFilterHeading("This Week's Events");
                break;
            case 'Month':
                setDayFilterHeading("This Month's Events");
                break;
            case 'Year':
                setDayFilterHeading("This Year's Events");
                break;
            default:
                setDayFilterHeading("All Events")
                break;
        }
    }

    return (
        <div className="day-filters-container">
            <ul className="day-filters-list">
                <li>
                    <button onClick={handleDayFilterClick} className={dayFilter === 'Day' ? 'active' : ''}>Day</button>
                </li>
                <li>
                    <button onClick={handleDayFilterClick} className={dayFilter === 'Week' ? 'active' : ''}>Week</button>
                </li>
                <li>
                    <button onClick={handleDayFilterClick} className={dayFilter === 'Month' ? 'active' : ''}>Month</button>
                </li>
                <li>
                    <button onClick={handleDayFilterClick} className={dayFilter === 'Year' ? 'active' : ''}>Year</button>
                </li>
            </ul>
        </div>
    )
}

export default DayFilters
