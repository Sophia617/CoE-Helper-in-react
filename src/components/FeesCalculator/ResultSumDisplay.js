import React from "react";
import { Card, Badge } from "react-bootstrap";
import CopyIcon from "../ReusableComponents/CopyIcon";

const ResultSumDisplay = ({ sum }) => {
  return (
    <Card style={{ backgroundColor: "#353945" }} text="white">
      <Card.Body className="h5">
        <strong>The Total Fees: </strong>&nbsp;
        <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
          A${sum}&nbsp;&nbsp;
          <CopyIcon text={sum}></CopyIcon>
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default ResultSumDisplay;
