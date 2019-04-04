import React, {Component} from 'react';
import { connect } from 'react-redux';
import {decrement, increment, counterValue, add} from "./mapDispatchToProps";


function mapStateToProps(state) {
    return {
        count: state.count,
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => dispatch(decrement()),
        increment: () => dispatch(increment()),
        counterValue: (arg) => dispatch(counterValue(arg)),
        add: (value) => dispatch(add(value))

    };
};



class NewRedux2019 extends Component {

    state={
        text: ''
    }


    changeText = (e) => {
        console.log(e.target.value)
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <h2>NewRedux2019</h2>
                <div>
                    <input value={this.state.text} onChange={this.changeText}></input>
                    <button onClick={()=>this.props.add(this.state.text)}> ADD ITEM </button>
                    <button onClick={()=>console.log(this.props.items)}> CONSOLE ITEMS </button>
                    <br />                    <br />
                    
                    <button onClick={this.props.decrement}>-</button>
                    
                        <span>{' ---> ' + this.props.count + ' <--- '}</span>
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={()=>this.props.counterValue(777)}> = 777</button>

                    <button disabled={true} onClick={()=>console.log(/*counterValueAction */)}> TEST </button>
                    <br />

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRedux2019);
//export default NewRedux2019