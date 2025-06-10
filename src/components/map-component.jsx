import { GoogleMap, Polygon } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "900px",
  height: "500px",
};

const center = {
  lat: 23.687268147686016,
  lng: 86.97058158926599,
};

const redArea = [
  { lat: 22.5726, lng: 88.3639 },
  { lat: 22.5726, lng: 88.3739 },
  { lat: 22.5626, lng: 88.3739 },
  { lat: 22.5626, lng: 88.3639 },
  { lat: 22.5626, lng: 88.2624 },
];

function MapComponent() {

  return (
    <>
      <div>
        
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            <Polygon
              paths={redArea}
              options={{
                fillColor: "red",
                fillOpacity: 0.5,
                strokeColor: "red",
                strokeOpacity: 0.7,
                strokeWeight: 2,
              }}
            />

            <Polygon />
          </GoogleMap>
        
      </div>
    </>
  );
}

export default MapComponent;
