import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({variant, href, message1, linkText, message2}) => {
    return(
        <Alert variant={variant}>
            {message1} <Alert.Link href={href} target="_blank"> {linkText} </Alert.Link>
            {message2}
        </Alert>
    )
};
export default AlertMessage;