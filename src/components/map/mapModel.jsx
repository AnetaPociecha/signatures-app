import * as React from "react";
import {Map, TileLayer, Marker, Popup, Circle, CircleMarker, Tooltip} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {connect} from "react-redux";
import {requestRemovingUserLocation, requestSettingUserLocation} from "../../store/actions/map";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapModel = ({userLocation, setUserLocation, removeUserLocation}) => {

    console.log(userLocation);

    return (
        <Map center={[50.061986, 19.936749]} zoom={16} style={{height: '100vh', width: '100vw'}} zoomControl={false}
             onClick={e => {
                 console.log('clicked')
                 setUserLocation([e.latlng.lat, e.latlng.lng])
             }}>
            <TileLayer
                attribution=""
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {userLocation &&
                <Marker position={userLocation}>
                    <Popup>
                        My location <br/>
                        <button onClick={removeUserLocation}>
                            Remove
                        </button>
                    </Popup>

                </Marker>
            }


            {/*    <Circle*/}
            {/*        center={{lat:51.505, lng:-0.09}}*/}
            {/*        opacity={1}*/}
            {/*        fillColor="blue"*/}
            {/*        radius={200000}>*/}

            {/*        <Popup minWidth={90}>*/}
            {/*<span>*/}
            {/*  Nananana*/}
            {/*</span>*/}
            {/*        </Popup>*/}

            {/*    </Circle>*/}

        </Map>
    )
};

const mapStateToProps = state => ({
    userLocation: state.map.userLocation
});

const mapDispatchToProps = dispatch => ({
    setUserLocation: (location) => dispatch(requestSettingUserLocation(location)),
    removeUserLocation: () => dispatch(requestRemovingUserLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapModel)