import React from 'react';
import Form from 'react-bootstrap/Form'

const Search = (props) => {

    const onChangeHandler = (e)=> {
        props.userInputHandler(e.target.value);
    };

    return(
        <>
            <Form>
                <Form.Group controlId="searchInput">
                    <Form.Control
                        name = "query"
                        value = {props.query}
                        type = "text"
                        onChange = {onChangeHandler}
                        placeholder="Search course name or course code to find CRICOS..." />
                </Form.Group>
            </Form>
        </>
    );
};

export default Search;