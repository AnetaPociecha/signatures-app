import React from 'react'
import {connect} from "react-redux";
import {hideSuggestions, showSuggestions} from "../../../store/actions/map";
import Checkbox from '@material-ui/core/Checkbox';

function InnerBar({showSuggestions, userLocation, areSuggestionsVisible, hideSuggestions}) {

    return (
        <nav className="bg-light p-sm-2" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

            <div>
                <Checkbox
                    defaultChecked
                    color="default"
                    checked={areSuggestionsVisible}
                    onClick={
                        areSuggestionsVisible ?
                            hideSuggestions :
                            showSuggestions
                    }
                />
            </div>

            <div className="font-weight-bold pr-3 border-right mr-1">
                Suggestions
            </div>

            <div className='pl-3 pr-2' style={{flex: 1}}>
                {
                    userLocation ?
                        <React.Fragment>
                            <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                                {userLocation.name}
                            </div>
                            <div className='text-muted' style={{fontSize: '0.7em'}}>
                                Your location
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