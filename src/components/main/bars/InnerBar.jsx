import React from 'react'
import {connect} from "react-redux";
import {requestSignOut} from "../../../store/actions/auth";
import {hideSuggestions, showSuggestions} from "../../../store/actions/map";

function InnerBar({showSuggestions, userLocation, areSuggestionsVisible, hideSuggestions}) {
    return (
        <nav className="bg-light p-sm-2" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

            <div className='pl-2'>
                <button
                    className='btn btn-success btn-sm py-sm-1 lead'
                    style={{fontSize: '0.8em'}}
                    onClick={
                        areSuggestionsVisible ?
                            hideSuggestions :
                            showSuggestions
                    }
                >
                    {areSuggestionsVisible ?
                        "Hide suggestions" :
                        "Show suggestions"
                    }
                </button>
            </div>


            <div className='pl-3 pr-2' style={{flex: 1}}>
                {
                    userLocation ?
                        <React.Fragment>
                            <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                                {userLocation.name}
                            </div>
                            <div className='' style={{fontSize: '0.7em'}}>
                                Current location
                            </div>
                        </React.Fragment>
                        :
                        <div style={{fontSize: '0.9em'}}>
                            Your location is not selected. You can set your location by clicking on the map below.
                        </div>
                }

            </div>


        </nav>
    )
}

const mapStateToProps = state => ({
    areSuggestionsVisible: state.map.showSuggestions,
    userLocation: state.map.userLocation
});

const mapDispatchToProps = (dispatch) => ({
    showSuggestions: () => dispatch(showSuggestions()),
    hideSuggestions: () => dispatch(hideSuggestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(InnerBar);