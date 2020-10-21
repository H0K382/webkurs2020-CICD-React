import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const menuStyle = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute",
  background: "white",
  zIndex: 1,
  padding: 10,
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10/", // stylesheet location
        center: [10.43575376,63.42257635],
        zoom: 15
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  const panToTrondheim = () => {
    map.flyTo({
      center: [10.40298522,63.44119009],
      essential: true
    });
    console.log("Trondheim");
  }

  const panToLillehammer = () => {
    map.flyTo({
      center: [10.45927405,61.12468232],
      essential: true
    });
    console.log("Lillehammer");
  }

  const panToSandvika = () => {
    map.flyTo({
      center: [10.5232662,59.89156341],
      essential: true
    });
    console.log("Sandvika");
  }

  return (
    <div>
      <input
        type = "button"
        name = "rtoggle"
        value = "Sandvika"
        defaultChecked = "checked"
        onClick = {panToSandvika}
        />
        <input
        type = "button"
        name = "rtoggle"
        value = "Trondheim"
        defaultChecked = "checked"
        onClick = {panToTrondheim}
        />
        <input
        type = "button"
        name = "rtoggle"
        value = "Lillehammer"
        defaultChecked = "checked"
        onClick = {panToLillehammer}
        />
      <div ref={(el) => (mapContainer.current = el)} style={styles} />
    </div>
    ); 
};

export default MapboxGLMap;