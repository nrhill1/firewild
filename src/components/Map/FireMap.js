import React, { Component } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';





// These funcitons reverse coordinates to a format readable by Google Maps API
/*
const coord_pair_to_latlng =  ([lng, lat]) => ({ lat, lng })
const convert_ring_coords = ring => ring.map(coord_pair_to_latlng)
*/

const mapContainerStyle = {
  width: '93.75%',
  height: '90%',
};

const fireOptions = {
  fillColor     : "#BF5E4B",
  fillOpacity   : 0.45,
  strokeColor   : "#6B352A",
  strokeOpacity : 0.9,
  strokeWeight  : 1
}

class FireMap extends Component {
  
  constructor(props) {
    super(props)
    this.state = { fires: [] }
  }
  
  componentDidMount() {
    fetch('https://opendata.arcgis.com/datasets/f72ebe741e3b4f0db376b4e765728339_0.geojson')
      .then(res => res.json())
      .then(data => this.setState({ fires: data.features }))
  }

  displayFires(){
    return this.state.fires.map(fireJ => {
      let fire = JSON.parse(fireJ.geoJSON)
      let coordinates = fire.geometry.coordinates[0]
      let coordArr = []
      coordinates.map(coordinate => coordArr.push({lat:coordinate[1], lng:coordinate[0]} ))
      return (
        <Polygon
          path={coordArr}
          options={fireOptions}
        />
      )
    })
  }


  render (){
    return (
      <div className="mapBox">
      <LoadScript
        googleMapsApiKey="AIzaSyBfd6BLe54h_8oTSb9mOz4yQnTLqGyReXs"
      >
        <GoogleMap
          zoom          = {8}
          mapContainerStyle    = {mapContainerStyle}
          center        = {{ lat: 37.7749, lng: -122.4149 }}
        >
        </GoogleMap>
      </LoadScript>
      </div>
    )
  }
}


export default FireMap