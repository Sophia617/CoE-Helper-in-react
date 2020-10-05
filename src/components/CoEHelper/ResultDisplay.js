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
          <li>
            <strong>Remaining Credit Pints: </strong>
            <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
              {remainingCreditPints} cps
            </Badge>
          </li>

          <li>
            <strong>Estimated Course End Date: </strong>
            <Badge style={{ background: "#6d6875", color: "#f0efeb" }}>
              {courseEndDate} &nbsp;
              <CopyIcon text={courseEndDate}></CopyIcon>
            </Badge>
          </li>

          {!Number.isNaN(totalTuitionFees) && (
            <li>
              <strong>Estimated Total Tuition Fees: </strong>
              <Badge style={{ background: "#6d6875", color: "#f0efeb"}}>
                  A$ {totalTuitionFees} &nbsp;
                <CopyIcon text={totalTuitionFees}></CopyIcon>
              </Badge>
            </li>
          )}

          {!Number.isNaN(currentTuitionFees) && (
            <li className="h6">
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
