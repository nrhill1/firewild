import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';

/*
const coord_pair_to_latlng =  ([lng, lat]) => ({ lat, lng })
const convert_ring_coords = ring => ring.map(coord_pair_to_latlng)
*/

const mapStyles = {
    margin: 30,
    width: '93.75%',
    height: '90%',
    border: '1px solid #3E1C18',
    display: 'inline-block'
};


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

  displayFires() {
    return this.state.fires.map (fire => {
      let coordinates = fire.geometry.coordinates[0][0]
      let coordArr = []
      coordinates.map(coordinate => coordArr.push({lat:coordinate[1], lng:coordinate[0]} ))
      return ( 
        <Polygon 
          paths = {coordArr}
          fillColor     = "#BF5E4B"
          fillOpacity   = {0.45}
          strokeColor   = "#6B352A"
          strokeOpacity = {0.9}
          strokeWeight  = {1}
        />
      )
    })
  }

  render (){
    return (
      <div className="mapBox">
        <Map
          google        = {this.props.google}
          zoom          = {8}
          style         = {mapStyles}
          initialCenter = {{ lat: 37.7749, lng: -122.4149 }}
        >
          {this.displayFires()}
        </Map>
      </div>
    )
  }
}


export default GoogleApiWrapper({apiKey: 'AIzaSyBfd6BLe54h_8oTSb9mOz4yQnTLqGyReXs'})(FireMap)