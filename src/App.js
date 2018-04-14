import React, { Component } from 'react';
import logo from './logo.svg';
import L from "mapbox.js";
import "./lib/HeatCanvas";

class App extends Component {

  componentDidMount(){
    var map = L.map('map').setView([30.2672, -97.7431], 10);

    var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    tiles.addTo(map);
    const heatCanvas = L.heatcanvas();

    heatCanvas.addTo(map);

  }


  render() {
    return (
      <div className="Map" id="map">

      </div>
    );
  }
}

export default App;
