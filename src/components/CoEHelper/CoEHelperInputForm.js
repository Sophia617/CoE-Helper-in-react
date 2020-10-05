import React, { useState } from "react";
import { Form, Button, OverlayTrigger, Popover } from "react-bootstrap";
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

  // when the form is submitted, send userInput details to CoE Helper.js
  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = { ...userValues };
    props.storeInputValues(inputData);
  };

  // Update object value from user input
  function inputChangeHandler(e) {
    let value = e.target.value === "" ? 0 : e.target.value;
    if (e.target.name === "subjectTuitionFees") {
      value = parseFloat(value);
    } else {
      value = parseInt(value);
    }
    setInputValues({
      ...userValues,
      [e.target.name]: value,
    });
  }

  // tooltip
  const pendingCPSPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">What is Pending CPS?</Popover.Title>
      <Popover.Content>
        Credit points of pending result from the previous session. Calculate
        course end date <strong>assuming the subject will be passed.</strong>
      </Popover.Content>
    </Popover>
  );

  const enrolledCPSpopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">What is enrolled CPS?</Popover.Title>
      <Popover.Content>
        Enrolled credit points for the upcoming session. <br />
        <strong>If RSL approved,</strong> enter approved credit points (e.g. 18){" "}
        <br />
        <strong> If over-enrolled,</strong> enter full cps enrolled (e.g. 30)
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <FormGroup
            xs={6} md={3}
            controlId="totalCPS"
            label="Total CPS"
            name={"totalCPS"}
            type="number"
            placeholder={"e.g. 144"}
            inputTextHandler={inputChangeHandler}
          />
          <FormGroup
            xs={6} md={3}
            controlId="completedCPS"
            label="Completed CPS"
            name={"completedCPS"}
            type="number"
            placeholder={"e.g. 96"}
            inputTextHandler={inputChangeHandler}
          />

          <FormGroup
            xs={6} md={3}
            controlId="pendingCPS"
            label="Pending CPS"
            name={"pendingCPS"}
            type="number"
            placeholder={"e.g. 6"}
            inputTextHandler={inputChangeHandler}
            icon={
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={pendingCPSPopover}
              >
                <span>
                  <i className="fas fa-question-circle"></i>
                </span>
              </OverlayTrigger>
            }
          />

          <FormGroup
            xs={6} md={3}
            controlId="enrolledCPS"
            label="Enrolled CPS"
            name={"enrolledCPS"}
            type="number"
            placeholder={"e.g. 24"}
            inputTextHandler={inputChangeHandler}
            icon={
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={enrolledCPSpopover}
              >
                <span>
                  <i className="fas fa-question-circle"></i>
                </span>
              </OverlayTrigger>
            }
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
            inputTextHandler={inputChangeHandler}
          />

          <FormGroup
            md={6}
            controlId="subjectCPS"
            label="Subject CPS for Tuition Fees"
            name={"subjectCPSForFees"}
            type="number"
            disabled={false}
            placeholder={"e.g. 6"}
            inputTextHandler={inputChangeHandler}
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
