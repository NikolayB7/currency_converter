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
            list:[]
        }
    }

    selectedCurrency=(val)=>{
        this.setState({selectable:val})
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
        const {selectable,list} = this.state
        return (
            <div className="app">
                <div className="app__wrapper">
                    <CurrencyChoise selectedCurrency={this.selectedCurrency}/>
                    <CurrencyField/>
                    <CurrencyList visibleList={list} removeItem={this.removeItem}/>
                    { (list.length)?
                        <Button onClick={()=> this.setState({list:[]})} variant="primary">Clear all</Button>:
                        null
                    }

                </div>
            </div>
        );
    }
}

export default App