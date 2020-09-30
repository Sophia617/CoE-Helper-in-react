import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Wrapper from './FeesCalculator.styles';
import InputFieldsList from "./InputFieldsList";
import CalculationResult from "./CalculationResult";

const FeesCalculator = () => {

    // collection of fees calculation per row
    const [feesCalcArray, setFeesCalcArray] = useState([]);
    const [sum, setSum] = useState(0);
    const sumChangeHandler = (totalSum) => {
        setSum(totalSum);
    };

    // function required - whenever the value of feesCal changes, calculate the total fees
    return(
        <Wrapper id="feesCalculator">
            <Container>
                <h1><i className="fas fa-calculator"></i> Fees Calculator </h1>
                <br/>
                <InputFieldsList sumChanged = {sumChangeHandler}/>
                <br/>
                <CalculationResult sum ={sum} />
                <br/>
            </Container>
        </Wrapper>
    )
};
export default FeesCalculator;