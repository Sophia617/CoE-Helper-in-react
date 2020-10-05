import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import InputGroupsDisplay from "./InputGroupsDisplay";

const InputFieldsList = ({ sumChanged }) => {
  const [inputGroupIDArray, setInputGroupIDArray] = useState([
    { id: Math.random() * 1000 },
  ]);
  const [inputGroupValuesArray, setInputGroupValuesArray] = useState([]);
  const [inputGroupTotalFeesArray, setInputGroupTotalFeesArray] = useState([]);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  useEffect(() => {
    calculateTotalSum();
  }, [inputGroupTotalFeesArray]);

  /*****************************
   *  Handle User Inputs
   * *****************************/
  const inputTextHandler = (e, id) => {
    let copiedInputGroupValuesArray = inputGroupValuesArray;
    let inputValuesInRow = {
      id: id,
      subjectFees: 0,
      subjectNumbers: 0,
    };
    let name = e.target.name;
    let inputValue = parseFloat(e.target.value);

    let index = copiedInputGroupValuesArray
      .map((userInputs) => userInputs.id)
      .indexOf(id);

    if (index === -1) {
      inputValuesInRow = {
        ...inputValuesInRow,
        [name]: inputValue,
      };
      copiedInputGroupValuesArray = [
        ...copiedInputGroupValuesArray,
        inputValuesInRow,
      ];
    } else {
      inputValuesInRow = {
        ...copiedInputGroupValuesArray[index],
        [name]: inputValue,
      };
      copiedInputGroupValuesArray[index] = inputValuesInRow;
    }
    setInputGroupValuesArray([...copiedInputGroupValuesArray]);
    calculateInputGroupFees(id, inputValuesInRow);
  };

  /**********************************************
   *  calculate fees for user Inputs Groups (row)
   * **********************************************/

  const calculateInputGroupFees = (id, inputValuesInRow) => {
    let totalFeesInRow = {
      id: id,
      feesInTotal: parseFloat(
        inputValuesInRow.subjectFees * inputValuesInRow.subjectNumbers
      ).toFixed(2),
    };
    let copiedInputGroupTotalFeesArray = [...inputGroupTotalFeesArray];
    let index = copiedInputGroupTotalFeesArray
      .map((totalSumItem) => totalSumItem.id)
      .indexOf(id);
    if (index === -1) {
      copiedInputGroupTotalFeesArray = [
        ...inputGroupTotalFeesArray,
        totalFeesInRow,
      ];
    } else {
      copiedInputGroupTotalFeesArray[index].feesInTotal =
        totalFeesInRow.feesInTotal;
    }
    setInputGroupTotalFeesArray([...copiedInputGroupTotalFeesArray]);
  };

  // calculate sum of total fees in row
  const calculateTotalSum = () => {
    const totalSumArray = [...inputGroupTotalFeesArray].map((item) =>
      parseFloat(item.feesInTotal)
    );
    if (totalSumArray.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let totalSum = totalSumArray.reduce(reducer);
      sumChanged(totalSum);
    }
    if (totalSumArray.length === 0) {
        sumChanged(0);
    }
  };

  /**********************************
   *  Add and Delete InputGroups
   * ********************************/

  //  Add a new InputGroup: When click '+' button
  const addInputGroup = () => {
    const newInputGroupId = { id: Math.random() * 1000 };
    setInputGroupIDArray([...inputGroupIDArray, newInputGroupId]);
    if (!showDeleteBtn) {
      setShowDeleteBtn(true);
    }
  };

  // Delete InputGroup row --> When click 'trash bin' button
  const deleteInputGroup = (id) => {
    const copiedInputGroupIDArray = [...inputGroupIDArray];
    const copiedInputGroupValuesArray = [...inputGroupValuesArray];
    const copiedInputGroupTotalFeesArray = [...inputGroupTotalFeesArray];

    let inputGroupIdIndex = copiedInputGroupIDArray
      .map((inputGroup) => inputGroup.id)
      .indexOf(id);
    let inputValuesIndex = copiedInputGroupValuesArray
      .map((userInputValues) => userInputValues.id)
      .indexOf(id);
    let totalFeesIndex = copiedInputGroupTotalFeesArray
      .map((totalFees) => totalFees.id)
      .indexOf(id);

    if (inputGroupIdIndex > -1) {
      copiedInputGroupIDArray.splice(inputGroupIdIndex, 1);
      console.log("hello");
    }

    if (inputValuesIndex > -1) {
      copiedInputGroupValuesArray.splice(inputValuesIndex, 1);
    }

    if (totalFeesIndex > -1) {
      copiedInputGroupTotalFeesArray.splice(totalFeesIndex, 1);
    }

    if (copiedInputGroupIDArray.length === 1) {
      setShowDeleteBtn(false);
    }

    setInputGroupIDArray([...copiedInputGroupIDArray]);
    setInputGroupValuesArray([...copiedInputGroupValuesArray]);
    setInputGroupTotalFeesArray([...copiedInputGroupTotalFeesArray]);
  };

  return (
    <Form>
      {inputGroupIDArray.map((inputGroup) => {
        return (
          <InputGroupsDisplay
            id={inputGroup.id}
            key={inputGroup.id}
            addClickHandler={addInputGroup}
            deleteClickHandler={deleteInputGroup}
            inputTextHandler={(e) => inputTextHandler(e, inputGroup.id)}
            showDeleteBtn={showDeleteBtn}
            inputGroupTotalFeesObj={inputGroupTotalFeesArray.find(
              (item) => item.id === inputGroup.id
            )}
          />
        );
      })}
    </Form>
  );
};

export default InputFieldsList;
