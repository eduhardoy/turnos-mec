import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import IdentificactionClientView from './Views/IdentificactionClientView'
import Admin from './Views/Admin'
import OfficeTypeView from './Views/OfficeTypeView'
import SubOfficeTypeView from './Views/SubOfficeTypeView'
import DateTimeClientShiftView from './Views/DateTimeClientShiftView' 
import ModalityClarificationsClientView from './Views/ModalityClarificationsClientView'
import CategoriesPaperworksView from './Views/CategoriespaperworksView.js'
import configureStore from './Store/ConfigureStore'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const initialState = {
  stepActive: 0,
  user : {},
  shift: { modalidad: "presencial", aclaraciones: "" }
}

const store = configureStore(initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <OfficeTypeView />
            </Route>
            <Route path="/subOffice/:id">
              <SubOfficeTypeView />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>DateTimeClientShiftView
            <Route path="/identification">
              <IdentificactionClientView />
            </Route>
            <Route path="/selectdatetime">
              <DateTimeClientShiftView />
            </Route>
            <Route path="/modalityshift">
              <ModalityClarificationsClientView />
            </Route>
            <Route path="/categoriespaperworks/:id">
              <CategoriesPaperworksView />
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
