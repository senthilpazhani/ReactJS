import React, { Component } from 'react'; 

class LayoutMain extends Component {

    _leftsideslidebar=(event)=>{
        var _targetSlider = event.target.dataset.src; 
        console.log(_targetSlider);
        //document.getElementById(_targetSlider).classList.toggle('w3-show');
        //this.refs[_targetSlider].classList.toggle('w3-show'); Throw error : TypeError: Cannot read property 'classList' of undefined
        // note: 
        // When the targeting element (_targetSlider) is in sibbling component, refs is not working. In same component it's working
        // Why? I expect, since the DOMs are already rendered in painted, it should be able to refer and work.
        // Any user event cant be component bounded/scopped
    } 

    render() {
        return (
            <main id="main">
                <div id="leftSidenavIcon" className="leftSidenavIcon">
                    <a className="w3-button w3-circle w3-blue-grey w3-medium" id="leftsideslidebar_closebtn" href="#" 
                    data-src="leftsideslidebar" onClick={this._leftsideslidebar.bind(this)}><i className="fa fa-filter w3-large"></i></a>
                </div>
                <div id="rightSidenavIcon" className="rightSidenavIcon"><a className="w3-button w3-circle w3-blue-grey w3-small" id="rightsideslidebar_closebtn" href="#" onclick="rightsideslidebar_open()"><i className="fa fa-hand-o-left w3-large"></i></a></div>
                <section id="content">
                    <div className="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow">
                        <p>with a metropolitan area of over 9 million inhabitants.</p>
                    </div>
                    <div className="w3-panel w3-card-2 w3-white" id="profile">
                        <div className="w3-container">
                            <img className="w3-round w3-margin-right w3-col s2" src="" alt="" style={{"min-width":"85px","max-width":"100px",float:"left"}} />
                            <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-user-o"></i> Senthil Kumar Palanisamy</div>
                            <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-phone"></i> 98899 00039 </div>
                            <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-envelope-o"></i> SenthilKumar@gmail.com</div>
                            <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-users"></i> Senthil Kumar Palanisamy</div>
                        </div>                    
                    </div>                
                    <div className="w3-hide w3-panel w3-blue-grey">
                        <p>9 million inhabitants.</p>
                    </div>
                    <section id="maintab" className="w3-white">
                        <div className="w3-bar w3-theme-d4">
                            <button className="w3-bar-item w3-button tablink w3-theme" onclick="maintabnav(event,'maintabContainer','tablink','one')">Form</button>
                            <button className="w3-bar-item w3-button tablink" onclick="maintabnav(event,'maintabContainer','tablink','two')">Table</button>
                            <button className="w3-bar-item w3-button tablink" onclick="maintabnav(event,'maintabContainer','tablink','three')">Report</button>
                        </div>
                        <div id="one" className="w3-container w3-border maintabContainer">
                            <div className="w3-container w3-blue-grey">
                                <h6>Input Form</h6>
                            </div>
                            <form className="w3-container w3-card-4" noValidate>
                                <div className="w3-row w3-padding-24">
                                    <div className="w3-half">
                                        <div className="w3-col">
                                            <label className="w3-text-grey">Name</label>
                                            <input className="w3-input w3-border" type="text" required="" />
                                        </div>
                                        <div className="w3-col">
                                            <label className="w3-text-grey">Email</label>
                                            <input className="w3-input w3-border" type="text" required="" />
                                        </div>
                                        <div className="w3-col">
                                            <label className="w3-text-grey">Subject</label>
                                            <textarea className="w3-input w3-border" style={{resize:"none"}}></textarea>
                                        </div>
                                    </div>
                                    <div className="w3-half w3-padding-left-adjust"> 
                                        <div className="w3-col">
                                            <label className="w3-text-grey">Name</label>
                                            <input className="w3-input w3-border" type="text" required="" />
                                        </div>
                                        <div className="w3-col">
                                            <label className="w3-text-grey">Email</label>
                                            <input className="w3-input w3-border" type="text" required="" />
                                        </div>
                                        <div className="w3-col">
                                            <label className="w3-text-grey">Subject</label>
                                            <textarea className="w3-input w3-border" style={{resize:"none"}}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="w3-row">
                                    <div className="w3-half">
                                        <input id="milk" className="w3-check" type="checkbox" checked="checked" />
                                        <label>Milk</label>
                                        <br/>
                                        <input id="sugar" className="w3-check" type="checkbox" />
                                        <label>Sugar</label>
                                        <br/>
                                        <input id="lemon" className="w3-check" type="checkbox" disabled="" />
                                        <label>Lemon (Disabled)</label>                                
                                    </div>                                
                                    <div className="w3-half">
                                        <input id="male" className="w3-radio" type="radio" name="gender" value="male" checked="" />
                                        <label>Male</label>
                                        <br/>
                                        <input id="female" className="w3-radio" type="radio" name="gender" value="female" />
                                        <label>Female</label>
                                        <br/>
                                        <input id="unknown" className="w3-radio" type="radio" name="gender" value="" disabled="" />
                                        <label>Not Mentioned (Disabled)</label>
                                    </div>
                                </div>                            
                                <div className="w3-panel w3-right">
                                    <button type="button" onclick="document.getElementById('id01').style.display='block'" className="w3-button w3-black">Modal</button>
                                    <button type="button" className="w3-btn w3-padding w3-teal">Save</button>
                                    <button type="button" className="w3-btn w3-padding w3-grey">Reset</button>
                                </div>
                                <div id="id01" className="w3-modal">
                                    <div className="w3-modal-content w3-card-4 w3-animate-zoom">
                                        <header className="w3-container w3-blue-grey"> 
                                            <span onclick="document.getElementById('id01').style.display='none'" 
                                            className="w3-button w3-blue-grey w3-large w3-display-topright">&times;</span>
                                            <h6>Header</h6>
                                        </header>                                    
                                        <div className="w3-bar w3-border-bottom w3-theme-l5">
                                            <button className="w3-bar-item w3-button tablinkModal w3-theme" onclick="maintabnav(event,'tabcontiner', 'tablinkModal','London')">London</button>
                                            <button className="w3-bar-item w3-button tablinkModal" onclick="maintabnav(event,'tabcontiner','tablinkModal', 'Paris')">Paris</button>
                                            <button className="w3-bar-item w3-button tablinkModal" onclick="maintabnav(event,'tabcontiner','tablinkModal', 'Tokyo')">Tokyo</button>
                                        </div>                                    
                                        <div id="London" className="w3-container tabcontiner"><h1>one</h1></div>
                                        <div id="Paris" className="w3-container tabcontiner" style={{display:"none"}}><h1>two</h1></div>
                                        <div id="Tokyo" className="w3-container tabcontiner" style={{display:"none"}}><h1>three</h1></div>
                                        <div className="w3-container w3-light-grey w3-padding">
                                            <button className="w3-button w3-right w3-white w3-border" onclick="document.getElementById('id01').style.display='none'">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="two" className="w3-container w3-border maintabContainer" style={{display:"none"}}>
                            <div className="w3-responsive">
                                <table className="w3-table-all w3-card-4 w3-hoverable">
                                    <thead>
                                        <tr className="w3-light-grey">
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        </tr></thead>
                                    <tbody>
                                        <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        </tr>
                                        <tr>
                                        <td>Eve</td>
                                        <td>Jackson</td>
                                        <td>94</td>
                                        <td>94</td>
                                        <td>94</td>
                                        <td>94</td>
                                        <td>94</td>
                                        <td>94</td>
                                        <td>94</td>
                                        </tr>
                                        <tr>
                                        <td>Adam</td>
                                        <td>Johnson</td>
                                        <td>67</td>
                                        <td>67</td>
                                        <td>67</td>
                                        <td>67</td>
                                        <td>67</td>
                                        <td>67</td>
                                        <td>67</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                    
                        <div id="three" className="w3-container w3-border maintabContainer" style={{display:"none"}}>
                            <h2>Tokyo</h2>
                            <p>Tokyo is the capital of Japan.</p>
                        </div>
                    </section>
                </section>
                <div id="mainfooter">
                    <nav className="w3-bottom" id="mainfooternavbar" style={{"z-index":0}}>
                        <div className="w3-bar w3-theme-d2 w3-left-align">
                            <a href="#" className="w3-bar-item w3-button 3-hide-small w3-padding-large w3-hover-none"><i className="fa fa-star"></i> <span>Powered by PSK</span></a>
                        </div>
                    </nav>
                </div>
            </main>
        );
    }
}   
export default LayoutMain;