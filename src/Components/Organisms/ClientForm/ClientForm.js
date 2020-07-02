import React, { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '../../Atoms/Input/Input'
import Button from "@material-ui/core/Button";
import clientApolo from '../../../Utils/ApoloClient'
import { loginComun, registroUsuarioComun } from '../../../Services/users'
import { makeStyles } from '@material-ui/core/styles'
import regexNumber from '../../../Utils/RegexNumber'
import { regexCuit, regexDni } from '../../../Utils/RegexDni'
import regexEmail from '../../../Utils/RegexEmail'


const ClientForm = (props) => {
    const { setValidAuth, addCuit } = props
    const [ showFormSignUp, setShowFormSignUp ] = useState(false)
    const [ cuitNumber, setCuitNumber ] = useState("")
    const [ dniNumber, setDniNumber ] = useState("")
    const [ clientName, setClientName ] = useState("")
    const [ clientLastName, setClientLastName ] = useState("")
    const [ clientEmail, setClientEmail ] = useState("")
    const [ clientTelephone, setClientTelephone ] = useState("")
    const [ disabledSignUpBtn, setDisbaledSignUpBtn ] = useState(true)
    const styles =  useStyles()

    useEffect(() => {
        validateRegistrationField()
    }, [ dniNumber, clientName, clientLastName, clientTelephone, clientEmail])

    const handleChange = (event) => {
        if(event.target.name === "inputDocumentNumber"){
            if(regexNumber(event.target.value) || regexNumber(event.target.value) === undefined){
                setCuitNumber(event.target.value)
                if(regexCuit(event.target.value)){
                    var docNumber = event.target.value
                    clientApolo.query({
                      query: loginComun, 
                      variables: {cuit: docNumber.toString()}
                    })
                    .then((data) => {
                      if(data.data.LoginUsuarioComun){
                        addCuit({key: "cuit", value: docNumber.toString()})
                        setValidAuth(true)
                    }else{
                        setValidAuth(false)
                        setShowFormSignUp(true)
                    }
                    })
                    .catch((error) => {
                      console.log("ERROR", error)
                    })
                }
            }
        }
        event.target.name === "dniNumber" && setDniNumber(event.target.value)
        event.target.name === "name" && setClientName(event.target.value)
        event.target.name === "lastName" && setClientLastName(event.target.value)
        event.target.name === "telephone" && setClientTelephone(event.target.value)
        event.target.name === "email" && setClientEmail(event.target.value)   
    }

    const checkIn = () => {
      clientApolo.mutate({
        mutation: registroUsuarioComun,
        variables: {cuit: cuitNumber.toString(), dni: dniNumber.toString(),  nombre: clientName, apellido: clientLastName, telefono: clientTelephone.toString(), correo: clientEmail.toString() }
      })
      .then((data) => {
        if(data.data.RegistrarUsuarioComun.cuit !== undefined){
          setValidAuth(true)
        }else{
          setValidAuth(false)
        }
      })
    }

    const validateRegistrationField = () => {
        if(regexDni(dniNumber) && clientName !== "" && clientLastName !== "" && clientTelephone !== "" && regexEmail(clientEmail)){
            setDisbaledSignUpBtn(false)
        }else{
          setDisbaledSignUpBtn(true)
        }
    }

    return (
      <FormControl className={styles.formControl}>
        <Input
          value={cuitNumber}
          name="inputDocumentNumber"
          label="Ingresá tu número de CUIT"
          onChange={handleChange}
        />
         {showFormSignUp ? (
          <Input
            name="dniNumber"
            label={"DNI sin puntos"}
            onChange={handleChange}
            value={dniNumber}
          />
        ) : null}
        {showFormSignUp ? (
          <Input
            name="name"
            label={"Nombre"}
            onChange={handleChange}
            value={clientName}
          />
        ) : null}
        {showFormSignUp ? (
          <Input
            name="lastName"
            label={"Apellido"}
            onChange={handleChange}
            value={clientLastName}
          />
        ) : null}
        {showFormSignUp ? (
          <Input
            name="telephone"
            label={"Número de teléfono"}
            onChange={handleChange}
            value={clientTelephone}
          />
        ) : null}
        {showFormSignUp ? (
          <Input
            name="email"
            label={"Email"}
            onChange={handleChange}
            value={clientEmail}
          />
        ) : null}
        {showFormSignUp ? (
          <Button
            style={{ marginTop: "5%" }}
            variant="contained"
            color="primary"
            onClick={checkIn}
            disabled={disabledSignUpBtn}
          >
            Registrarme
          </Button>
        ) : null}
      </FormControl>
    );
} 


const useStyles = makeStyles((theme) => ({
    formControl: {
      width: "80%"
    }
  }));


export default ClientForm