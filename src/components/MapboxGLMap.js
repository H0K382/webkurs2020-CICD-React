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
        style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
        center: [10.408773,63.422091],
        zoom: 10
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
      center: [10.408,63.53],
      essential: true
    });
    console.log("Trondheim");
  }

  const panToLillehammer = () => {
    map.flyTo({
      center: [10.27,61.06],
      essential: true
    });
    console.log("Lillehammer");
  }

  const panToSandvika = () => {
    map.flyTo({
      center: [10.31,59.53],
      essential: true
    });
    console.log("Sandvika");
  }

  return (
    <div>
      <input
        id = "streets-v11"
        type = "button"
        name = "rtoggle"
        value = "Sandvika"
        defaultChecked = "checked"
        onClick = {panToSandvika}
        />
        <input
        id = "dark-v10"
        type = "button"
        name = "rtoggle"
        value = "Trondheim"
        defaultChecked = "checked"
        onClick = {panToTrondheim}
        />
        <input
        id = "dark-v10"
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