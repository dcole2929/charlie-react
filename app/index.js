import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import KioskSetup from './kiosk-setup';
import Kiosk from './kiosk';
import './styles/index.css';
import { API_WS_ROOT } from './constants/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <KioskSetup />
        </Route>
        <Route path="/kiosk">
          <Kiosk />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <App />
  </ActionCableProvider>, document.getElementById('root'),
);
