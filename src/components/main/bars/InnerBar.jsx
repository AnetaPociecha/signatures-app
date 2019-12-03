import React from 'react'
import {connect} from "react-redux";
import {hideSuggestions, showSuggestions} from "../../../store/actions/map";
import {Checkbox} from '@material-ui/core';
import { withTranslation } from 'react-i18next';

function InnerBar({showSuggestions, userLocation, areSuggestionsVisible, hideSuggestions, t}) {

    return (
        <nav
            className="bg-light p-sm-2"
            style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'calc(100vw - 310px)'}}
        >

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
                {t('Suggestions')}
            </div>

            <div className='pl-3 pr-2' style={{flex: 1}}>
                {
                    userLocation ?
                        <React.Fragment>
                            <div className='text-muted' style={{fontSize: '0.7em'}}>
                                {t('YourLocation')}
                            </div>
                            <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                                {userLocation.name}
                            </div>
                        </React.Fragment>
                        :
                        <div style={{fontSize: '0.9em'}}>
                            {t("LocationNotSelected")}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(InnerBar));