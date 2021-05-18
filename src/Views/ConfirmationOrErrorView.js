import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import ConfirmationOrError from '../Components/Templates/ConfirmationOrError/ConfirmationOrError'
import TitleButton from '../Components/Molecules/TitleButton/TitleButton'
import Loading from '../Components/Atoms/Loading/Loading'
import clientApolo from '../Utils/ApoloClient'
import { SaveShift } from '../Services/turnos'
import { connect } from 'react-redux'
import { deleteShift } from '../Actions/Shift'


const ConfirmationOrErrorView = (props) => {
    const { shift, deleteShift } = props
    const [ loading, setLoading ] = useState(true)
    const [ responseSaveShift, setResponseSaveShift ] = useState()

    useEffect(() => {
        shift.data === undefined && (shift.data = {})
        clientApolo.mutate({
            mutation: SaveShift, 
            variables: shift
          })
          .then((resultSaveShift) => {
            setLoading(false)
              if(resultSaveShift.data.ReservarTurno){
                setResponseSaveShift(true)
                deleteShift()
              }else{
                setResponseSaveShift(false)
                deleteShift()
              }
          })
          .catch((error) => {
            setLoading(false)
            setResponseSaveShift(false)
            deleteShift()
            console.log("ERROR", error)
          })
    }, [])

    return (
        <React.Fragment>
            {
                loading ? <ConfirmationOrError header={<Header />}  loading={<Loading />} />
                : <ConfirmationOrError header={<Header />}  titleButton={<TitleButton titleText={responseSaveShift ? "¡Tu turno se reservó con éxito!" : "Ocurrió un error, no se ha podido reservar el turno." } titleButton={responseSaveShift ? "Reservar otro turno" : "Intetar nuevamente" } variantTitle="h5" variantButton="contained" colorButton="primary" path="/" />} />
            }
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {
        shift: state.shift
    }
}


const mapDispatchToProps = dispatch => {
    return {
        deleteShift: () => dispatch(deleteShift())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmationOrErrorView)
