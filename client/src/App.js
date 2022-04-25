import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import "./global.styles.css";

// Components
import HeaderAndNav from "./Components/HeaderAndNav";

function App() {

  return (
    <>
      <Router>
        <HeaderAndNav />
        <main>
          <Switch>
            <Route exact path="/">
              Hello
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;