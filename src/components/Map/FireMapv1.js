/*

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';



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

        this.state = {
            fires: [],
            polygons: []
        }
    }
    

    componentDidMount() {
        fetch('https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
            .then(res => res.json())
            .then(data => {
                this.setState({ fires: data.features })
                this.state.fires.map((fire) =>{
                    if (fire.geometry !== null){
                        let fireCoords = fire.geometry.rings
                        let trueCoords = []
                        fireCoords.map((coords) => {
                            coords.map((pair) => {
                                let newPair = {lat: pair[1], lng: pair[0]}
                                return trueCoords.push(newPair)
                            })
                        })
                        this.state.polygons.push(trueCoords);
                     }
                 })
            })
    }

    showPolygons = () => {
        this.state.polygons.map((polygon) => {
            return <Polygon paths={polygon} options={{
                fillColor: "#BF5E4B",
                fillOpacity: 0.45,
                strokeColor: "#6B352A",
                strokeOpacity: 0.9,
                strokeWeight: 1
                }}
            />
        })
    }

    render(){
        return(
            <div className="mapBox">
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 37.7749, lng: -122.4149 }}
                >
                    {this.showPolygons()}
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({apiKey: 'AIzaSyBfd6BLe54h_8oTSb9mOz4yQnTLqGyReXs'})(FireMap)
*/

/*
    displayFires = () => {
        this.state.fires.map((fire) =>{
            if (fire.geometry !== null){
                let fireCoords = fire.geometry.rings
                let trueCoords = []
                fireCoords.map((coords) => {
                    coords.map((pair) => {
                        let newPair = {lat: pair[1], lng: pair[0]}
                        return trueCoords.push(newPair)
                    })
                })
                ///console.log("trueCoords:", trueCoords)

                let firePoly = new Polygon({
                    paths: trueCoords,
                    fillColor: "#BF5E4B",
                    fillOpacity: 0.45,
                    strokeColor: "#6B352A",
                    strokeOpacity: 0.9,
                    strokeWeight: 1
                });
                console.log("Fire polygon:", firePoly)
                return firePoly
                return (<Polygon 
                    paths={trueCoords}
                    options={{
                        fillColor: "#BF5E4B",
                        fillOpacity: 0.45,
                        strokeColor: "#6B352A",
                        strokeOpacity: 0.9,
                        strokeWeight: 1
                    }}
                />)
                
               console.log("True Coordinates:", trueCoords)
               this.state.polygons.push(trueCoords);
               console.log(this.state.polygons)
            }
        })
    }
*/