import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import PanelExpansible from '../Components/Molecules/PanelExpansible/PanelExpansible'
import SubOfficeType from '../Components/Templates/SubOfficeType/SubOfficeType'
import SubOfficeTypeSections from '../Components/Organisms/SubOfficeTypeSections/SubOfficeTypeSections'
import Text from '../Components/Atoms/Text/Text'
import { useParams } from "react-router-dom";
//import { connect } from 'react-redux'
//import { addStepActive } from '../Actions/StepActive'


const SubOfficeTypeView = (props) => {
    //const { addStepActive } = props
    let { id } = useParams();

    useEffect(() => {
        //get to api subOfficeType by id params
    }, [])

    const subOfficeTypeData = [
        <PanelExpansible title="Oficina Central" ><Text> {id} Realizar tramites como</Text></PanelExpansible>,
        <PanelExpansible title="Certificaciones de servicios" ><Text>{id} Realizar tramites como</Text></PanelExpansible>,
        <PanelExpansible title="Departamento de personal central" ><Text>{id} Realizar tramites como</Text></PanelExpansible>
    ]

    return <SubOfficeType header={<Header />} stepIndicator={<StepIndicator addStepActive={0} path="subOffice" disabledNextBtn={false} />} subOfficeTypeSections={<SubOfficeTypeSections listSubOfficeType={subOfficeTypeData} />} />     
}

/*
const mapStateToProps = state => {
    return {
        stepActive: state.stepActive
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addStepActive: stepActive => dispatch(addStepActive(stepActive))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubOfficeTypeView);*/

export default SubOfficeTypeView