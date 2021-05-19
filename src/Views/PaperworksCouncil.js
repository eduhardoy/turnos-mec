import React, { useState } from 'react'
import PaperworksCouncil from '../Components/Templates/PapersworksCouncil/PaperworksCouncil'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ListPaperworksCouncil from '../Components/Organisms/ListPaperworksCouncil/ListPaperworksCouncil'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const PaperworksCouncilView = (props) => {
    const { addPaperworks } = props
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(false)

    return <PaperworksCouncil header={<Header />} title={<Text variant="h5" >Seleccioná tema o categoría</Text>} stepIndicator={<StepIndicator stepActive={1} backPath="/" nextPath="/identification"  disabledNextBtn={disabledNextBtn} />} listPaperworksCouncil={<ListPaperworksCouncil addPaperworks={addPaperworks} setDisabledNextBtn={setDisabledNextBtn} />} />
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
)(PaperworksCouncilView)
