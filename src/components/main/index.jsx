import React from 'react';
import MapModel from './map/mapModel'
import ContainerDimensions from 'react-container-dimensions'
import InnerBar from "./bars/InnerBar";
import SideBar from "./bars/SideBar";
import TopBar from "./bars/TopBar";

function Index() {

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>

            <TopBar/>
            <InnerBar/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                minWidth: 400,
                minHeight: 200,
                maxWidth: '100vw'
            }}>

                <ContainerDimensions>
                    {({width, height}) => <MapModel width={width} height={height}/>}
                </ContainerDimensions>


                <SideBar/>

            </div>
        </div>
    );
}

export default Index;