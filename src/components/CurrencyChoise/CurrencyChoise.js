import {useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const CurrencyChoise =(props)=>{

    const [list,setList] = useState([])
    const [toggle,setToggle] = useState(false)
    // const [searchList,setSearchList] = useState([])

    const changeSelect = (event)=>{
        list.find((item)=>{
            if(item.cc === event.target.value){
                props.selectedCurrency(item)
            }
        })
    }

    // const changeSearch=(e)=>{
    //     let newList =[]
    //     list.map(item=>{
    //         if(item.txt.toLowerCase().indexOf(e.target.value) !== -1){
    //             newList.push(item)
    //         }
    //     })
    //     console.log('1111111')
    //     setSearchList([...searchList,newList])
    //     console.log('22222')
    //     console.log(newList)
    // }

    useEffect(()=>{
        let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        fetch(url).then((data)=>data.json())
            .then((response)=>setList(list=>response))
    },[])

    // useEffect(()=>{
    //     changeSearch()
    // },[searchList])


    // const FieldSearch=()=>{
    //     return(
    //         <>
    //             <Form.Control type="text" placeholder="Пошук" onInput={(e)=>changeSearch(e)}/>
    //             <ListGroup>
    //                 <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //                 <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //                 <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    //                 <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    //                 <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //             </ListGroup>
    //         </>
    //     )
    // }

    const SelectField = ()=>{
        return(
            <Form.Select className="mb-3" onChange={(event)=>changeSelect(event)}>
                <option>Выбрати валюту</option>
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

    return(
        <>
            {/*<div className="d-flex justify-content-center mb-3">*/}
            {/*    <div className="px-2">Выбiр</div>*/}
            {/*    <Form.Check*/}
            {/*    type="switch"*/}
            {/*    id="custom-switch"*/}
            {/*    onChange={()=>setToggle(toggle=> toggle = !toggle)}*/}
            {/*/>*/}
            {/*<div className="px-2">Пошук</div>*/}
            {/*</div>*/}

            {/*{toggle ? <FieldSearch/> : <SelectField/>}*/}
            <SelectField/>

        </>

    )
}

export default CurrencyChoise