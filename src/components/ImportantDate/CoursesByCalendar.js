import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jsonData from '../../data/coursesByCalendar';

const CoursesByCalendar = () => {
    const courses = [...jsonData];
    return(
        <Accordion>
            {
                courses.map((calendar,index) => {
                    return (
                        <Card key={index}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button} variant="link" eventKey={calendar.eventKey}>
                                    <strong>{calendar.name}</strong> &nbsp;&nbsp;
                                    <i className="fas fa-caret-down"></i>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={calendar.eventKey}>
                                <Card.Body>
                                    {
                                        calendar.courseList.map((course, index)=> <li key={index}>{course}</li>)
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    );
                })
            }
        </Accordion>
    );
};
export default CoursesByCalendar;