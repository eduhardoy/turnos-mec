import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Header from './Components/Header/Header'
import Home from './Views/Home'
import Login from './Views/Login'
import Admin from './Views/Admin'
import configureStore from './Store/ConfigureStore'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const initialState = {
  stepActive: 0, //debe empezar en -2
  subTipoTramiteData : [],
  selectedSubTipoTramite: "",
  selectedFechaHoraTurno: [],
  modalidadAclaracion: {modalidad: "presencial", aclaraciones: ""},
  userData: ""
}

const store = configureStore(initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
        <Header></Header>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
