import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};
const center = {
  lat: 28.6016, // default latitude
  lng: -81.2005, // default longitude
};

const GoogleMaps = ({latitude, setLatitude, longitude, setLongitude, location_name, setLocation_Name, handleEventLocationChange}) => {

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

    const handleClick = async (e) => {
        handleEventLocationChange();
        const google = window.google;

        // Initialize the geocoder
        var geocoder = new google.maps.Geocoder();

        // Assuming latitude and longitude are obtained from the click event
        var latlng = {lat: e.latLng.lat(), lng: e.latLng.lng()}

        // set latitude and longitude from the clicked location
        setLatitude(e.latLng.lat());
        setLongitude(e.latLng.lng());

        // Perform reverse geocoding
        geocoder.geocode({ 'location': latlng }, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
            // Address found, you can access it from the first result
            var address = results[0].formatted_address;
            setLocation_Name(address);
            } else {
            console.log('No results found');
            }
        } else {
            console.log('Geocoder failed due to:', status);
        }
        });
    }
    
    return (
        <div>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            onClick={handleClick}
            id='map'
            >
            <Marker position={markerPos}/>
            </GoogleMap>
        </div>
    );
}

export default GoogleMaps;