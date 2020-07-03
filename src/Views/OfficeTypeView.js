import React from 'react'
import OfficeType from '../Components/Templates/OfficeType/OfficeType'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import OfficeTypeSection from '../Components/Organisms/OfficeTypeSection/OfficeTypeSection'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const OfficeTypeView = (props) => {
    const { addDirections } = props

    return <OfficeType header={<Header />} stepIndicator={<StepIndicator stepActive={0} disabledNextBtn={true}  />} OfficeTypeSections={<OfficeTypeSection addDirections={addDirections} />} />     
}


const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDirections: direction => dispatch(addShift(direction))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfficeTypeView)

