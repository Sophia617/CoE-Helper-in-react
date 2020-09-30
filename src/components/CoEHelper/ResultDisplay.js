import React from 'react';
import Card from 'react-bootstrap/Card';


const CalculationResult = (props) => {
    return (
        <>
            <Card>
                <Card.Header as="h5">RESULT</Card.Header>
                <Card.Body>
                    <li>
                        <strong>Remaining Credit Pints: </strong> 
                        {props.remainingCreditPints} cps
                    </li>
                    <li>
                        <strong>Estimated Course End Date: </strong> 
                        {props.courseEndDate}
                    </li>
                    <li>
                        <strong>Estimated Total Tuition Fees: </strong>
                         A$ {props.totalTuitionFees}
                    </li>
                    <li>
                        <strong>Tuition Fees in Autumn 2021: </strong> 
                        A$ {props.currentTuitionFees}
                    </li>
                </Card.Body>
            </Card>
        </>

    );
};

export default CalculationResult;