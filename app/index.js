import React, {Component} from 'react';
import {render} from 'react-dom'
class MyComponent extends Component {
    state = {
        world: 'hello!'
    };

    render() {
        return(
            <div>
                {this.state.world + '... world'}
            </div>
        )
    }
}

render(
    <MyComponent/>,
    document.getElementById('root')
);