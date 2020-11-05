import React from "react";
import Container from "react-bootstrap/Container";
import SessionDatesTable from "./SessionDatesTable";
import CoursesByCalendar from "./CoursesByCalendar";
import AlertMessage from "../ReusableComponents/AlertMessage";
import Wrapper from "./ImportantDates.styles";

const ImportantDates = () => {
  return (
    <Wrapper id="importantDates">
      <Container>
        <h1>
          <i className="fas fa-calendar-alt"></i> Important Dates{" "}
        </h1>
        <br />
        <SessionDatesTable />
        <br />
        <CoursesByCalendar />
        <br />
          <p><strong>2021 Dates</strong></p>
          <AlertMessage
              variant="info"
              href="https://www.handbook.uts.edu.au/dates_academic_2021.html"
              message1="Click"
              linkText="HERE"
              message2=" for UTS Academic Calendar 2021 (open in a new tap)."
          />
          <AlertMessage
              variant="warning"
              href="https://www.handbook.uts.edu.au/dates_2021.html"
              message1="Click"
              linkText="HERE"
              message2=" for UTS Principal Dates 2021 (open in a new tap)."
          />
          <p><strong>2020 Dates</strong></p>
        <AlertMessage
          variant="info"
          href="https://www.handbook.uts.edu.au/dates_academic.html"
          message1="Click"
          linkText="HERE"
          message2=" for UTS Academic Calendar 2020 (open in a new tap)."
        />
        <AlertMessage
          variant="warning"
          href="https://www.handbook.uts.edu.au/dates.html"
          message1="Click"
          linkText="HERE"
          message2=" for UTS Principal Dates 2020 (open in a new tap)."
        />
      </Container>
    </Wrapper>
  );
};
export default ImportantDates;
