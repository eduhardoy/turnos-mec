import React, { useState } from 'react'
import PaperworksSecondaryLevel from '../Components/Templates/PapersworksSecondaryLevel/PaperworksSecondaryLevel'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ListPaperworksSecondaryLevel from '../Components/Organisms/ListPaperworksSecondaryLevel/ListPaperworksSecondaryLevel'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const PaperworksSecondaryLevelView = (props) => {
    const { addPaperworks } = props
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(true)

    return <PaperworksSecondaryLevel header={<Header />} title={<Text variant="h5" >Seleccioná tema o categoría</Text>} stepIndicator={<StepIndicator stepActive={1} backPath="/" nextPath="/rolesecondary"  disabledNextBtn={disabledNextBtn} />} listPaperworksSecondaryLevel={<ListPaperworksSecondaryLevel addPaperworks={addPaperworks} setDisabledNextBtn={setDisabledNextBtn} />} />
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
)(PaperworksSecondaryLevelView)
