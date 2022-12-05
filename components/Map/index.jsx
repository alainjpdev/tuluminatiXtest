import React, { useState, useRef } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";


const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 52.6376,
        longitude: -1.135171,
        width: "100vw",
        height: "100vh",
        zoom: 12
      });
      const mapRef = useRef();
  return (
    <div>
   map
    </div>
  )
}

export default Map