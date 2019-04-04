import React, { Component, Fragment  } from 'react';
import { withScriptjs, withGoogleMap, BicyclingLayer, GoogleMap, Marker,InfoWindow, Circle,
    DirectionsRenderer} from "react-google-maps";
// import Marker from './Marker';
// import Polyline from './Polyline';
// import Map_Center from '../const/map';
// import SearchBox from './SearchBox';

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

// const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const google=window.google 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom = {props.zoom}
    defaultCenter = {props.defaultCenter}   
    //ref = {(map) => {props.map;}}  
    onClick = {props.onMapClick.bind(this)}     
  > <BicyclingLayer autoUpdate />
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >{
        props.isMarkerShown &&  props.markers.map(marker => {
        const onMarkerClick = props.onMarkerClick.bind(this, marker)        
        return (
        <Marker
        //labelAnchor={new google.maps.Point(0, 0)}
        //labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
        onClick={onMarkerClick}
        position={{ lat: marker.latitude, lng: marker.longitude}}
        key={marker.id} 
        title={`${marker.shelter} , ${marker.address}`}
        options={{ icon: 'https://image.ibb.co/evMHxF/shopping_zone_marker_1.png' }}
        >
            {
            props.selectedMarker === marker && props.isToggleOpen &&
            //   <InfoWindow
            //   options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            //     <div>
            //       {marker.shelter}
            //     </div>
            //   </InfoWindow>
            <InfoBox
                defaultPosition={{ lat: marker.latitude, lng: marker.longitude}}
                onCloseClick={onMarkerClick}
                onClick={props.onMarkerClick.bind(this, marker)}
                options={{ closeBoxURL: `X`, enableEventPropagation: true }}
                >
                <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                        {marker.shelter}
                    </div>
                </div>
            </InfoBox>
            }            
        </Marker>        
        )}        
    )}</MarkerClusterer>
  </GoogleMap>
)) 

class Map extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mapsLoaded: false, 
            map: null,
            maps: null,
            markers:[], 
            isMarkerShown: false,
            selectedMarker: false,
            isToggleOpen:false,
        }
    }    
    // componentWillReceiveProps(props) {
    componentDidMount = () => {        
        // fetch('./inputs/json/route.json')
        // // .then(response => response.json())
        // .then(response => response.text() )
        // .then(data => this.setState({ markers: data.results }));
  
        fetch("./inputs/json/markers.json")
        .then(response => response.json())
        .then(data => {
            this.setState({ isMarkerShown: true, markers: data.shelters }) })  
        .catch(error => {
            this.setState({ content: `Error: The Geolocation service failed (${error.message}).` });
        });
        console.log(this.state.maps,'asdfsd')
    }

    _drawRoute = (map,maps) => { 
        console.log(this.state.maps,'asdfsd')
            const DirectionsService = new maps.DirectionsService();            
            DirectionsService.route({
                origin: new maps.LatLng(30.569382999239245, -97.37512539735008),
                destination: new maps.LatLng(30.79142338383982, -93.24426602235008),
                travelMode: google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.setState({
                        directions: result,
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
            });
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 1000)
    }
     

    handleMarkerClick = ( marker, event) => {        
        this.setState({ //isMarkerShown: true,
            isToggleOpen: !this.state.isToggleOpen,
            selectedMarker: marker })
            console.log(this.state.isToggleOpen) 
    }  

    _onClick = (event) => {
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
        // this.setState({ markers: this.state.markers });
    }

    render () {
        const {map, maps,} = this.state;
        return (<Fragment> 
            <MyMapComponent  _drawRoute
            zoom={this.props.zoom} defaultCenter={this.props.center} markers={this.state.markers}
            selectedMarker={this.state.selectedMarker}
           // onToggleOpen = {this.onToggleOpen}
            isToggleOpen={this.state.isToggleOpen}
            isMarkerShown={this.state.isMarkerShown}
            onMapClick={this._onClick.bind(this)}
            onMarkerClick={this.handleMarkerClick}  map={map} maps={maps} 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC27MugzGiY-9Wi2b_8j4-xBuxMJEj-nY8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div id="loadingelement" style={{height: `100%` }} />}
            containerElement={<div id="container" style={{"minHeight":`600px`,height: `100vh`  }} />}
            mapElement={<div id="map" style={{height: `100%` }} />}
             >
            </MyMapComponent>
            <button onClick={({map, maps}) => this._drawRoute(map,maps)} >Click</button>
            </Fragment>
        ) 
    }
}

Map.defaultProps = {
markers: [
    {label:1, id:1, latitude: 53.42728, longitude: -6.24357, shelter:'A'},
    {label:2, id:2, latitude: 43.681583, longitude: -79.61146, shelter:'AA'},
    {label:3, id:3, latitude: 25.681583, longitude: -8.61146, shelter:'AAA'},
],
center: { lat: 30.2275813769995, lng: -95.26575039735008 },//Map_Center,
zoom: 8
}

export default Map