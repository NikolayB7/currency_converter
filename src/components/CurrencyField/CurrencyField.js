import {Component, useState} from "react";
import Form from 'react-bootstrap/Form';
const CurrencyField =(props)=>{
    return(
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Виберiть кiлькiсть</Form.Label>
            <Form.Control type="email"  onChange={(e)=>props.changeValue(e.target.value)} placeholder="Kiлькiсть в грн" />
        </Form.Group>
    )
}

export default CurrencyField