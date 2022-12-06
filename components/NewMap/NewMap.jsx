import React from "react";
import MapBox from "./map/Mapbox";
import { MapProvider } from "./map/mapContext";

const NewMap = () => {
  return (
    <div>
      <MapBox>
        {/* <HomeMarkers />

          <PanelContainer>
            <Panel position="center-bottom">
              <Fetching />
              <Error />
            </Panel>
            <Panel position="left-top">
              <ZoomControls />
            </Panel>
          </PanelContainer>
  */}
      </MapBox>
    </div>
  );
};

export default NewMap;
