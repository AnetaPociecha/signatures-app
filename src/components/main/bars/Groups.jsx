import React from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import Radio from '@material-ui/core/Radio';
import {changeGroup} from "../../../store/actions/group";


function Groups({t, allGroups, selectedGroup, changeGroup}) {

    const [tmpSelected, setTmpSelected] = React.useState(selectedGroup);

    return (
        <div id="groupsModal" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content p-4">

                    <div>
                            <div className="font-weight-bold pb-2 border-bottom">
                                {t('Groups')}
                            </div>

                    </div>

                    <div className='pt-2 pb-2'>

                            {allGroups.map(group =>
                                <div key={group.id}  style={{display: 'flex', alignItems: 'center'}}>
                                    <div>
                                        <Radio
                                            className='m-1 p-0'
                                            checked={tmpSelected === group}
                                            onChange={() => {setTmpSelected(group)}}
                                            value={group.id}
                                            color="dark"
                                        />
                                    </div>

                                    <div className="" style={{color: 'black'}}>
                                        {group.groupName}
                                    </div>
                                </div>
                            )}

                    </div>

                    <div className='pt-4' style={{display: 'flex', justifyContent: 'flex-end'}}>

                        {/*<div>*/}
                        {/*    <button*/}
                        {/*        className='btn btn-secondary py-sm-1 rounded-lg'*/}
                        {/*        style={{fontSize: '0.9em'}}*/}
                        {/*        onClick={() => {*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        {t('LeaveGroup')}*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        <div>
                            <button
                                data-dismiss="modal"
                                className='btn btn-danger py-sm-1 rounded-lg'
                                style={{fontSize: '0.9em', backgroundColor: '#ab1f3c'}}
                                onClick={() => {
                                    changeGroup(tmpSelected)
                                }}
                            >
                                {t('SelectGroup')}
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    changeGroup: (group) => dispatch(changeGroup(group)),
});

const mapStateToProps = state => ({
    selectedGroup: state.group.selectedGroup,
    allGroups: state.group.allGroups
});


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Groups));