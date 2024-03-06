const GoogleMap = () => {
    // not sure if we can gather location/lat/long data from this type of implementation
    // so this is temporary unless we find a way to gather that data

    return (
        <iframe
            className="google-map"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCHYcVH2K7EPd_DZAf7dm8fBII2bf5zgWg&q=University+of+Central+Florida,Orlando+FL"
        >
        </iframe>
    )
}

export default GoogleMap
