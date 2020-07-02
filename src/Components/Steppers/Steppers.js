import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { activeStep } from "../../Actions/StepActive";
import { deleteSubTipoTramite } from '../../Actions/SubTipoTramiteData'
import { deleteFechaHoraTurno } from '../../Actions/SelectedFechaHoraTurno'
import { deleteUser } from '../../Actions/userData'
import { deleteModalidadAclaracion } from '../../Actions/ModalidadAclaracion'
import './Steppers.css'
import subTipoTramiteData from "../../Reducers/subTipoTramiteData";

const Steppers = (props) => {
  const classes = useStyles();
  const [disabledBtnNext, setDisabledBtnNext] = useState(true);
  const steps = getSteps();
  const {
    dniPassportValid, validateDniPassport, stepActive, changeStep, deleteSubTipoTramite, subTipoTramiteData, 
    selectedSubTipoTramite, selectedFechaHoraTurno, modalidadAclaracion, userData, deleteFechaHoraTurno, deleteUser, deleteModalidadAclaracion
  } = props;

  useEffect(() => {
    if(stepActive === 0){
      if(selectedSubTipoTramite !== ""){
        setDisabledBtnNext(false)
      }
     }
    if(stepActive === 1){
      if(dniPassportValid === "accept"){
        changeStep(stepActive + 1);
        validateDniPassport("")
        setDisabledBtnNext(false)
       }else if(dniPassportValid === "validSignup"){
         setDisabledBtnNext(false)
       }else{
        setDisabledBtnNext(true)
       }
    }
    if(stepActive === 2){
      if(selectedFechaHoraTurno.length === 0){
        setDisabledBtnNext(true)
      }else{
        setDisabledBtnNext(false)
      }
    }

  }, [dniPassportValid, stepActive, selectedSubTipoTramite, selectedFechaHoraTurno]);

  const handleBack = () => {
    if(stepActive === 0){
      deleteSubTipoTramite()
    }else{
      changeStep(stepActive - 1);
    }
  };

  const handleNext = () => {
    if(stepActive === 1 && !setDisabledBtnNext){
      validateDniPassport("")
    }
    if(stepActive === 3){
      var dataTurno = {
        tipoTramite: selectedSubTipoTramite,
        usuario: userData,
        fecha: selectedFechaHoraTurno.fecha,
        hora: selectedFechaHoraTurno.hora,
        modalidadAtencion: modalidadAclaracion.modalidad,
        aclaraciones: modalidadAclaracion.aclaraciones
      }
      console.log(dataTurno, "TURNOOO")
    }

    changeStep(stepActive + 1);
  };

  const handleReset = () => {
    deleteFechaHoraTurno()
    deleteUser()
    deleteModalidadAclaracion()
    deleteSubTipoTramite()
    changeStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={stepActive} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {stepActive === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button color="primary" variant="contained" onClick={handleReset}>Sacar otro turno</Button>
          </div>
        ) : (
          <div>
            {stepActive === 0 && subTipoTramiteData.length === 0 ? null
            : (
              <div className={classes.divBtnVolverSeguir}>
                <Button
                 // disabled={activeStep === -2}
                 color="primary"
                 variant="outlined"
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Volver
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={disabledBtnNext}
                >
                  {stepActive !== 3 ? "Seguir" : "Finalizar Reserva"}
                </Button>
              </div>
                )
            }
            <Typography className={classes.instructions}>
              {getStepContent(stepActive)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}


const getSteps = () => {
  return [
    "Elegí el trámite a realizar",
    "Ingresá con tu documento",
    "Elegí una fecha y una hora",
    "Seleccioná la modalidad",
  ];
};


const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return "Elegí el trámite a realizar";
    case 1:
      return "Completá tus datos";
    case 2:
      return "Elegí la fecha";
    case 3:
      return "Último paso!";
    default:
      return "Unknown stepIndex";
  }
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: 30,
  },
  divBtnVolverSeguir: {
    marginTop: "2%"
  }
}));


const mapStateToProps = (state) => {
  return {
    stepActive: state.stepActive,
    subTipoTramiteData: state.subTipoTramiteData,
    selectedSubTipoTramite: state.selectedSubTipoTramite,
    selectedFechaHoraTurno: state.selectedFechaHoraTurno,
    modalidadAclaracion: state.modalidadAclaracion,
    userData: state.userData
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    changeStep: (stepPosition) => dispatch(activeStep(stepPosition)),
    deleteSubTipoTramite: () => dispatch(deleteSubTipoTramite()),
    deleteFechaHoraTurno: () => dispatch(deleteFechaHoraTurno()),
    deleteUser: () => dispatch(deleteUser()),
    deleteModalidadAclaracion: () => dispatch(deleteModalidadAclaracion())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Steppers);
