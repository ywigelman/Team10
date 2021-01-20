import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap';
import { Navigation } from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { LearningPage } from './Pages/LearningPage';
import { About } from './Pages/About';
import { Profile } from './Pages/Profile';


function App() {
  return (
    <Container fluid>
        <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/learningPage" component={LearningPage}>
            </Route>
            <Route exact path="/profile" component={Profile}>
            </Route>
            <Route exact path="/about" component={About}>
            </Route>
          </Switch>
        </Router>
    </Container>  
  );
}

export default App;
