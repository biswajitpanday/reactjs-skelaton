import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Dashboard from './features/dashboard/dashboard';
import { ConnectedRouter } from 'connected-react-router';
import { history } from "./helpers/rootStore";
import { Login } from './features/login/login';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <ConnectedRouter history={history} >
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Dashboard} />
              </Switch>
            </ConnectedRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
