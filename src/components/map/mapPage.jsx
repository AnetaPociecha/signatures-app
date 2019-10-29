import React from 'react';
import { MapModel } from './mapModel'

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
                        <p id='nameItem' class="dropdown-item">
                            Firstname Lastname <br /> <small>login@gmail.com</small>
                        </p>

                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item" type="button" onClick={this.props.onSignOut}>
                            Sign out
                        </button>
                    </div>
                </div>

                {/* </div> */}




                <MapModel />
            </div>
        );
    }
}

export default MapPage;