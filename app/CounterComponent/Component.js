import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}


class CounterComponent extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <h2>ReduxCounter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CounterComponent);