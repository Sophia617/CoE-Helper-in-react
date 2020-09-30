import React from 'react';
import Card from 'react-bootstrap/Card';

const CalculationResult = ({sum}) => {
    return (
        <>
            <Card style={{backgroundColor: "#353945"}} text='white'>
                <Card.Body>The Total Fees: <strong>A${sum}</strong></Card.Body>
            </Card>
        </>
    );
};

export default CalculationResult;
