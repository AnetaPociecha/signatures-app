import React from 'react';
import { MapModel } from './mapModel'
import {requestSignOut} from "../../store/actions/auth";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

function MapPage({signOut, name, login}) {

        const history = useHistory();

        const callback = () => {
            history.push("/login")
        };

        return (
            <div>

                <div className="btn-group fixed-top d-flex justify-content-end mr-4 mt-3">
                    <button id='rock' className="rounded-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ width: 40, height: 40 }} />

                    <div className="dropdown-menu dropdown-menu-right">
                        <p id='nameItem' className="dropdown-item">
                            {name} <br /> <small>{login}</small>
                        </p>

                        <div className="dropdown-divider" />
                        <button className="dropdown-item" type="button" onClick={() => signOut(callback)}>
                            Sign out
                        </button>
                    </div>
                </div>

                <MapModel />
            </div>
        );
}

const mapStateToProps = state => ({
    name: state.auth.name,
    login: state.auth.login
});

const mapDispatchToProps = (dispatch) => ({
    signOut: (callback) => dispatch(requestSignOut(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);