import React, { Component } from "react";
import { loadModules } from "esri-loader";
import { V4MAPPED } from "dns";

class FireMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/Graphic"
      ],
      { css: true }
    ).then(([ArcGISMap, MapView, FeatureLayer, Graphic]) => {
      const map = new ArcGISMap({
        basemap: "topo-vector"
      });

      const fireLayer = new FeatureLayer({
        url:
          "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?outFields=*&where=1%3D1",
        outFields: ["*"],
        popupTemplate: {}
      });
      map.add(fireLayer);

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8
      });
    });
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
