import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from "google-maps-react";

const mapStyles = {
  margin: 30,
  width: "93.75%",
  height: "90%",
  border: "1px solid #3E1C18",
  display: "inline-block"
};

class FireMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fires: [],
      activePoly: null,
      showingInfoWindow: false
    };
  }

  componentDidMount() {
    fetch(
      "https://opendata.arcgis.com/datasets/f72ebe741e3b4f0db376b4e765728339_0.geojson"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ fires: data.features }));
  }

  handleClick = (props, polygon) => {
    const paths = polygon.getPaths().getArray();
    const coordinates = paths.map((path) => {
      const points = path.getArray();
      return points.map((point) => [point.lng(), point.lat()]);
    });

    polygon.setOptions({
      fillColor: "#6B352A",
      strokeColor: "#BF5E4B",
      strokeOpacity: 1.0,
      fillOpacity: 0.9,
      strokeWeight: 1.8
    });

    if (this.state.activePoly !== null) {
      this.state.activePoly.setOptions({
        fillColor: "#BF5E4B",
        fillOpacity: 0.45,
        strokeColor: "#6B352A",
        strokeOpacity: 0.9,
        strokeWeight: 1
      });
    }

    this.setState({
      activePoly: polygon,
      showingInfoWindow: true
    });

    return {
      type: "Polygon",
      coordinates
    };
  };

  displayFires() {}

  render() {
    return <div className="mapBox"></div>;
  }
}

export default FireMap;
