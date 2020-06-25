import React from 'react'
import OfficeType from '../Components/Templates/OfficeType/OfficeType'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import OfficeTypeSection from '../Components/Organisms/OfficeTypeSection/OfficeTypeSection'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const OfficeTypeView = (props) => {
    const { addShift } = props

    return <OfficeType header={<Header />} stepIndicator={<StepIndicator stepActive={0} backPath="/" nextPath="/" disabledNextBtn={true} />} OfficeTypeSections={<OfficeTypeSection addShift={addShift} />} />     
}


const mapStateToProps = state => {
    return {
        stepActive: state.stepActive
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
)(OfficeTypeView)

