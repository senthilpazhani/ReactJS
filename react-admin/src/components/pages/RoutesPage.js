import React, { Component } from 'react'; 
import Gmap from '../gmap/Map';

class RoutesPage extends Component { 

    render() {
        return (
            <section id="content">            
                <div className="w3-container"> 
                    <Gmap /> 
                </div>                  
            </section> 
        );
    }
}

export default RoutesPage;