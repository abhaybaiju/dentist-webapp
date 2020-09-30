import React from 'react';
//import mapboxgl from 'mapbox-gl';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import './css/Map.css';

const MapView = () => {

  return(
    <Map center={[28.63457404, 77.06795108]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[28.63457404, 77.06795108]}/>
    </Map>
  );
}

export default MapView;
