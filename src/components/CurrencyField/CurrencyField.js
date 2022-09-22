import {Component, useState} from "react";
import Form from 'react-bootstrap/Form';
const CurrencyField =()=>{
    const [valueField,setValueField] = useState(0)
    return(
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Enter value currency</Form.Label>
            <Form.Control type="email" value={valueField} onChange={(event)=>setValueField(event.target.value)} placeholder="Enter email" />
        </Form.Group>
    )
}

export default CurrencyField