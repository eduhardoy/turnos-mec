import React from 'react'
import PanelExpansion from '../PanelExpansion/PanelExpansion'
import { connect } from 'react-redux'
import { changeSubTipoTramite } from '../../Actions/SelectedSubTipoTramite'

const SubTiposTramites = (props) => {
    const {subTipoTramiteData, changeSubTipoTramite, selectedSubTipoTramite} = props

    return (
        <div>
            {subTipoTramiteData.map(data => <PanelExpansion panelForm={true} selectedSubTipoTramite={selectedSubTipoTramite} title={data.title}  changeSubTipoTramite={changeSubTipoTramite} ><p>{data.content}</p> </PanelExpansion>)} 
        </div>    
    )
}


const mapStateToProps = state => {
    return {
        selectedSubTipoTramite: state.selectedSubTipoTramite
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSubTipoTramite: subTipoTramite => dispatch(changeSubTipoTramite(subTipoTramite))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubTiposTramites);


