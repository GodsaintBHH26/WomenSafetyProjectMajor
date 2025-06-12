import { GoogleMap, Polygon, Polyline } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { greenArea, redArea } from "../data/MapData";

const containerStyle = {
  width: "900px",
  height: "500px",
};

const center = {
  lat: 23.687268147686016,
  lng: 86.97058158926599,
};

function MapComponent({ mde }) {
  const [points, setPoints] = useState([]);

  const handleRoute = (click) => {
    if (mde === "route") {
      const lat = click.latLng.lat();
      const lng = click.latLng.lng();
      setPoints((prev) => [...prev, { lat, lng }]);
    }
  };

  useEffect(() => {
    if (mde !== "route") {
      setPoints([]);
    }
  }, [mde]);

  return (
    <>
      <div>
        <GoogleMap key={mde} mapContainerStyle={containerStyle} center={center} zoom={14} onClick={handleRoute}>
          {mde === "area" && (redArea || greenArea) && (
            <>
              {redArea && (<Polygon
                paths={redArea}
                options={{
                  fillColor: "red",
                  fillOpacity: 0.5,
                  strokeColor: "red",
                  strokeOpacity: 0.7,
                  strokeWeight: 2,
                }}
              />)}

              {greenArea && (<Polygon
                paths={greenArea}
                options={{
                  fillColor: "green",
                  fillOpacity: 0.6,
                  strokeColor: "blue",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                }}
              />)}
            </>
          )}

          {(mde === 'route') && (points.length > 1) && (<Polyline
            path={points}
            options={{
              strokeColor: "yellow",
              geodesic: true,
              strokeWeight: 4,
            }}
          />)}
        </GoogleMap>
      </div>
    </>
  );
}

export default MapComponent;
