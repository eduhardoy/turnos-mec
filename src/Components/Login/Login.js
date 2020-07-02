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

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [ cuit, setCuit ] = useState()
    const [ password, setPassword ] = useState()
    const [ logged, setLogged ] = useState(false)

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
        setLogged(true)
        console.log("RESPONSE DATA LOGIN ADMIN", resultLogin.data.LoginUsuarioNoComun.nombre)
      })
      .catch((error) => {
        console.log("ERROR", error)
        setLogged(false)
      })
    }
    console.log("LOGIN", cuit, logged)
   if(logged){
    if(cuit === "20553068"){
      return (
        <Redirect to="/admin/rrhh" />
      )
     }
     if(cuit === "27303594820" || cuit === "20276459032"){
      return (
        <Redirect to="/admin/centerdepart" />
      )
     }
     if(cuit === "20291204903"){
      return (
        <Redirect to="/admin/servicescert" />
      )
     }
     if(cuit === "27323000900"){
      return (
        <Redirect to="/admin/centeroffice" />
      )
     }
     if(cuit === "20260371917"){
      return (
        <Redirect to="/admin/secondarylevel" />
      )
     }
     if(cuit === "27318669983"){
      return (
        <Redirect to="/admin/disepa" />
      )
     }
     if(cuit === ""){
      return (
        <Redirect to="/admin/digep" />
      )
     }
   }else{
    return (
      <div className={classes.root}>
        <Typography>Ingresá con tu CUIT/CUIL y contraseña</Typography>
        <Grid container>
          <FormControl className={classes.formControl}>
            <TextField
              name="cuit"
              id="standard-required"
              label="CUIT/CUIL sin guiones"
              onChange={handleChange}
            />
            <TextField
              name="pass"
              d="standard-password-input"
              label="Password"
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
      </div>
    );
   } 
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "50%",
        margin: "auto",
        backgroundColor: "white",
        height: 230,
        marginTop: "10%"
    },
    formControl: {
        marginTop: "5%",
        margin: theme.spacing(1),
        minWidth: 120,
        margin: "auto",
        width: "50%"
      },
      btnEntrar: {
          marginTop: "5%"
      }
  }));
