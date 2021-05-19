import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import IdentificactionClientView from './Views/IdentificactionClientView'
import AdminLogin from './Views/AdminLogin'
import AdminRrhh from './Views/AdminRrhh'
import AdminRrhhCenterOf from './Views/AdminRrhhCenterOf'
import AdminRrhhCenterDepart from './Views/AdminRrhhCenterDepart'
import AdminRrhhServicesCert from './Views/AdminRrhhServicesCert'
import AdminDisepa from './Views/AdminDisepa'
import AdminDigep from './Views/AdminDigep'
import AdminSecondaryLevel from './Views/AdminSecondaryLevel'
import OfficeTypeView from './Views/OfficeTypeView'
import DateTimeClientShiftView from './Views/DateTimeClientShiftView'
import ModalityClarificationsClientView from './Views/ModalityClarificationsClientView'
import PaperworksDisepaView from './Views/PaperworksDisepaView'
import RoleDisepaView from './Views/RoleDisepaView'
import PaperworksSecondaryLevelView from './Views/PaperworksSecondaryLevelView'
import RoleSecondaryLevelView from './Views/RoleSecondaryLevelView'
import PaperworksDigepView from './Views/PaperworksDigepView'
import PaperworksPersonalDepartView from './Views/PaperworksPersonalDepartView'
import ConfirmationOrErrorView from './Views/ConfirmationOrErrorView'
import configureStore from './Store/ConfigureStore'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import AdminConsejoGeneralEducacion from './Views/AdminConsejoGeneralEducacion';

const initialState = {
  stepActive: 0,
  user: {},
  shift: { modalidad: "Presencial", aclaraciones: "" }
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
            <Route path="/identification">
              <IdentificactionClientView />
            </Route>
            <Route path="/selectdatetime">
              <DateTimeClientShiftView />
            </Route>
            <Route path="/modalityshift">
              <ModalityClarificationsClientView />
            </Route>
            <Route path="/paperworksdisepa">
              <PaperworksDisepaView />
            </Route>
            <Route path="/roledisepa">
              <RoleDisepaView />
            </Route>
            <Route path="/paperworkssecondary">
              <PaperworksSecondaryLevelView />
            </Route>
            <Route path="/rolesecondary">
              <RoleSecondaryLevelView />
            </Route>
            <Route path="/paperworksdigep">
              <PaperworksDigepView />
            </Route>
            <Route path="/recorddeptopersonal">
              <PaperworksPersonalDepartView />
            </Route>
            <Route path="/confirmationerror">
              <ConfirmationOrErrorView />
            </Route>
            <Route path="/login">
              <AdminLogin />
            </Route>
            <Route path="/admin/rrhh">
              <AdminRrhh />
            </Route>
            <Route path="/admin/centeroffice/:role">
              <AdminRrhhCenterOf />
            </Route>
            <Route path="/admin/centerdepart/:role">
              <AdminRrhhCenterDepart />
            </Route>
            <Route path="/admin/servicescert/:role">
              <AdminRrhhServicesCert />
            </Route>
            <Route path="/admin/disepa/:role">
              <AdminDisepa />
            </Route>
            <Route path="/admin/digep">
              <AdminDigep />
            </Route>
            <Route path="/admin/secondarylevel/:role">
              <AdminSecondaryLevel />
            </Route>
            <Route path="/admin/consejogeneraleducacion/:role">
              <AdminConsejoGeneralEducacion />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
