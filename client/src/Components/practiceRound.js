import React from "react";

import letterA from "../images/signABC/letterA.png";
import letterB from "../images/signABC/letterB.png";
import letterC from "../images/signABC/letterC.png";
import letterF from "../images/signABC/letterF.png";
import letterJ from "../images/signABC/letterJ.png";
import letterO from "../images/signABC/letterO.png";

function PracticeRound(props) {
  function stageOne() {
    return (
      <>
        <div> B </div>
        <Card>
          {" "}
          <Card.img>{letterA}</Card.img>
        </Card>
        <Card>
          {" "}
          <Card.img>{letterB}</Card.img>
        </Card>
        <Card>
          {" "}
          <Card.img>{letterC}</Card.img>
        </Card>
      </>
    );
  }

  function stageTwo() {
    return (
      <>
        <div> O </div>
        <Card>
          {" "}
          <Card.img>{letterF}</Card.img>
        </Card>
        <Card>
          <Card.img>{letterJ}</Card.img>
        </Card>
        <Card>
          {" "}
          <Card.img>{letterO}</Card.img>
        </Card>
      </>
    );
  }

  return (
    <Card>
      <h1>Welcome:{localStorage.getItem("name")}</h1>
      <p>Match the correct Sign to the Presented letter</p>
      <Container fluid>
        <Row>{(stageOne && stageOne) || stageTwo}</Row>
      </Container>
    </Card>
  );
}
