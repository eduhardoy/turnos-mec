import React, { useState } from 'react'
import PaperworksDisepa from '../Components/Templates/PaperworksDisepa/PaperworksDisepa'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ListPaperworksDisepa from '../Components/Organisms/ListPaperworksDisepa/ListPaperworksDisepa'
import Text from '../Components/Atoms/Text/Text'
import { connect } from 'react-redux'
import { addShift } from '../Actions/Shift'


const PaperworksDisepaView = (props) => {
    const { addPaperworks } = props
    const [ disabledNextBtn, setDisabledNextBtn ] = useState(false)

    return <PaperworksDisepa header={<Header />} title={<Text variant="h5" >Seleccioná tema o categoría</Text>} stepIndicator={<StepIndicator stepActive={1} backPath="/" nextPath="/roledisepa"  disabledNextBtn={disabledNextBtn} />} listPaperworksDisepa={<ListPaperworksDisepa addPaperworks={addPaperworks} setDisabledNextBtn={setDisabledNextBtn} />} />
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
)(PaperworksDisepaView)
