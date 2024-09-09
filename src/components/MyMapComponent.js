import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Setting the coordinates for R.M.K. Engineering College
const RMKEC_COORDINATES = [13.3269, 80.0586]; // Latitude and Longitude for RMKEC

const MyMapComponent = () => {
  return (
    <MapContainer 
      center={RMKEC_COORDINATES} 
      zoom={15} 
      style={{ height: '300px', width: '100%' }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={RMKEC_COORDINATES}>
        <Popup>R.M.K. Engineering College</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapComponent;
