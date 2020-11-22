import React, { Component } from "react";
import { loadModules } from "esri-loader";

class FireMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: "topo-vector"
        });

        this.view = new MapView({
          container: this.mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 8
        });
      }
    );
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

  render() {
    return <div className="webmap" ref={this.mapRef} />;
  }
}

export default FireMap;
