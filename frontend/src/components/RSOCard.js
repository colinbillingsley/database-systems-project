const RSOCard = ({rso}) => {
    return (
        <div className="rso-card-container">
            <div className="rso-card-heading">
                <h2 className="rso-name">{rso.name}</h2>
                <p className="rso-type">{rso.type}</p>
            </div>
            <p className="rso-members"><span>Status </span>{rso.status}</p>
            <p className="rso-description">
                {/* display full description if less than 500 chars, else add elipses after 500 chars */}
                {rso.desc && rso.desc.length > 500 ? rso.desc.substr(0, 500) + '...' : rso.desc}
            </p>
        </div>
    )
}

export default RSOCard
