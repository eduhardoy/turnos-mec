import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import clientApolo from '../../Utils/ApoloClient'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import {
    Redirect
  } from "react-router-dom"
import { LoginAdmin } from '../../Services/users'
import styled from "styled-components";

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [ cuit, setCuit ] = useState()
    const [ password, setPassword ] = useState()
    const [ role, setRole ] = useState([])

    const handleChange = (event) => {
        if(event.target.name === "cuit"){
            setCuit(event.target.value)
        } 
        if(event.target.name === "pass"){
            setPassword(event.target.value)
        }  
    }

    const login = () => {
      clientApolo.query({
        query: LoginAdmin, 
        variables: {cuit: cuit.toString(), contrasena: password.toString()}
      })
      .then((resultLogin) => {
        setRole(resultLogin.data.LoginUsuarioNoComun.roles)
        console.log("RESPONSE DATA LOGIN ADMIN", resultLogin.data.LoginUsuarioNoComun.roles)
      })
      .catch((error) => {
        console.log("ERROR", error)
      })
    }
    
   if(role.length !== 0){
   /* if(role[0]._key === "NivelSecundario"){
      return (
        <Redirect to="/admin/rrhh" />
      )
     }*/
     console.log("ROLE", role)
     if(role[0]._key === "DepartamentoDePersonalCentral"){
      return (
        <Redirect to={"/admin/centerdepart/" + JSON.stringify(role[0])} />
      )
     }
     if(role[0]._key === "CertificacionesDeServicio"){
      return (
        <Redirect to={"/admin/servicescert/" + JSON.stringify(role[0])} />
      )
     }
     if(role[0]._key === "OficinaCentral"){
      return (
        <Redirect to={"/admin/centeroffice/" + JSON.stringify(role[0])} />
      )
     }
     if(role[0]._key === "NivelSecundario"){
      return (
        <Redirect to={"/admin/secondarylevel/" + JSON.stringify(role[0])} />
      )
     }
     if(role[0]._key === "DiSEPA"){
      return (
        <Redirect to={"/admin/disepa/" + JSON.stringify(role[0])} />
      )
     }
    /* if(cuit === ""){
      return (
        <Redirect to="/admin/digep" />
      )
     }*/
   }else{
    return (
      <LoginContainer>
      <LoginWrapper>
        <h3>INGRESA CON TU CUIT/CUIL</h3>
        <Grid container>
          <FormControl className={classes.formControl}>
            <TextField
              name="cuit"
              id="standard-required"
              label="CUIT/CUIL"
              onChange={handleChange}
            />
            <TextField
              name="pass"
              d="standard-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              className={classes.btnEntrar}
              variant="contained"
              color="primary"
              onClick={login}
            >
              Entrar
            </Button>
          </FormControl>
        </Grid>
      </LoginWrapper>
      </LoginContainer>
    );
   } 
}

const LoginContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Lato', sans-serif;
`

const LoginWrapper = styled.div`
width: 30%;
height: 35%;
min-height: 300px;
min-width: 300px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 10px;
box-shadow: 2px 1px 13px 0px rgba(174,172,172,0.75);
padding: 20px;
div{
  margin-bottom: 10px;
}
h3{
  margin: 10px;
}
`

const useStyles = makeStyles((theme) => ({
      formControl: {
        marginTop: "5%",
        margin: theme.spacing(1),
        minWidth: 280,
        margin: "auto",
        width: 280
      },
      btnEntrar: {
          marginTop: "5%"
      }
  }));
