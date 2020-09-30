import React from 'react';
import {Form, Col} from "react-bootstrap/esm/index";

const FormGroup = ({xs, sm, md, controlId, label, name, type, disabled, placeholder, inputTextHandler}) => {
    return (
        <Form.Group as={Col}
                    xs= {xs} sm= {sm} md={md}
                    controlId={controlId}>
            <Form.Label><strong>{label}</strong></Form.Label>
            <Form.Control name = {name}
                          type={type}
                          disabled ={disabled}
                          placeholder = {placeholder}
                          onChange={inputTextHandler} />
        </Form.Group>
    );
};

export default FormGroup;