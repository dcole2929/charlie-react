import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import KioskSetup from './kiosk-setup';
import Kiosk from './kiosk';
import './styles/index.css';

// class App extends React.Component {

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

ReactDOM.render(<App />, document.getElementById('root'));
