import React, { useState } from 'react'
import OfficeType from '../Components/Templates/OfficeType/OfficeType'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import Cards from '../Components/Molecules/Cards/Cards'
import OfficeTypeSection from '../Components/Organisms/OfficeTypeSection/OfficeTypeSection'
import TitleBackground from '../titlesBackground.jpg'
import RRHHBackground from '../rrhhBackground.jpg'
//import { connect } from 'react-redux'


const OfficeTypeView = (props) => {
   // const { stepActive } = props

    const officeTypeCardData = [
        <Cards title="RRHH" subtitle="Entrar" backgroundImage={RRHHBackground}>asdasdasdsad</Cards>,
        <Cards title="Titulos" subtitle="Entrar" backgroundImage={TitleBackground} />,
    ]

    return <OfficeType header={<Header />} stepIndicator={<StepIndicator stepActive={0} path="/" disabledNextBtn={true} />} OfficeTypeSections={<OfficeTypeSection listOfficeTypeCard={officeTypeCardData} />} />     
}

/*
const mapStateToProps = state => {
    return {
        stepActive: state.stepActive
    }
}


export default connect(
    mapStateToProps
)(OfficeTypeView);
*/

export default OfficeTypeView