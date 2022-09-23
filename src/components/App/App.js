import {Component} from "react";
import CurrencyList from "../CurrencyList/CurrencyList";
import CurrencyChoise from "../CurrencyChoise/CurrencyChoise";
import CurrencyField from "../CurrencyField/CurrencyField";
import Button from 'react-bootstrap/Button';
import './App.css'
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectable :{},
            list:[],
            value:0
        }
    }

    selectedCurrency=(val)=>{
        this.setState({selectable:val})
    }

    changeValue=(val)=>{
        console.log(val,'val')
        this.setState({value:val})
    }

    removeItem=(val)=>{
        this.setState({list:this.state.list.filter(item=> item.cc!== val )})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {list,selectable} = this.state
        if(this.state.selectable !== prevState.selectable){
            this.setState({list:[...list,selectable]})
        }
    }

    render() {
        const {selectable,list,value} = this.state
        return (
            <div className="app">
                <div className="app__wrapper">
                    <CurrencyChoise selectedCurrency={this.selectedCurrency}/>
                    { (list.length)?<CurrencyField changeValue={this.changeValue}/>:null}

                    {
                        (list.length)? <CurrencyList visibleList={list} value={value} removeItem={this.removeItem}/> :null
                    }
                    {
                        (list.length)?<Button onClick={()=> this.setState({list:[]})} variant="primary">Clear all</Button>: null
                    }

                </div>
            </div>
        );
    }
}

export default App