import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Wrapper from "./FeesCalculator.styles";
import InputFieldsList from "./InputFieldsList";
import ResultSumDisplay from "./ResultSumDisplay";

const FeesCalculator = () => {
  const [sum, setSum] = useState(0.0);
  const [showResultDisplay, setShowResultDisplay] = useState(false);
  const sumChangeHandler = (totalSum) => {
    setSum(totalSum);
    totalSum > 0 ? setShowResultDisplay(true) : setShowResultDisplay(false);
  };

  // function required - whenever the value of feesCal changes, calculate the total fees
  return (
    <Wrapper id="feesCalculator">
      <Container>
        <h1>
          <i className="fas fa-calculator"></i> Fees Calculator
        </h1>
        <br />
        <InputFieldsList sumChanged={sumChangeHandler} />
        <br />
        {showResultDisplay && <ResultSumDisplay sum={sum} />}
        <br />
      </Container>
    </Wrapper>
  );
};
export default FeesCalculator;
