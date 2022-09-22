import {Component} from "react";
import Form from 'react-bootstrap/Form';
const CurrencyField =()=>{
    return(
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Enter value currency</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    )
}

export default CurrencyField