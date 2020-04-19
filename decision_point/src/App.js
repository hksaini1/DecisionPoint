import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import UserDetails from './components/UserManagement/UserDetails';
import ViewUserDetails from "./components/UserManagement/Modal/ViewUserDetails"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route
         exact
         path="/"
        ><UserDetails/>
        </Route>
         <Route
         exact
         path="/userDetails"
        ><UserDetails/>
        </Route>
        
         <Route
         exact
         path="/ViewUserDetails"
        ><ViewUserDetails/>
        </Route>


      </Switch>

    </BrowserRouter>
     
    </div>
  );
}

export default App;
