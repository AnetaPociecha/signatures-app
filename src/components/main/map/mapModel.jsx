import * as React from "react";
import {Map, TileLayer, Marker, Popup, Circle} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {connect} from "react-redux";
import {requestRemovingUserLocation, requestSettingUserLocation} from "../../../store/actions/map";
import {useEffect} from "react";
import { withTranslation } from 'react-i18next';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const userIcon = L.icon({
    iconRetinaUrl: require('./marker-icon-2x-red.png'),
    iconUrl: require('./marker-icon-red.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),

    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [13, 41],
    shadowAnchor: [13, 41],
    popupAnchor: [0, -34]
});

function MapModel({userLocation, setUserLocation, removeUserLocation, colleagues, suggestions, showSuggestions, name, login, height, width, t}) {

    useEffect(() => {
        console.log(ref.leafletElement.getBounds())

    });

    const [center, setCenter] = React.useState([50.061687, 19.937306]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setCenter([position.coords.latitude, position.coords.longitude])
        });
    }, []);


    let ref = undefined;

    return (
        <Map ref={node => ref = node} center={center} zoom={16}
             style={{height: height, width: width}} zoomControl={false}
             onClick={e => setUserLocation([e.latlng.lat, e.latlng.lng])}

        >
            <TileLayer
                attribution=""
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {userLocation &&
            <Marker icon={userIcon} position={userLocation.latlng}>
                <Popup>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <div className='p-1 pb-2'>
                            {name} <br/>
                            {login} <br/>
                        </div>

                        <div>
                            <button className='btn btn-danger btn-sm' onClick={removeUserLocation}>
                                {t('Remove')}
                            </button>
                        </div>
                    </div>
                </Popup>
            </Marker>
            }

            {colleagues && colleagues.filter(colleague => colleague.active).map(colleague => (

                <Marker key={colleague.login} position={colleague.location}>
                    <Popup>
                        {colleague.name} <br/>
                        {colleague.login} <br/>
                    </Popup>
                </Marker>
            ))
            }

            {showSuggestions && suggestions && suggestions.map(suggestion => (
                <Circle
                    key={suggestion.location}
                    center={suggestion.location}
                    opacity={0.15}
                    fillColor="green"
                    radius={suggestion.radius}/>
            ))
            }

        </Map>
    )

}

const mapStateToProps = state => ({
    userLocation: state.map.userLocation,
    colleagues: state.map.colleagues,
    suggestions: state.map.suggestions,
    showSuggestions: state.map.showSuggestions,
    name: state.auth.name,
    login: state.auth.login
});

const mapDispatchToProps = dispatch => ({
    setUserLocation: (location) => dispatch(requestSettingUserLocation(location)),
    removeUserLocation: () => dispatch(requestRemovingUserLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(MapModel))
