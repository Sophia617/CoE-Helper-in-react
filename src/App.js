import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import CoEHelper from "./components/CoEHelper/CoEHelper";
import ImportantDates from "./components/ImportantDate/ImportantDates";
import CRICOSFinder from "./components/CRICOSFinder/CRICOSFinder";
import FeesCalculator from "./components/FeesCalc/FeesCalculator";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <CoEHelper />
      <ImportantDates />
      <CRICOSFinder />
      <FeesCalculator />
    </React.Fragment>
  );
}

export default App;
