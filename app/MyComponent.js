import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataAction } from './actions';

class MyComponent extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        return (
            <div>
                <div>
                    Counter
                <button onClick={()=>{console.log(this.props)}}>TEST BUTTON</button>
                </div>
                <hr />
                <h5>items:</h5>

                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getDataAction(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);