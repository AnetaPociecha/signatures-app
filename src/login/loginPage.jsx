import React from 'react';

class LoginPage extends React.Component {

    state = {
        openErrorAlert: false
    }

    render() {
        return (
            <div className='vw-100 d-flex justify-content-center'>
                <div className='row m-4' style={{ maxWidth: 400 }}>

                    <div className='col-12'>
                        <p className="h4 text-center mb-4 font-weight-lighter">Sign in to our App</p>

                    </div>

                    <div class="alert alert-danger col-12 alert-dismissible fade show" role="alert" hidden={!this.state.openErrorAlert}>
                        Incorrect username or password
                         <button type="button" class="close" data-dismiss="alert" aria-label="Close" 
                         onClick={() => this.setState({openErrorAlert: false})}>
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
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="font-weight-lighter">
                            Password
                        </label>
                        <input
                            type="password"
                            id="defaultFormLoginPasswordEx"
                            className="form-control"
                        />
                        <div className="text-center mt-4">
                            <button className='btn btn-success w-100 mt-1' onClick={this.props.onLogin}>Sign in</button> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onLoginError() {
        this.setState({openErrorAlert: true})
    }

}

export default LoginPage;
