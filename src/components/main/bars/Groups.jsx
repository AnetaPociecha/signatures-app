import React from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import Radio from '@material-ui/core/Radio';

const groups = [
    {
        id: 1,
        name: 'Agh1'
    },
    {
        id: 2,
        name: 'Agh2'
    },
    {
        id: 3,
        name: 'Agh3'
    },
];

function Groups({t}) {

    const [selectedValue, setSelectedValue] = React.useState(groups[0].id);

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };

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

                            {groups && groups.map(group =>
                                <div key={group.id}  style={{display: 'flex', alignItems: 'center'}}>
                                    <div>
                                        <Radio
                                            className='m-1 p-0'
                                            checked={selectedValue === group.id}
                                            onChange={() => {setSelectedValue(group.id)}}
                                            value={group.id}
                                            color="dark"
                                        />
                                    </div>

                                    <div className="" style={{color: 'black'}}>
                                        {group.name}
                                    </div>
                                </div>
                            )}

                    </div>

                    <div className='pt-4' style={{display: 'flex', justifyContent: 'space-between'}}>

                        <div>
                            <button
                                className='btn btn-secondary py-sm-1 rounded-lg'
                                style={{fontSize: '0.9em'}}
                                onClick={() => {
                                }}
                            >
                                {t('LeaveGroup')}
                            </button>
                        </div>

                        <div>
                            <button
                                data-dismiss="modal"
                                className='btn btn-danger py-sm-1 rounded-lg'
                                style={{fontSize: '0.9em', backgroundColor: '#ab1f3c'}}
                                onClick={() => {
                                }}
                            >
                                {t('SelectGroup')}
                            </button>
                        </div>



                    </div>

                    {/*<div className="modal-header">*/}
                    {/*    <div className="font-weight-bold ">*/}
                    {/*        {t('Groups')}*/}
                    {/*    </div>*/}
                    {/*    <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                    {/*        <span aria-hidden="true">&times;</span>*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    {/*<div className="modal-body m-0 p-1">*/}

                    {/*    {groups && groups.map(group =>*/}
                    {/*        <div key={group.id}  style={{display: 'flex', alignItems: 'center'}}>*/}
                    {/*            <div>*/}
                    {/*                <Radio*/}
                    {/*                    className='m-0 pb-1'*/}
                    {/*                    checked={true}*/}
                    {/*                    onChange={() => {*/}
                    {/*                    }}*/}
                    {/*                    value="d"*/}
                    {/*                    color="default"*/}
                    {/*                />*/}
                    {/*            </div>*/}

                    {/*            <div className="" style={{color: 'black'}}>*/}
                    {/*                {group.name}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )}*/}


                    {/*</div>*/}

                    {/*<div className="modal-footer">*/}
                    {/*    <button*/}
                    {/*        className='btn btn-danger py-sm-1 rounded-lg'*/}
                    {/*        style={{fontSize: '0.9em', backgroundColor: '#ab1f3c'}}*/}
                    {/*        onClick={() => {*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {t('SelectGroup')}*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
    colleagues: state.map.colleagues,
    group: state.auth.group
});


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Groups));