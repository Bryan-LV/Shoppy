import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './app/containers/Shop';
import CheckOut from './app/containers/CheckOut';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>

          <Route exact path="/checkout">
            <CheckOut/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
