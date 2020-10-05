import React from "react";
import { Card, Badge } from "react-bootstrap";
import CopyIcon from "../ReusableComponents/CopyIcon";

const CalculationResult = ({
  remainingCreditPints,
  courseEndDate,
  totalTuitionFees,
  currentTuitionFees,
  hideDisplayCard,
}) => {
  return (
    <>
      <Card>
        <Card.Header as="h5">
          RESULT
          <span onClick={hideDisplayCard}>
            <i className="fas fa-times-circle"></i>
          </span>
        </Card.Header>

        <Card.Body>
          <li className="h5">
            <strong>Remaining Credit Pints: </strong>
            <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
              {remainingCreditPints} cps
            </Badge>
          </li>

          <li className="h5">
            <strong>Estimated Course End Date: </strong>
            <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
              {courseEndDate} &nbsp;
              <CopyIcon text={courseEndDate}></CopyIcon>
            </Badge>
          </li>

          {!Number.isNaN(totalTuitionFees) && (
            <li className="h5">
              <strong>Estimated Total Tuition Fees: </strong>
              <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
                A$ {totalTuitionFees} &nbsp;
                <CopyIcon text={totalTuitionFees}></CopyIcon>
              </Badge>
            </li>
          )}

          {!Number.isNaN(currentTuitionFees) && (
            <li className="h5">
              <strong>Tuition Fees in Autumn 2021: </strong>
              <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
                A$ {currentTuitionFees} &nbsp;
                <CopyIcon text={currentTuitionFees}></CopyIcon>
              </Badge>
            </li>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CalculationResult;
