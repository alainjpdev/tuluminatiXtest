/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from "react";
import ReactMapGL, { InteractiveMapProps } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// import mapStyleLight from './mapLight.json'

const defaultMapProps = {
  dragPan: true,
  dragRotate: false,
  scrollZoom: false,
  width: "100%",
  height: "100%",
  mapboxApiAccessToken:
    "pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ",
  // mapStyle: mapStyleLight,
};

const MapBox = ({ children, props = defaultMapProps, className }) => {
  /** useInitializeViewport feeds viewport state to the map. */

  return (
    <ReactMapGL
      dragPan={false}
      latitude={52.6376}
      longitude={-1.135171}
      zoom={14}
      {...props}
      className={`rounded ${className}`}
      data-chromatic="ignore"
    >
      {children}
    </ReactMapGL>
  );
};

export default MapBox;
