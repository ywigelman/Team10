import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navigation } from "../Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./home";
import { LearningPage } from "./LearningPage";
import { About } from "./About";
import { Profile } from "./Profile";
import { TutorialPage } from "./TutorialPage";
// import "./Components/FontAwesome";

function Main() {
  return (
    <Container sm={true}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/learningPage" component={LearningPage}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path ="/tutorial" component={TutorialPage}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default Main;