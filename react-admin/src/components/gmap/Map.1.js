import React, { Component , Fragment } from 'react';
import GoogleMap from 'google-map-react'; 
import Marker from './Marker';
import Polyline from './Polyline';
import Map_Center from '../const/map';
import SearchBox from './SearchBox';

class Map extends Component {

    constructor (props) {
        super(props)
        this.state = {
            mapsLoaded: false, 
            map: null,
            maps: null,
            places:[], 
        }
    }

    // Return map bounds based on list of places
    getMapBounds = (map, maps, places) => {
        const bounds = new maps.LatLngBounds();  
        places.forEach((place) => {
            bounds.extend(new maps.LatLng(
            place.geometry.location.lat,
            place.geometry.location.lng,
            ));
        });
        return bounds;
    };

    // Fit map to its bounds after the api is loaded
    onMapLoaded = (map, maps, places) => {         
        this.setState({
            ...this.state,
            mapsLoaded: true,
            map: map,
            maps: maps,
            places:places, 
        })  
        if(places.length <=0) {return false;}
        const bounds = this.fitBounds(map, maps, places); 
        this.bindResizeListener(map, maps, bounds);
    }

    // Re-center map when resizing the window
    bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
            maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
            });
        });
    };

    fitBounds = (map, maps, places) => {        
        var bounds = new maps.LatLngBounds();
        places.forEach((place) => {
            bounds.extend(new maps.LatLng(
                place.geometry.location.lat,
                place.geometry.location.lng,
            ));
        }); 
        map.fitBounds(bounds);
        return bounds; 
    }

    afterMapLoadChanges = () => {   
        let markers_updated = this.state.places.map(place => {
            return {lat:(typeof v === "function") ? place.geometry.location.lat():place.geometry.location.lat,
                    lng:(typeof v === "function") ? place.geometry.location.lng():place.geometry.location.lng,
                    label:place.name};             
        });
        return (
            <div style={{display: 'block'}}>            
            <Polyline
                map={this.state.map}
                maps={this.state.maps}
                // markers={this.props.markers}
                markers={markers_updated}
            />
            </div>            
        ) 
    }

    componentDidMount = () => {
        fetch('./inputs/json/route.json')
        .then(response => response.json())
        .then(data => this.setState({ places: data.results }));        
    }

    _onClick = ({x, y, lat, lng, event}) => {
        console.log(x, y, lat, lng, event); 
    }

    addPlace = (place) => {
        place.geometry.location.lat=place.geometry.location.lat();
        place.geometry.location.lng=place.geometry.location.lng();
        this.setState({ places: [...this.state.places, place] });  
        this.fitBounds(this.state.map,this.state.maps,this.state.places);        
    };

    componentDidUpdate = () =>{
        // console.log('test')
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     let shouldUpdate = this.props.status !== nextProps.status;
    //     console.log(nextProps.status);
    //     return true;
    // }

    _drawRoute = (map,maps,places) => { 
        const directionsService = new maps.DirectionsService();
        const directionsDisplay = new maps.DirectionsRenderer(); 
        // clean previous directions rendered to the map; 
        // const directionDisplay.setOptions(/* options: DirectionsRendererOptions */);
        directionsDisplay.setMap(maps); 
        this._calculateAndDisplayRoute(directionsService, directionsDisplay);
        directionsService.route({
            //   origin: document.getElementById('start').value,
            //   destination: document.getElementById('end').value,
            //   waypoints: waypts,
            //   optimizeWaypoints: true,
            //   travelMode: 'DRIVING'
            // }, function(response, status) {
            //   if (status === 'OK') {}}
        });
         
    }


    _calculateAndDisplayRoute = (map,maps,places) => {  
        const directionsService = new maps.DirectionsService();  
        // console.log("SERVICE", directionsService);
    }
    render () {          
        const {places, mapsLoaded, map, maps,} = this.state;         
        return (        
            <Fragment > 
                <div id="map" style={{height:"100vh",float:"left",width:"75%"}}>
                    <GoogleMap onClick={this._onClick.bind(this)}
                    bootstrapURLKeys={{key: 'AIzaSyC27MugzGiY-9Wi2b_8j4-xBuxMJEj-nY8',language:"en",libraries: ['places', 'geometry', 'drawing'], }}            
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps, places)}>
                        {/* {this.props.markers.map(marker => <Marker text={marker.label} lat={marker.lat} lng={marker.lng} />)}             */}
                        {places && places.map(place => (
                            <Marker key={place.id} text={place.name} lat={place.geometry.location.lat} lng={place.geometry.location.lng}/>
                        ))}
                        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}    
                        {this.vehiclesInRoute}            
                    </GoogleMap>
                </div>
                <div id="right-panel" style={{margin: "20px", "border-width":"2px",width:"20%",height:"400px",float:"left", "text-align":"left","padding-top":"0"}}>
                    {mapsLoaded && <SearchBox map={map} maps={maps} addplace={this.addPlace} />}
                    <ul>
                    {this.state.places.map(place=> <li><i class="fa fa-map-marker"></i> {place.name} <i class="fa fa-close"></i></li>) } 
                    </ul>
                    <button onClick={({map, maps, places}) => this._calculateAndDisplayRoute(map,maps,places)} >Click</button>
                    <div id="directions-panel"></div>
                </div>
            </Fragment>
        )
    }
}

    Map.defaultProps = {
    markers: [
        {label:1, lat: 53.42728, lng: -6.24357},
        {label:2, lat: 43.681583, lng: -79.61146},
        {label:3, lat: 25.681583, lng: -8.61146},
    ],
    center: Map_Center,
    zoom: 4
    }

export default Map