import React from 'react'
import {connect} from 'react-redux'
import { withTranslation } from 'react-i18next';

function SideBar({colleagues, group, t}) {

    const activeNumber = colleagues.filter(colleague => colleague.active).length;

    return (
        <div className='bg-light' style={{minWidth: 300, width: 300, height: 'calc(100vh - 52px)'}}>
            <div className="p-1 border-light rounded-lg m-3"
                 style={{display: 'flex', maxHeight: '95%', overflow: 'auto', flexDirection: 'column', backgroundColor: '#f2f2f2'}}>

                <div className="pt-1 pb-1 mr-2 ml-2 "
                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className='p-1 pr-2' style={{display: 'flex', flexDirection: 'column'}}>
                        <div className='text-muted' style={{fontSize: '0.7em'}}>
                            {t("Group")}
                        </div>
                        <div className="font-weight-bold" style={{fontSize: '0.9em'}}>
                            {group}
                        </div>
                    </div>

                    <div className='text-right p-1 pl-2' style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                        <div className='text-muted' style={{fontSize: '0.7em'}}>
                            {t('Colleagues')}
                        </div>
                        <div className='font-weight-bold' style={{fontSize: '0.9em'}}>
                            {activeNumber}/{colleagues.length}
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


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SideBar));