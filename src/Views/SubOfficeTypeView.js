import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import SubOfficeType from '../Components/Templates/SubOfficeType/SubOfficeType'
import SubOfficeTypeSections from '../Components/Organisms/SubOfficeTypeSections/SubOfficeTypeSections'
import Text from '../Components/Atoms/Text/Text'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const SubOfficeTypeView = (props) => {
    const { addOffice, shift } = props
    //let { id } = useParams();
    console.log("SHIFT", shift)
    useEffect(() => {
        //get to api subOfficeType by id params
    }, [])

    return <SubOfficeType header={<Header />} stepIndicator={<StepIndicator addStepActive={0} backPath="/" nextPath="/identification" disabledNextBtn={false} />} subOfficeTypeSections={<SubOfficeTypeSections addOffice={addOffice} />} />     
}



const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOffice: office => dispatch(addShift(office))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubOfficeTypeView);
