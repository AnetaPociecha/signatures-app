import React from 'react'
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {requestSignOut} from "../../../store/actions/auth";
import logo from './logo.png';

function TopBar({name, login, signOut}) {

    const history = useHistory();

    const callback = () => {
        history.push("/login")
    };

    return (
        <nav className="navbar navbar-dark bg-dark pb-0 pt-0 pl-0"
             style={{display: 'flex', flexDirection: 'row', width: '100vw'}}>

            <img style={{width: 300}} src={logo} alt='logo'/>

            <div className='nav-item text-right' style={{flex: 1}}>

                <div className="btn-group">
                    <button id='rock' className="rounded-circle mr-2 ml-1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" style={{width: 35, height: 35}}/>

                    <div className="dropdown-menu dropdown-menu-right ">
                        {/*<p id='nameItem' className="dropdown-item mb-0">*/}
                        {/*    /!*{name} <br/> <small>{login}</small>*!/*/}
                        {/*    <small>Your login</small> <br/> {login}*/}
                        {/*</p>*/}

                        {/*<div className="dropdown-divider"/>*/}
                        <button className="dropdown-item" type="button" onClick={() => signOut(callback)}>
                            Sign out
                        </button>
                    </div>
                </div>

                <div className="navbar-brand pl-1 text-light" style={{fontSize: '1em'}}>
                    {name}
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