import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAff_wMo0dnJ7dOag7rEQ2MEcE6Y8tfXLA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} center={{ lat: props.lat, lng: props.lng }}>
      <Marker position={{ lat: props.lat, lng: props.lng }} />

  </GoogleMap>
));

export default MyMapComponent;