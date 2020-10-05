import React from "react";
import { Form } from "react-bootstrap";
import { CENTERDIV, ICON } from "./FeesCalculator.styles";
import FormGroup from "../ReusableComponents/FormGroup";

const InputGroupsDisplay = ({
  inputTextHandler,
  addClickHandler,
  deleteClickHandler,
  id,
  showDeleteBtn,
  inputGroupTotalFeesObj,
}) => {
  // to set total fees in total in ROW
  let feesInTotalObj = {
    id,
    feesInTotal: 0,
  };
  feesInTotalObj = { ...inputGroupTotalFeesObj };

  return (
    <Form.Row className >
      <FormGroup
        xs={5}
        sm={3}
        md={3}
        controlId={"subjectFees"}
        label={"Fees"}
        name={"subjectFees"}
        type={"number"}
        inputTextHandler={inputTextHandler}
      />
      <CENTERDIV className="col-xs-1">
        <ICON className="fas fa-times"></ICON>
      </CENTERDIV>
      <FormGroup
        xs={5}
        sm={2}
        md={2}
        controlId={"subjectNumbers"}
        label={"Numbers"}
        name={"subjectNumbers"}
        type={"number"}
        inputTextHandler={inputTextHandler}
      />
      <CENTERDIV className="col-xs-1">
        <ICON className="fas fa-equals"></ICON>
      </CENTERDIV>

      <FormGroup
        xs={7}
        sm={3}
        md={4}
        controlId={"inputGroupTotalFees"}
        label={"Total: "}
        name={"inputGroupTotalFees"}
        type={"number"}
        disabled={true}
        placeholder={feesInTotalObj.feesInTotal}
      />

      <CENTERDIV className="col-xs-1" onClick={addClickHandler}>
        <ICON
          style={{ fontSize: "2.4rem" }}
          className="fas fa-plus-square"
        ></ICON>
      </CENTERDIV>
      {showDeleteBtn && (
        <CENTERDIV className="col-xs-1" onClick={() => deleteClickHandler(id)}>
          <ICON
            style={{ fontSize: "2.2rem" }}
            className="fas fa-trash-alt"
          ></ICON>
        </CENTERDIV>
      )}
    </Form.Row>
  );
};

export default InputGroupsDisplay;
