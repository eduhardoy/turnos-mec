import React, { useState } from 'react'
import PaperworksPersonalDepart from '../Components/Templates/PaperworksPersonalDepart/PaperworksPersonalDepart'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import RoleDisepa from '../Components/Organisms/RoleDisepa/RoleDisepa'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const RoleDisepaView = (props) => {
    const { shift, addRole } = props
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(false)

    return <PaperworksPersonalDepart header={<Header />} title={<Text variant="h5" >Ingresá tu rol o función</Text>} stepIndicator={<StepIndicator stepActive={1} backPath="/paperworksdisepa" nextPath="/identification"  disabledNextBtn={disabledNextBtn} />} listPaperworksPersonalDepart={<RoleDisepa setDisabledNextBtn={setDisabledNextBtn} shift={shift} addRole={addRole} />} />
}


const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRole: role => dispatch(addShift(role))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleDisepaView)
