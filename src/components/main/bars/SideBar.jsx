import React from 'react'
import {connect} from 'react-redux'

function SideBar({colleagues, group}) {

    const activeNumber = colleagues.filter(colleague => colleague.active).length;

    return (
        <div className='bg-light'>
        <div className="p-1 border-light rounded-lg ml-1 mr-1" style={{display: 'flex', flexDirection: 'column', backgroundColor:'#f2f2f2'}}>

            <div className="pt-1 pb-1 mr-2 ml-2 " style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                    <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                        {group}
                    </div>

                    <div className='text-muted' style={{fontSize: '0.7em'}}>
                        Group
                    </div>
                </div>


                <div className='text-right p-1 pl-2' style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <div className='font-weight-bold' style={{fontSize: '0.9em'}}>
                        {activeNumber}/{colleagues.length}
                    </div>

                    <div className='text-muted' style={{fontSize: '0.7em'}}>
                        Colleagues
                    </div>
                </div>
            </div>


            {colleagues && colleagues.map(colleague => (
                <div className="pt-1 pb-1 mr-2 ml-2 border-top"
                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                    <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                        <div className='font-weight-bold' style={{fontSize: '0.9em'}}>
                            {colleague.name}
                        </div>

                        <div
                            style={{fontSize: '0.8em'}}
                        >
                            {colleague.locationName}
                        </div>
                    </div>

                    {/*<div style={{fontSize: '0.7em'}}>*/}
                    {/*    {colleague.active && 'Active'}*/}
                    {/*</div>*/}

                </div>
            ))
            }

        </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
    colleagues: state.map.colleagues,
    group: state.auth.group
});


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);