import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import "./global.styles.css";

// Components
import Nav from "./Components/Nav";

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            Hello
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;