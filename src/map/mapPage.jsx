import React from 'react';
import { MapModel } from './mapModel'
import Nav from './nav';
import pandaIcon from './pandaIcon.png'

class MapPage extends React.Component {

    render() {
        return (
            <div>

                {/* <div class="fixed-top d-flex justify-content-end mr-4 mt-3"> */}
                {/* <img src={pandaIcon} class="rounded-circle" alt="Cinque Terre" width="35" height="35" /> */}

                <div class="btn-group fixed-top d-flex justify-content-end mr-4 mt-3">
                    <button id='rock' class="rounded-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ width: 40, height: 40 }} />
                    {/* <img src={pandaIcon} class="rounded-circle" alt="Cinque Terre" width="35" height="35" /> */}
                    {/* </button> */}
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>

                {/* </div> */}




                <MapModel />
            </div>
        );
    }
}

export default MapPage;