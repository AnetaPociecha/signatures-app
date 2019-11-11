import * as React from "react";
import {Map, TileLayer, Marker, Popup, Circle, CircleMarker, Tooltip} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {connect} from "react-redux";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapModel = (props) => {
    return (
        <Map center={[50.061986, 19.936749]} zoom={16} style={{height: '100vh', width: '100vw'}} zoomControl={false}
             onClick={e => console.log(e)}>
            <TileLayer
                attribution=""
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>

                <Tooltip>Hej</Tooltip>
            </Marker>


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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapModel)