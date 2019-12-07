import React from 'react';
import MapModel from './map/mapModel'
import ContainerDimensions from 'react-container-dimensions'
import InnerBar from "./bars/InnerBar";
import SideBar from "./bars/SideBar";
import TopBar from "./bars/TopBar";

function Index() {

    const [center, setCenter] = React.useState([50.061687, 19.937306]);

    return (
        <div style={{height: '100vh', maxHeight: '100vh', width: '100vw'}} className='bg-light'>
            <TopBar/>
            <div style={{width: '100vw', maxWidth: '100vw', display: 'flex', flexDirection: 'row'}}>
                <SideBar/>

                <div>

                    <InnerBar location={center}/>

                    <div
                        style={{
                            width: 'calc(100vw - 300px)',
                            height: 'calc(100vh - 110px)',
                            boxShadow: '-2px -2px 8px -2px rgba(122,122,122,1)'
                        }}
                    >
                        <ContainerDimensions>
                            {({width, height}) => <MapModel width={width} height={height} center={center}
                                                            setCenter={setCenter}/>}
                        </ContainerDimensions>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Index;
