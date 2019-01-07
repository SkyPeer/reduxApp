import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './actions'
import {decrement, increment, counterValue} from "./mapDispatchToProps";




function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => dispatch(decrement()),
        increment: () => dispatch(increment()),
        counterValue: (arg) => dispatch(counterValue(arg))

    };
};



class CounterComponentDispToProps extends Component {


    //ACTIONS
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    countervalue = (arg) => {
      this.props.dispatch({ type: 'COUNTERVALUE', value: arg })
    };

    countValue = (arg) => actions.counterValue.call(this, arg);


    render() {
        return (
            <div>
                <h2>ReduxCounter(With mapDispatchToProps)</h2>
                <div>
                    <button onClick={this.props.decrement}>-</button>
                        <span>{' ---> ' + this.props.count + ' <--- '}</span>
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={()=>this.props.counterValue(777)}> = 777</button>

                    <button disabled={true} onClick={()=>console.log(/*counterValueAction */)}> TEST </button>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponentDispToProps);