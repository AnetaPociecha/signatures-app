import React from 'react';
import {connect} from "react-redux";
import {requestSignIn, cancelAuthFailure} from '../../store/actions/auth'
import {
    useHistory,
    useLocation
} from "react-router-dom";

function LoginPage({closeAuthError, authError, signIn}) {

    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || {from: {pathname: "/"}};

    const callback = () => {
        history.replace(from);
    };

    return (
        <div className='vw-100 d-flex justify-content-center'>
            <div className='row m-4' style={{maxWidth: 400}}>

                <div className='col-12'>
                    <p className="h4 text-center mb-4 font-weight-lighter">Sign in to our App</p>
                </div>

                <div class="alert alert-danger col-12 alert-dismissible fade show" role="alert" hidden={!authError}>
                    Incorrect username or password
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                            onClick={closeAuthError}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>


                <div className='col-12 border p-3 bg-white rounded p-3'>
                    <label htmlFor="defaultFormLoginEmailEx" className="font-weight-lighter">
                        Email
                    </label>
                    <input
                        type="email"
                        id="defaultFormLoginEmailEx"
                        className="form-control"
                    />
                    <br/>
                    <label htmlFor="defaultFormLoginPasswordEx" className="font-weight-lighter">
                        Password
                    </label>
                    <input
                        type="password"
                        id="defaultFormLoginPasswordEx"
                        className="form-control"
                    />
                    <div className="text-center mt-4">
                        <button className='btn btn-success w-100 mt-1' onClick={() => signIn("login","password",callback)}>Sign in</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

