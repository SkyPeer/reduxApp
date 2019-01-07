import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}


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


    render() {
        return (
            <div>
                <h2>ReduxCounter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                        <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CounterComponent);