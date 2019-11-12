import React from 'react'
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {requestSignOut} from "../../../store/actions/auth";

function TopBar({name, login, signOut}) {

    const history = useHistory();

    const callback = () => {
        history.push("/login")
    };

    return (
        <nav className="navbar navbar-dark bg-dark border-bottom pb-1 pt-1"
             style={{display: 'flex', flexDirection: 'row'}}>

            <div className="navbar-brand pl-1">
                SignMap
            </div>

            <div className='nav-item pr-1 text-right' style={{flex: 1}}>

                <div className="btn-group">
                    <button id='rock' className="rounded-circle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" style={{width: 30, height: 30}}/>

                    <div className="dropdown-menu dropdown-menu-right ">
                        <p id='nameItem' className="dropdown-item mb-0">
                            {name} <br/> <small>{login}</small>
                        </p>

                        <div className="dropdown-divider"/>
                        <button className="dropdown-item" type="button" onClick={() => signOut(callback)}>
                            Sign out
                        </button>
                    </div>
                </div>
            </div>


        </nav>
    )
}

const mapStateToProps = state => ({
    name: state.auth.name,
    login: state.auth.login
});

const mapDispatchToProps = (dispatch) => ({
    signOut: (callback) => dispatch(requestSignOut(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);