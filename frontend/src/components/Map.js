import React from 'react';
import { Map, Marker,TileLayer } from "react-leaflet";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import './css/Map.css';

const MapView = () => {

  const iconMarkup = renderToStaticMarkup(<LocationOnIcon style={{color:'#2f2b4f', fontSize:'45px'}}/>);
  const customMarkerIcon = divIcon({
      html: iconMarkup,
  });

  return(
    <Map center={[28.63457404, 77.06795108]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[28.63457404, 77.06795108]} icon={customMarkerIcon}/>
    </Map>
  );
}

export default MapView;
