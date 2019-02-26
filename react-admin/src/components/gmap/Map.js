import React, { Component , Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,} from "react-google-maps";
// import Marker from './Marker';
// import Polyline from './Polyline';
// import Map_Center from '../const/map';
// import SearchBox from './SearchBox';
  
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.defaultCenter}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

class Map extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mapsLoaded: false, 
            map: null,
            maps: null,
            places:[], 
            isMarkerShown: false,
        }
    }

    componentDidMount = () => {
        this.delayedShowMarker();
        fetch('./inputs/json/route.json')
        // .then(response => response.json())
        .then(response => response.text() )
        .then(data => this.setState({ places: data.results }));
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 1000)
    }
    
    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render () {        
        return (        
            <MyMapComponent zoom={this.props.zoom} defaultCenter={this.props.center}
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC27MugzGiY-9Wi2b_8j4-xBuxMJEj-nY8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div id="loadingelement" style={{height: `100%` }} />}
            containerElement={<div id="container" style={{"minHeight":`600px`,height: `100vh`  }} />}
            mapElement={<div id="map" style={{height: `100%` }} />}
             >
            </MyMapComponent>
        ) 
    }
}

Map.defaultProps = {
markers: [
    {label:1, lat: 53.42728, lng: -6.24357},
    {label:2, lat: 43.681583, lng: -79.61146},
    {label:3, lat: 25.681583, lng: -8.61146},
],
center: { lat: -34.397, lng: 150.644 },//Map_Center,
zoom: 8
}

export default Map