import React from 'react';
import {connect} from "react-redux";
import {requestSignIn, cancelAuthFailure} from '../../store/actions/auth'
import {
    useHistory,
    useLocation
} from "react-router-dom";
import logo from './logo.PNG';

function Index({closeAuthError, authError, signIn}) {

    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/"}};

    const callback = () => {
        history.replace(from);
    };

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className='vw-100 vh-100 d-flex justify-content-center align-items-center bg-dark'>

            <div className='p-5 bg-white rounded-lg'>

                <div className='col-12 pb-3 mb-1 border-bottom d-flex justify-content-center align-items-center'>
                    <img style={{width: 250}} src={logo} alt='logo'/>
                </div>

                <div className='col-12 pr-5 pl-5 pt-3'>

                    <div className='p-3' style={{minWidth: 300}}>

                        <div
                            className="alert alert-danger col-12 py-sm-1 alert-dismissible fade show"
                            role="alert"
                            style={{fontSize: '0.8em'}}
                            hidden={!authError}
                        >
                            <div>
                                Incorrect email or password
                            </div>
                            <button type="button" className="close py-sm-1"
                                    onClick={closeAuthError} style={{fontSize: '1.3em'}}>
                                <span>&times;</span>
                            </button>
                        </div>

                        <input
                            type="email"
                            placeholder='Email'
                            className="form-control rounded-lg"
                            style={{fontSize: '0.8em'}}
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                        <br/>

                        <input
                            type="password"
                            placeholder='Password'
                            className="form-control rounded-lg"
                            style={{fontSize: '0.8em'}}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <br/>


                        <div className="text-center">
                            <button
                                className='btn btn-danger w-100 py-sm-1 rounded-lg'
                                style={{fontSize: '0.9em', backgroundColor: '#ab1f3c'}}
                                onClick={() => signIn(login, password, callback)}
                            >
                                Sign in
                            </button>
                        </div>
                        <br/>
                        <div
                            className='text-muted text-center'
                            style={{fontSize: '0.75em'}}
                        >
                            Forgot password?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    authError: state.auth.authError
});

const mapDispatchToProps = (dispatch) => ({
    signIn: (login, password, callback) => dispatch(requestSignIn(login, password, callback)),
    closeAuthError: () => dispatch(cancelAuthFailure())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
