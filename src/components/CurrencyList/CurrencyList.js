import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from "react";

const TableBlock =(props)=>{
    const [listCurrency,setListCurrency] = useState([])

    useEffect(()=>{
        setListCurrency(props.data)
    },)
    return(
        <Table striped bordered size="sm" variant="dark">
            <tbody>
            {
                listCurrency.map(item=>{
                    return(
                        <tr key={item.cc}>
                            <td>{item.txt}</td>
                            <td>{item.rate}</td>
                            <td>{item.cc}</td>
                            <td>val-calc</td>
                            <td className="text-center">
                                <Button variant="outline-light">Remove</Button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    )
}

const CurrencyList =(props)=>{
    return(
        <>
            { (props.visibleList.length) ? <TableBlock data={props.visibleList}/>: 'Загрузка...'}
        </>
    )
}

export default CurrencyList