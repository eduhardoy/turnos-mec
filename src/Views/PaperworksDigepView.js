import React from 'react'
import PaperworksDigep from '../Components/Templates/PaperworksDigep/PaperworksDigep'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ListPaperworksDigep from '../Components/Organisms/ListPaperworksDigep/ListPaperworksDigep'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const PaperworksDigepView = (props) => {
    const { addPaperworks } = props

    return <PaperworksDigep header={<Header />} title={<Text variant="h5" >Seleccioná tema o categoría</Text>} stepIndicator={<StepIndicator stepActive={1} backPath="/" nextPath="/identification"  disabledNextBtn={false} />} listPaperworksDigep={<ListPaperworksDigep addPaperworks={addPaperworks} />} />
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
)(PaperworksDigepView)
