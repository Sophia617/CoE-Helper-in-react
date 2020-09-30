import React,{useState} from 'react';
import {Form,Col, Button } from 'react-bootstrap';

const CoECalculationForm = (props) => {

    const [userValues, setInputValues]  = useState({
        totalCPS: 0,
        completedCPS:0,
        pendingCPS: 0,
        enrolledCPS:24,
        subjectTuitionFees:0,
        subjectCPSForFees:0
    });

    // when the form is submitted
    const submitHandler = (e) => {
        e.preventDefault();
        const inputData = {...userValues};
        props.storeInputValues(inputData);
    };

    // Update object value from user input
    const handleInputChange = (e) => {
        let value = (e.target.value === "") ? 0:  e.target.value ;
        if (e.target.name === 'subjectTuitionFees') {
           value =parseFloat(value);
        } else {
            value = parseInt(value);
        }
        setInputValues({
            ...userValues,
            [e.target.name]: value
        });
    };

    return (
        <>
            <Form onSubmit={submitHandler}>
                <Form.Row>
                    <Form.Group as={Col} sm="6" md="3" controlId="totalCPS">
                        <Form.Label><strong>Total CPS</strong></Form.Label>
                        <Form.Control
                            onChange = {handleInputChange}
                            name ="totalCPS" type="number" placeholder ="e.g. 144"  />
                    </Form.Group>

                    <Form.Group as={Col} sm="6" md="3" controlId="completedCPS">
                        <Form.Label><strong>Completed CPS</strong></Form.Label>
                        <Form.Control
                            onChange = {handleInputChange}
                            name="completedCPS" type="number" placeholder ="e.g. 96" />
                    </Form.Group>

                    <Form.Group as={Col} sm="6" md="3" controlId="pendingCPS">
                        <Form.Label><strong>Pending CPS</strong></Form.Label>
                        <Form.Control
                            onChange = {handleInputChange}
                            name="pendingCPS"
                            type="number" placeholder ="e.g. 6" />
                    </Form.Group>

                    <Form.Group as={Col} sm="6" md="3"  controlId="enrolledCPS">
                        <Form.Label><strong>Enrolled CPS</strong></Form.Label>
                        <Form.Control
                            onChange = {handleInputChange}
                            name="enrolledCPS"
                            type="number" placeholder ="e.g. 24" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="subjectTuitionFees">
                        <Form.Label><strong>Subject Tuition Fees</strong></Form.Label>
                        <Form.Control
                            onChange = {handleInputChange}
                            name="subjectTuitionFees" type="text" placeholder ="e.g. 5775.5" />
                    </Form.Group>

                    <Form.Group as={Col}  md="6" controlId="subjectCPS">
                        <Form.Label><strong>Subject CPS for Tuition Fees</strong></Form.Label>
                        <Form.Control
                            onChange = {handleInputChange}
                            name="subjectCPSForFees" type="number" placeholder ="e.g. 6" />
                    </Form.Group>
                </Form.Row>

                <Button variant="secondary" size="lg" block type="submit">
                    Calculate <i className="fas fa-glass-cheers"></i>
                </Button>
            </Form>
        </>
    );
};

export default CoECalculationForm;