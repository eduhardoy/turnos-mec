import React from 'react'
import CategoriesPaperworks from '../Components/Templates/CategoriesPaperworks/CategoriesPaperworks'
import Header from '../Components/Header/Header'
import StepIndicator from '../Components/Organisms/StepIndicator/StepIndicator'
import ListCategoriesPaperworks from '../Components/Organisms/ListCategoriesPaperworks/ListCategoriesPaperworks'
import { useParams } from "react-router-dom";

const CategoriesPaperworksView = () => {
    let { id } = useParams
    console.log(id)
    return <CategoriesPaperworks header={<Header />} stepIndicator={<StepIndicator stepActive={2} backPath="/" nextPath="/identification"  disabledNextBtn={false} />} listCategoriesPaperworks={<ListCategoriesPaperworks />} />
}


export default CategoriesPaperworksView