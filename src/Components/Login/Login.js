import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import {
    Redirect
  } from "react-router-dom"
import { login } from '../../Services/users'

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [dni, setDni] = useState()
    const [password, setPassword] = useState()
    const [ logged, setLogged ] = useState(false)

    const handleChange = (event) => {
        if(event.target.name === "dni"){
            setDni(event.target.value)
        } 
        if(event.target.name === "pass"){
            setPassword(event.target.value)
        }  
    }

    const login = () => {
     /* login({dni: dni, password: password}).then(data => {
        setLogged(true)
        sessionStorage.setItem()
      })*/
      setLogged(true)
    }

   if(logged){
    return (
      <Redirect to="/admin" />
    )
   }else{
    return (
      <div className={classes.root}>
        <Typography>Ingresá con tu DNI y contraseña</Typography>
        <Grid container>
          <FormControl className={classes.formControl}>
            <TextField
              name="dni"
              id="standard-required"
              label="DNI sin puntos"
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
