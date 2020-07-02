import React, { useState } from 'react'
import PaperworksPersonalDepart from '../Components/Templates/PaperworksPersonalDepart/PaperworksPersonalDepart'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ListPaperworksPersonalDepart from '../Components/Organisms/ListPaperworksPersonalDepart/ListPaperworksPersonalDepart'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const PaperworksPersonalDepartView = (props) => {
    const { addPaperworks } = props
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(false)

    return <PaperworksPersonalDepart header={<Header />} title={<Text variant="h5" >Ingresá el número de expediente</Text>} stepIndicator={<StepIndicator stepActive={1} backPath="/" nextPath="/identification"  disabledNextBtn={disabledNextBtn} />} listPaperworksPersonalDepart={<ListPaperworksPersonalDepart setDisabledNextBtn={setDisabledNextBtn} addPaperworks={addPaperworks} />} />
}


const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPaperworks: office => dispatch(addShift(office))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaperworksPersonalDepartView)
