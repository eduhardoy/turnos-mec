import React, { useState } from 'react'
import Cards from '../Components/Cards/Cards'
import SubTipoTramiteData from '../Components/SubTiposTramites/SubTiposTramites'
import IdentificacionDni from '../Components/IdentificacionDni/IdentificacionDni'
import ModalidadTurno from '../Components/ModalidadTurno/ModalidadTurno'
import SeleccionTurno from '../Components/SeleccionTurno/SeleccionTurno'
import Confirmacion from '../Components/Confirmacion/Confirmacion'
import { connect } from 'react-redux';
import Steppers from '../Components/Steppers/Steppers'
import { makeStyles } from '@material-ui/core/styles';


const Home = (props) => {
    const classes = useStyles();
    const [dniPassportValid, setDniPassportValid] = useState("");
    const { stepActive, subTipoTramiteData, modalidadAclaracion, userData, selectedFehaHoraTurno } = props

    const validateDniPassport = (value) => {
        setDniPassportValid(value)
    }
    console.log("SUBTIPO",subTipoTramiteData, )
    console.log("SUBTIPO",modalidadAclaracion,)
    console.log("SUBTIPO",userData)
    console.log("SUBTIPO",selectedFehaHoraTurno)

    return (
        <div className={classes.root}>
            <Steppers dniPassportValid={dniPassportValid} validateDniPassport={validateDniPassport}></Steppers>
            {
                stepActive === 0 && subTipoTramiteData.length === 0 ? <Cards />
                : stepActive === 0 && subTipoTramiteData.length !== 0 ? <SubTipoTramiteData subTipoTramiteData={subTipoTramiteData}></SubTipoTramiteData>
                    : stepActive === 1 ? <IdentificacionDni validateDniPassport={validateDniPassport} />
                        : stepActive === 2 ? <SeleccionTurno />
                            : stepActive === 3 ?<ModalidadTurno />
                                : stepActive === 4 ? <Confirmacion />
                                    : null
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        stepActive: state.stepActive,
        subTipoTramiteData: state.subTipoTramiteData,
        selectedSubTipoTramiteData: state.selectedSubTipoTramiteData,
        selectedFehaHoraTurno: state.selectedFehaHoraTurno,
        userData: state.userData,
        modalidadAclaracion: state.modalidadAclaracion
    };
};

/*const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProductToCart(product)),
        removeProduct: product => dispatch(removeProductFromCart(product))
    };
};*/

export default connect(
    mapStateToProps
)(Home);


const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: "auto"
    }
});