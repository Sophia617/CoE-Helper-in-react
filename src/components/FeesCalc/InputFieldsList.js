import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import InputGroups from "./InputGroups";

const InputFieldsList = ({ sumChanged }) => {
  const [userInputValuesArray, setUserInputValues] = useState([]);
  const [inputGroupDisplays, setInputGroupDisplays] = useState([
    { id: Math.random() * 1000 },
  ]);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [totalFeesArray, setTotalFeesArray] = useState([]);

  useEffect(() => {
    calculateTotalSum();
  }, [totalFeesArray]);

  const inputTextHandler = (e, id) => {
    //take user input - calculate the fees
    let copiedUserInputValues = userInputValuesArray;
    let userInputValuesPerRow = {
      id: id,
      subjectFees: 0,
      subjectNumbers: 0,
    };
    let name = e.target.name;
    let inputValue = e.target.value;

    let index = copiedUserInputValues
      .map((userInputs) => userInputs.id)
      .indexOf(id);

    if (index === -1) {
      userInputValuesPerRow = {
        ...userInputValuesPerRow,
        [name]: inputValue,
      };
      copiedUserInputValues = [...copiedUserInputValues, userInputValuesPerRow];
    } else {
      userInputValuesPerRow = {
        ...copiedUserInputValues[index],
        [name]: inputValue,
      };
      copiedUserInputValues[index] = userInputValuesPerRow;
    }
    setUserInputValues([...copiedUserInputValues]);
    calculateTotalFees(id, userInputValuesPerRow);
  };

  // Calculate total Fees
  const calculateTotalFees = (id, userInputValuesPerRow) => {
    let totalSum = {
      id: id,
      subjectFees: (
        userInputValuesPerRow.subjectFees * userInputValuesPerRow.subjectNumbers
      ).toFixed(2),
    };
    let copiedTotalSumArray = [...totalFeesArray];
    let index = copiedTotalSumArray
      .map((totalSumItem) => totalSumItem.id)
      .indexOf(id);
    if (index === -1) {
      copiedTotalSumArray = [...totalFeesArray, totalSum];
    } else {
      copiedTotalSumArray[index].subjectFees = totalSum.subjectFees;
    }
    setTotalFeesArray([...copiedTotalSumArray]);
  };

  // calculate total Sum
  const calculateTotalSum = () => {
    const copiedTotalSumArray = [...totalFeesArray].map((item) =>
      parseFloat(item.subjectFees)
    );
    if (copiedTotalSumArray.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let totalSum = copiedTotalSumArray.reduce(reducer);
      sumChanged(totalSum);
    }
  };

  // When click '+' button  -->  add InputGroup
  const addInputGroup = () => {
    const inputGroupId = { id: Math.random() * 1000 };
    setInputGroupDisplays([...inputGroupDisplays, inputGroupId]);
    if (!deleteBtn) {
      setDeleteBtn(true);
    }
  };

  // When click '-' button  -->  delete InputGroup
  const deleteInputGroup = (id) => {
    const copiedInputGroupDisplayList = [...inputGroupDisplays];
    const copiedUserInputValues = [...userInputValuesArray];
    const copiedTotalSumArray = [...totalFeesArray];

    let inputDisplayIndex = copiedInputGroupDisplayList
      .map((inputGroup) => inputGroup.id)
      .indexOf(id);
    let userInputValuesIndex = copiedUserInputValues
      .map((userInputValues) => userInputValues.id)
      .indexOf(id);
    let totalSumIndex = copiedTotalSumArray
      .map((totalSumItem) => totalSumItem.id)
      .indexOf(id);

    if (inputDisplayIndex > -1 && copiedInputGroupDisplayList.length > 1) {
      copiedInputGroupDisplayList.splice(inputDisplayIndex, 1);
    }

    if (userInputValuesIndex > -1 && copiedUserInputValues.length > 1) {
      copiedUserInputValues.splice(userInputValuesIndex, 1);
    }

    if (totalSumIndex > -1 && copiedTotalSumArray.length > 1) {
      copiedTotalSumArray.splice(totalSumIndex, 1);
    }

    if (copiedInputGroupDisplayList.length === 1) {
      setDeleteBtn(false);
    }

    setInputGroupDisplays([...copiedInputGroupDisplayList]);
    setUserInputValues([...copiedUserInputValues]);
    setTotalFeesArray([...copiedTotalSumArray]);
  };

  return (
    <Form>
      {inputGroupDisplays.map((inputGroup) => {
        return (
          <InputGroups
            id={inputGroup.id}
            key={inputGroup.id}
            addClickHandler={addInputGroup}
            deleteClickHandler={deleteInputGroup}
            deleteBtn={deleteBtn}
            inputTextHandler={(e) => inputTextHandler(e, inputGroup.id)}
            totalFeesArray={totalFeesArray}
          />
        );
      })}
    </Form>
  );
};

export default InputFieldsList;
