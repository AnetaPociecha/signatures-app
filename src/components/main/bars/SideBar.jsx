import React from 'react'
import {connect} from 'react-redux'
import {withTranslation} from 'react-i18next';
import Groups from "./Groups";

function SideBar({t, selectedGroup}) {

    const active = selectedGroup && selectedGroup.groupMembers.filter(member => member.currentLocation).length;
    const all = selectedGroup && selectedGroup.groupMembers.length;

    return (
        <div className='bg-light' style={{minWidth: 300, width: 300, height: 'calc(100vh - 52px)'}}>


            {selectedGroup && <div
                className="p-1 border-light rounded-lg m-3"
                 style={{
                     display: 'flex',
                     maxHeight: '95%',
                     overflow: 'auto',
                     flexDirection: 'column',
                     backgroundColor: '#f2f2f2'
                 }}>

                <div className="pt-1 pb-1 mr-2 ml-2 "
                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                        <div className='text-muted' style={{fontSize: '0.7em'}}>
                            {t("Group")}
                        </div>
                        <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                            {selectedGroup.groupName}
                        </div>
                    </div>

                    <div className='text-right p-1 pl-2' style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                        <div className='text-muted' style={{fontSize: '0.7em'}}>
                            {t('Colleagues')}
                        </div>
                        <div className='font-weight-bold' style={{fontSize: '0.9em'}}>
                            {active}/{all}
                        </div>
                    </div>

                    <button id='threeDots' className="pr-2 ml-2" style={{width: 20, height: 20}}
                            type="button" data-toggle="modal" data-target="#groupsModal"/>


                </div>


                {selectedGroup.groupMembers.map(member => (
                    <div key={member.id} className="pt-1 pb-1 mr-2 ml-2 border-top"
                         style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                        <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='font-weight-bold' style={{fontSize: '0.9em'}}>
                                {member.name} {member.surname}
                            </div>

                            <div
                                style={{fontSize: '0.8em'}}
                            >
                                {member.currentLocation && member.currentLocation.name}
                            </div>
                        </div>

                        {/*<div style={{fontSize: '0.7em'}}>*/}
                        {/*    {colleague.active && 'Active'}*/}
                        {/*</div>*/}

                    </div>
                ))
                }

            </div>}

            <Groups/>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
    selectedGroup: state.group.selectedGroup
});


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SideBar));