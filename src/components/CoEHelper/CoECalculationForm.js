import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormGroup from "../ReusableComponents/FormGroup";

const CoECalculationForm = (props) => {
  const [userValues, setInputValues] = useState({
    totalCPS: 0,
    completedCPS: 0,
    pendingCPS: 0,
    enrolledCPS: 24,
    subjectTuitionFees: 0,
    subjectCPSForFees: 0,
  });

  // when the form is submitted
  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = { ...userValues };
    props.storeInputValues(inputData);
  };

  // Update object value from user input
  function inputChangeHander(e) {
        let value = e.target.value === "" ? 0 : e.target.value;
        if (e.target.name === "subjectTuitionFees") {
            value = parseFloat(value);
        } else {
            value = parseInt(value);
        }
        setInputValues({
            ...userValues,
            [e.target.name]: value
        });
    }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <FormGroup
            xs={6}
            sm={3}
            controlId="totalCPS"
            label="Total CPS"
            name={"totalCPS"}
            type="number"
            placeholder={"e.g. 144"}
            inputTextHandler={inputChangeHander}
          />
          <FormGroup
            xs={6}
            sm={3}
            controlId="completedCPS"
            label="Completed CPS"
            name={"completedCPS"}
            type="number"
            placeholder={"e.g. 96"}
            inputTextHandler={inputChangeHander}
          />

          <FormGroup
            xs={6}
            sm={3}
            controlId="pendingCPS"
            label="Pending CPS"
            name={"pendingCPS"}
            type="number"
            placeholder={"e.g. 6"}
            inputTextHandler={inputChangeHander}
          />

          <FormGroup
            xs={6}
            sm={3}
            controlId="enrolledCPS"
            label="Enrolled CPS"
            name={"enrolledCPS"}
            type="number"
            placeholder={"e.g. 24"}
            inputTextHandler={inputChangeHander}
          />
        </Form.Row>

        <Form.Row>
          <FormGroup
            md={6}
            controlId="subjectTuitionFees"
            label="Subject Tuition Fees"
            name={"subjectTuitionFees"}
            type="text"
            disabled={false}
            placeholder={"e.g. 5775.5"}
            inputTextHandler={inputChangeHander}
          />

          <FormGroup
            md={6}
            controlId="subjectCPS"
            label="Subject CPS for Tuition Fees"
            name={"subjectCPSForFees"}
            type="number"
            disabled={false}
            placeholder={"e.g. 6"}
            inputTextHandler={inputChangeHander}
          />
        </Form.Row>

        <Button variant="secondary" size="lg" block type="submit">
          Calculate <i className="fas fa-glass-cheers"></i>
        </Button>
      </Form>
    </>
  );
};

export default CoECalculationForm;
