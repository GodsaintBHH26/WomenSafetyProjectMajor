import React from 'react'
import { GoogleMap, Polygon, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: '700px',
    height: '500px'
};

const center = {
  lat: 22.5726,
  lng: 88.3639,
};

const redArea = [
  { lat: 22.5726, lng: 88.3639 },
  { lat: 22.5726, lng: 88.3739 },
  { lat: 22.5626, lng: 88.3739 },
  { lat: 22.5626, lng: 88.3639 },
  { lat: 22.5626, lng: 88.2624 }
];

function Map() {

  return (
    <>
    <div>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
                <Polygon paths={redArea} options={{
                    fillColor:'red',
                    fillOpacity: 0.5,
                    strokeColor: 'red',
                    strokeOpacity: 0.7,
                    strokeWeight: 2
                }}/>

                <Polygon/>
            </GoogleMap>
        </LoadScript>
    </div>
    </>
  )
}

export default Map