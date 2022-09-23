import Table from 'react-bootstrap/Table'
import CloseButton from 'react-bootstrap/CloseButton';
import {useState,useEffect} from "react";


const TableBlock =(props)=>{
    const [listCurrency,setListCurrency] = useState([])

    useEffect(()=>{
        setListCurrency(props.data)
    },)
    return(
        <Table striped bordered size="sm" variant="dark">
            <thead>
            <tr>
                <td className="text-center">Назва</td>
                <td className="text-center">Вартiсть за 1 (в грн)</td>
                <td className="text-center">Код</td>
                <td className="text-center">Вартiсть за {props.value} одиниць</td>
                <td className="text-center"></td>
            </tr>
            </thead>
            <tbody>
            {
                listCurrency.map(item=>{
                    return(
                        <tr key={item.cc}>
                            <td>{item.txt}</td>
                            <td>{item.rate}</td>
                            <td>{item.cc}</td>
                            <td>{(props.value * item.rate).toFixed(2)} грн</td>
                            <td className="text-center">
                                <CloseButton variant="white" onClick={()=> props.removeItem(item.cc)}/>
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
            { (props.visibleList.length) ? <TableBlock removeItem={props.removeItem} value={props.value} data={props.visibleList}/>: null}
        </>
    )
}

export default CurrencyList