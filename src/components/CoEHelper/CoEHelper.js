import React, { useState, useEffect } from "react";
import { Badge, Container } from "react-bootstrap";
import Wrapper from "./CoEHelper.styles";
import CoECalculationForm from "./CoEHelperInputForm";
import ResultDisplay from "./ResultDisplay";

const CoEHelper = () => {
  const [userInputs, setInputsValues] = useState({});
  const [remainingCreditPints, setRemainingCreditPints] = useState(0);
  const [courseEndDate, setCourseEndDate] = useState("");
  const [totalTuitionFees, setTotalTuitionFees] = useState(0);
  const [currentTuitionFees, setCurrentTuitionFees] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    calculateValues();
  }, [userInputs]);

  //setValues - whenever form is submitted (calculate button clicked setValues and form updated)
  const storeInputValues = (inputData) => {
    setInputsValues({ ...inputData });
    setShowResult(true);
  };

  const calculateValues = () => {
    // Calculate Remaining Credit Pints:
    let remainingCPS =
      userInputs.totalCPS - userInputs.completedCPS - userInputs.pendingCPS;
    setRemainingCreditPints(remainingCPS);
    // Calculate Estimated course end date
    calculateCourseEndDate(remainingCPS);
    // Calculate Estimated  Tuition fees
    calcTuitionFees(remainingCPS);
  };

  // if enrolledCps is 0  - 24 just as normal.
  // if enrolled cps is less than 24 cps  (add gap)
  // if enrolled cps is more than 24 cps (deduct gap)
  const calculateCourseEndDate = (remainingCPS) => {
    let totalRemainingCPS = remainingCPS;
    let enrolledCPS = userInputs.enrolledCPS;
    let remainingSession;

    if (enrolledCPS < 24) {
      totalRemainingCPS = totalRemainingCPS + (24 - enrolledCPS);
      remainingSession = (totalRemainingCPS / 24).toFixed(1);
      totalRemainingCPS = totalRemainingCPS - (24 - enrolledCPS);
    }

    if (enrolledCPS > 24) {
      totalRemainingCPS = totalRemainingCPS - (enrolledCPS - 24);
      remainingSession = (totalRemainingCPS / 24).toFixed(1);
      totalRemainingCPS = totalRemainingCPS + (enrolledCPS - 24);
    }

    if (enrolledCPS === 24 || enrolledCPS === 0) {
      remainingSession = (totalRemainingCPS / 24).toFixed(1);
    }
    setRemainingCreditPints(totalRemainingCPS);
    calcLastSession(remainingSession);
  };

  const calcLastSession = (remainingSession) => {
    let session = "";
    console.log("Remaining Session " + remainingSession + " sessions left");
    switch (true) {
      case remainingSession <= 1:
        session = "Autumn 2021";
        break;
      case 1 < remainingSession && remainingSession <= 2:
        session = "Spring 2021";
        break;
      case 2 < remainingSession && remainingSession <= 3:
        session = "Autumn 2022";
        break;
      case 3 < remainingSession && remainingSession <= 4:
        session = "Spring 2022";
        break;
      case 4 < remainingSession && remainingSession <= 5:
        session = "Autumn 2023";
        break;
      case 5 < remainingSession && remainingSession <= 6:
        session = "Spring 2023";
        break;
      case 6 < remainingSession && remainingSession <= 7:
        session = "Autumn 2024";
        break;
      case 7 < remainingSession && remainingSession <= 8:
        session = "Spring 2024";
        break;
      default:
        console.log(
          "May be.. too future, cannot show after Spring 2025 session.."
        );
    }
    setCourseEndDate(session);
  };

  const calcTuitionFees = (remainingCPS) => {
    //console.log(userInputs);
    let tuitionFees = userInputs.subjectTuitionFees;
    let cps = userInputs.subjectCPSForFees;
    let enrolledCPS = userInputs.enrolledCPS;
    let currentSessionTuitionFees = (tuitionFees / cps) * enrolledCPS;
    let estimatedTotalTuitionFees = (tuitionFees / cps) * remainingCPS;

    setCurrentTuitionFees(currentSessionTuitionFees);
    setTotalTuitionFees(estimatedTotalTuitionFees);
  };

  return (
    <Wrapper id="home">
      <Container>
        <Badge pill variant="info">
          Autumn 2021
        </Badge>
        <h1>
          <i className="fas fa-dog"></i> CoE Helper
        </h1>
        <br />
        <p>Calculate estimated course end date & total tuition fees left.</p>
        <br />
        <CoECalculationForm storeInputValues={storeInputValues} />
        <br />
        {showResult && (
          <ResultDisplay
            remainingCreditPints={remainingCreditPints}
            courseEndDate={courseEndDate}
            totalTuitionFees={totalTuitionFees}
            currentTuitionFees={currentTuitionFees}
            hideDisplayCard={() => {
              setShowResult(false);
            }}
          />
        )}
      </Container>
    </Wrapper>
  );
};
export default CoEHelper;
