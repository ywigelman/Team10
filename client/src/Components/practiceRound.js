import React from "react";

import letterA from "../images/signABC/letterA.png";
import letterB from "../images/signABC/letterB.png";
import letterC from "../images/signABC/letterC.png";
import letterF from "../images/signABC/letterF.png";
import letterJ from "../images/signABC/letterJ.png";
import letterO from "../images/signABC/letterO.png";

function PracticeRound(props) {
  const { name } = props;

  function stageOne() {
    return (
      <>
        <Card.img>{letterA}</Card.img>
        <Card.img>{letterB}</Card.img>
        <Card.img>{letterC}</Card.img>
      </>
    );
  }

  function stageTwo() {
    return (
      <>
        <Card.img>{letterF}</Card.img>
        <Card.img>{letterJ}</Card.img>
        <Card.img>{letterO}</Card.img>
      </>
    );
  }

  return (
    <Card>
      <h1>Welcome:{name}</h1>
      <p>Match the correct Sign to the Presented letter</p>
      <Container fluid>
        <Row>{(stageOne && stageOne) || stageTwo}</Row>
      </Container>
    </Card>
  );
}
