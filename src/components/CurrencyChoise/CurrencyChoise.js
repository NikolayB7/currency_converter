import {useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';

const CurrencyChoise =(props)=>{

    const [list,setList] = useState([])

    const changeSelect = (event)=>{
        list.find((item)=>{
            if(item.cc === event.target.value){
                props.selectedCurrency(item)
            }
        })
    }

    useEffect(()=>{
        let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        fetch(url).then((data)=>data.json())
            .then((response)=>setList(list=>response))
    },[])


    return(
        <Form.Select className="mb-3" onChange={(event)=>changeSelect(event)}>
            <option>Change currency</option>
            {
                list.map((item)=>{
                    return(
                        <option value={item.cc} key={item.cc}>{item.txt}</option>
                    )
                })
            }
        </Form.Select>
    )
}

export default CurrencyChoise