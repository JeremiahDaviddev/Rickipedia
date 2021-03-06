import React from 'react';
import '../../App.css';
const pinkPortal = "https://i.imgur.com/tNx7kC7.gif"


function Locations(props) {
    return (
        <div className="locationsPage">
            <div className="locationsTitle">
                <h1 className="ab1">Locations</h1>
                <img class="locationPic" src={pinkPortal} />
            </div>
            <div class="locationBody" >
                {props.locations.map(location => (
                    <div class="dropdown">
                        <ul>
                            <li><h3 class="dropbtn">{location.name}</h3></li>
                            <div class="dropdown-content">
                                <li> <h4 className="ab1">Dimension: {location.dimension}</h4></li>
                                <li>  <h4 className="ab2">Type: {location.type}</h4></li>
                            </div>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Locations