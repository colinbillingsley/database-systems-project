const RSOCard = ({rso}) => {
    return (
        <div className="rso-card-container">
            <div className="rso-card-heading">
                <h2 className="rso-name">{rso.name}</h2>
                <p className="rso-type">{rso.type}</p>
            </div>
            <p className="rso-members"><span>Members </span>{rso.numMembers}</p>
            <p className="rso-description">
                {/* display full description if less than 500 chars, else add elipses after 500 chars */}
                {rso.description.length > 500 ? rso.description.substr(0,500) + '...' : rso.description}
            </p>
        </div>
    )
}

export default RSOCard
