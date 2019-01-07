import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './actions'
import { counterValueAction } from './mapDispatchToProps'


function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        countValAct: () => dispatch(counterValueAction())
    };
};



class CounterComponent extends Component {
    state = { count: 0 };

    /*
    //just function
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };*/

    /*
    //just function
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };*/

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

    countValue = (arg) => actions.countervalue.call(this, arg);


    render() {
        return (
            <div>
                <h2>ReduxCounter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                        <span>{' ---> ' + this.props.count + ' <--- '}</span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={()=>this.countervalue(777)}> = 777</button>
                    <button onClick={()=>this.countValue(111)}> = 111</button>
                    <button onClick={this.props.countValAct}> action test</button>
                    <button onClick={()=>console.log(counterValueAction)}> TEST </button>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps/*, mapDispatchToProps*/)(CounterComponent);