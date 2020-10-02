import React from "react";
import Alert from "../ReusableComponents/AlertMessage";
import { ListGroup, Badge } from "react-bootstrap";
import CopyIcon from "../ReusableComponents/CopyIcon";

const CourseList = ({ searchResult }) => {
  return (
    <>
      {searchResult.length >= 1 ? (
        <ListGroup>
          {searchResult.map((result) => {
            return (
              <ListGroup.Item key={result.CRICOS}>
                <label className="h5">
                  <Badge>
                    {result.CRICOS} &nbsp;
                    <CopyIcon text={result.CRICOS} />
                  </Badge>
                </label>
                &nbsp;&nbsp; <strong>{result.code}</strong>
                &nbsp;&nbsp;{result.name}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <Alert
          variant="danger"
          href="https://www.handbook.uts.edu.au/"
          message1="Opps! cannot find the course. Please check  "
          linkText="UTS Handbook"
          message2=" (Open in a new tab)."
        />
      )}
    </>
  );
};

export default CourseList;
