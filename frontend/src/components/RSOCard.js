const RSOCard = ({rso}) => {
    return (
        <div className="rso-card-container">
            <div className="rso-card-heading">
                <h2 className="rso-name">{rso.name}</h2>
                <p className="rso-type">{rso.type}</p>
            </div>
            <p className="rso-status"><span>Status</span><span className={`${rso.status === 'Active' ? 'rso-active' : 'rso-inactive'}`}>{rso.status}</span></p>
            <p className="rso-description">
                {/* display full description if less than 500 chars, else add elipses after 500 chars */}
                {rso.desc && rso.desc.length > 200 ? rso.desc.substr(0, 200) + '...' : rso.desc}
            </p>
        </div>
    )
}

export default RSOCard
