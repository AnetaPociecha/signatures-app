import React from 'react'
import {connect} from 'react-redux'

function SideBar({colleagues}) {

    const activeNumber = colleagues.filter(colleague => colleague.active).length;

    return (
        <div className="p-1 bg-light border" style={{display: 'flex', flexDirection: 'column'}}>

            <div className="p-1 border-bottom" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                    <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                        agh.edu.pl
                    </div>

                    <div style={{fontSize: '0.7em'}}>
                        Group
                    </div>
                </div>


                <div className='text-right p-1 pl-2' style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <div className='font-weight-bold' style={{fontSize: '0.9em'}}>
                        {activeNumber}/{colleagues.length}
                    </div>

                    <div style={{fontSize: '0.7em'}}>
                        Colleagues
                    </div>
                </div>

            </div>


            {colleagues && colleagues.map(colleague => (
                <div className="p-1 border-bottom"
                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                    <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{fontSize: '0.9em'}}>
                            {colleague.name}
                        </div>

                        <div style={{fontSize: '0.7em'}}>
                            {colleague.locationName}
                        </div>
                    </div>

                    <div style={{fontSize: '0.7em'}}>
                        {colleague.active && 'Active'}
                    </div>

                </div>
            ))
            }

        </div>
    )
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
    colleagues: state.map.colleagues
});


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);