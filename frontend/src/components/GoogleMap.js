import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};
const center = {
  lat: 28.6016, // default latitude
  lng: -81.2005, // default longitude
};

const GoogleMaps = ({latitude, setLatitude, longitude, setLongitude}) => {

    const markerPos = {
        lat: latitude,
        lng: longitude,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCHYcVH2K7EPd_DZAf7dm8fBII2bf5zgWg'
    });

    
    if (loadError) {
    return <div>Error loading maps</div>;
    }
    
    if (!isLoaded) {
    return <div>Loading maps</div>;
    }

    const handleClick = (e) => {
        // Get latitude and longitude from the clicked location
        setLatitude(e.latLng.lat());
        setLongitude(e.latLng.lng());
    }
    
    return (
        <div>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            onClick={handleClick}
            >
            <Marker position={markerPos}/>
            </GoogleMap>
        </div>
    );
}

export default GoogleMaps;