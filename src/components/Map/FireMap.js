import React, { Component } from 'react';
import { loadModules } from 'esri-loader';

class FireMap extends Component {
	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
	}

	componentDidMount() {
		// lazy load the required ArcGIS API for JavaScript modules and CSS
		loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/PopupTemplate'], {
			css: true
		}).then(([ArcGISMap, MapView, FeatureLayer]) => {
			const map = new ArcGISMap({
				basemap: 'topo-vector'
			});

			this.view = new MapView({
				container: this.mapRef.current,
				map: map,
				center: [-118, 34],
				zoom: 8
			});

			var fireTemplate = {
				title: function(event) {
					const { graphic } = event;
					if (graphic.attributes.IncidentName) {
						return `<b><u>${graphic.attributes.IncidentName} Fire</u></b>`;
					}
				},
				content: function(event) {
          const { graphic } = event;
          var updatedLast = new Date(graphic.attributes.DateCurrent)
					return (
						'<b><u>Acres:</u></b> ' 
						+ graphic.attributes.GISAcres.toFixed(2) + '<br/>'
						+ '<b><u>Last Updated:</u></b> ' 
            + `${updatedLast}`
					);
				}
			};

			const fireLayer = new FeatureLayer({
				url:
					'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?outFields=*&where=1%3D1',
				outFields: ['*'],
				popupTemplate: fireTemplate
			});
			map.add(fireLayer);
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
