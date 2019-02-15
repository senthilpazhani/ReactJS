import React, { Component } from 'react'; 

class LayoutRightNav extends Component {
  render() {
    return ( 
        <aside id="rightsideslidebar" className="w3-sidebar w3-bar-block w3-card-4 w3-black 3-animate-right" >
            <div id="rightsideovelay" >          
                <div className="closebtn" href="#" onClick="rightsideslidebar_close()">&times;</div>
                <section id="rightpanelaccordion">
                    <button onClick="rightPanelAccordion('Demo1')" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 1 <i className="fa fa-caret-down"></i></button>
                    <div id="Demo1" className="w3-hide w3-container w3-white">
                        <p>Some text..</p>
                    </div>
                    <button onClick="rightPanelAccordion('Demo2')" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 2 <i className="fa fa-caret-down"></i></button>
                    <div id="Demo2" className="w3-hide w3-container w3-white">
                        <p>Some other text..</p>
                    </div>
                    <button onClick="rightPanelAccordion('Demo3')" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 1 <i className="fa fa-caret-down"></i></button>
                    <div id="Demo3" className="w3-hide w3-container w3-white">
                        <p>Some text..</p>
                    </div>

                    <button onClick="rightPanelAccordion('Demo4')" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 2 <i className="fa fa-caret-down"></i></button>
                    <div id="Demo4" className="w3-hide w3-container w3-white">
                        <p>Some other text..</p>
                    </div>
                </section>
            </div>
        </aside> 
        );
    }
}   
export default LayoutRightNav;