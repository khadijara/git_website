import React from 'react';
import './Map.css';

export function Map(){
        return(
            <div className="map_container">
        <div className="map">
          <h3 className="map-heading">Here is me</h3>
          <p>GEC circle, Chittagong, Bangladesh</p>
          <a
            className="map-link"
            href="https://www.google.com/maps/place/La+Salle+Gr%C3%A0cia/@41.4071185,2.1545826,15z/data=!4m5!3m4!1s0x0:0x520ffb2ea020d42!8m2!3d41.4071185!4d2.1545826"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
        );
}

export default Map;