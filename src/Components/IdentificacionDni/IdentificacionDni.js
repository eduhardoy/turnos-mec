import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import ErDni from "../../Utils/ErDni";
import ErSoloNumeros from "../../Utils/ErSoloNumeros";
import ErEmail from "../../Utils/ErEmail"
import './Identificacion.css'
import { connect } from 'react-redux'
import { addUser } from '../../Actions/userData'
import { login } from '../../Services/users'

const IdentificacionDni = (props) => {
  const classes = useStyles();
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [validDocumento, setValidDocumento] = useState("")
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [telefono, setTelefono] = useState()
  const [email, setEmail] = useState()
  const [visibleFormSignup, setVisibleFormsignup] = useState()
  const { validateDniPassport, addUser } = props;
  const dbDniPasaporte = ["38121661", "123456"];
  
  useEffect(() => {
    validateSignUp()
  }, [nombre, apellido, telefono, email]);


  const handleChange = (event) => {
    console.log(ErSoloNumeros(event.target.value))
    if(event.target.name === "tipoDocumento"){
      setTipoDocumento(event.target.value)
    }else if(event.target.name === "numeroDocumento"){  
      if(ErSoloNumeros(event.target.value)){
        setNumeroDocumento(event.target.value)
        if(ErDni(event.target.value)){
          if(dbDniPasaporte.includes(event.target.value)){
            login({dni : numeroDocumento}).
            then((data) => {

            })
            addUser(event.target.value)
            validateDniPassport("accept");
          }else{
            console.log("NO")
              validateDniPassport("reject");
              setValidDocumento("reject")
              setVisibleFormsignup("reject")
          } 
        }
      }   
    }else if(event.target.name === "nombre"){
      setNombre(event.target.value)
    }else if(event.target.name === "apellido"){
      setApellido(event.target.value)
    }else if(event.target.name === "telefono"){
      if(ErSoloNumeros(event.target.value)){
        if(ErDni(event.target.value)){
          setTelefono(event.target.value)
        }   
      }
    }else if(event.target.name === "email"){
      setEmail(event.target.value)
    }

  };

  const validateSignUp = () => {
    if(nombre !== "" && apellido !== "" && telefono !== "" && ErEmail(email)){
      validateDniPassport("validSignup")
    }else{
      validateDniPassport("reject")
    }
  }

  return (
    <Grid style={{margin: "auto", backgroundColor: "white"}} item xs={12} sm={12} lg={5} xl={5} md={12}>
      {validDocumento === "reject" ? <p>No estas registrado, completá tus datos y continuá con el trámite!</p> : null}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          Tipo Documento
        </InputLabel>
        <Select
          name="tipoDocumento"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={tipoDocumento}
          onChange={handleChange}
        >
          <MenuItem value="dni">DNI</MenuItem>
         {/*<MenuItem value="pasaporte">Pasaporte</MenuItem> */} 
        </Select>
        <TextField
          disabled={tipoDocumento === "" ? true : false}
          name="numeroDocumento"
          label={tipoDocumento === "dni" ? "Ingresá tu dni sin puntos" : ""}
          onChange={handleChange}
          value={numeroDocumento}
        />
      {
        visibleFormSignup === "reject" ? 
        <TextField
          name="nombre"
          label={"Nombre"}
          onChange={handleChange}
          value={nombre}
        />
        : null
      }
        {
          visibleFormSignup === "reject" ? 
        <TextField
          name="apellido"
          label={"Apellido"}
          onChange={handleChange}
          value={apellido}
        />
        : null
      }
      {
        visibleFormSignup === "reject" ? 
        <TextField
          name="telefono"
          label={"Número de teléfono"}
          onChange={handleChange}
          value={telefono}
        />
        : null
      }
      {
        visibleFormSignup === "reject" ? 
        <TextField
          name="email"
          label={"Email"}
          onChange={handleChange}
          value={email}
        />
        : null
      }
      </FormControl>   
      </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

const MapDispatchToProps = (dispatch) => {
 return {
    addUser: (userData) => dispatch(addUser(userData))
 } 
}

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(IdentificacionDni)



