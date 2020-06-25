import React, { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '../../Atoms/Input/Input'
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles'
import regexNumber from '../../../Utils/RegexNumber'
import regexDni from '../../../Utils/RegexDni'
import regexEmail from '../../../Utils/RegexEmail'
import { clientLogin, clientSignUp } from '../../../Services/users'

const ClientForm = (props) => {
    const { validAuth, setValidAuth, addCuit } = props
    const [ showFormSignUp, setShowFormSignUp ] = useState(false)
    const [ cuitNumber, setCuitNumber ] = useState("")
    const [ clientName, setClientName ] = useState("")
    const [ clientLastName, setClientLastName ] = useState("")
    const [ clientEmail, setClientEmail ] = useState("")
    const [ clientTelephone, setClientTelephone ] = useState("")
    const [ disabledSignUpBtn, setDisbaledSignUpBtn ] = useState(true)
    const styles =  useStyles()

    useEffect(() => {
        validateRegistrationField()
    }, [clientName, clientLastName, clientTelephone, clientEmail])

    const handleChange = (event) => {
        event.target.name === "selectDocumentotype" && setCuitNumber(event.target.value)
        if(event.target.name === "inputDocumentNumber"){
            if(regexNumber(event.target.value) || regexNumber(event.target.value) === undefined){
                setCuitNumber(event.target.value)
                if(regexDni(event.target.value)){
                    var docNumber = event.target.value
                    clientLogin({dni : docNumber.toString()}).
                    then((data) => {
                        if(data){
                            addCuit({key: "cuit", value: docNumber.toString()})
                            setValidAuth(true)
                        }else{
                            setValidAuth(false)
                            setShowFormSignUp(true)
                        }
                    }).
                    catch(err => {
                        console.log("ERROR", err)
                    })
                }
            }
        }
    }

    const checkIn = () => {
        clientSignUp({dni: cuitNumber.toString(), nombre: clientName, apellido: clientLastName, telefono: clientTelephone.toString(), email: clientEmail.toString() })
        .then((result) => {
            if(result.dni !== undefined){
                setValidAuth(true)
            }else{
                setValidAuth(false)
            }
        })
    }

    const validateRegistrationField = () => {
        if(clientName !== "" && clientLastName !== "" && clientTelephone !== "" && regexEmail(clientEmail)){
            setDisbaledSignUpBtn(false)
        }
    }

    return (
      <FormControl className={styles.formControl}>
        <Input
          value={cuitNumber}
          name="inputDocumentNumber"
          label="Ingresá tu número de CUIT"
          handleChange={handleChange}
        />
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