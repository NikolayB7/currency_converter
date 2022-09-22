import {Component} from "react";
import CurrencyList from "../CurrencyList/CurrencyList";
import CurrencyChoise from "../CurrencyChoise/CurrencyChoise";
import CurrencyField from "../CurrencyField/CurrencyField";
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
                <CurrencyList visibleList={list} />
                </div>
            </div>
        );
    }
}

export default App