import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataAction } from './actions';
import newStore from './newStore'

class MyComponent extends Component {
    state = {
        counter: 0
    };


    componentDidMount() {
       // console.log(this.props);
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        this.unsubscribeStore = newStore.subscribe(this.updateStateFromReduxNewStore);
    }

    componentWillUnmount(){
        this.unsubscribeStore();
    }

    updateStateFromReduxNewStore = () =>  //функция подписки на изменения stor'a
    {
        this.setState({counter: newStore.getState().counter});
        console.log('updateStateFromReduxNewStore :', newStore.getState().counter);
        //this.setState({ counter: newStore.getState() });
        //return newStore.getState().counter;
    };



    render() {
        return (
            <div>
                <div>
                    <hr />
                    Counter: <b>{this.state.counter}</b><br />
                    <button onClick={()=>{console.log('console.log(newStore.getState()) ', newStore.getState(), '|', this.updateStateFromReduxNewStore())}}>newStore.getState() console.log:</button>
                    <button onClick={()=>newStore.dispatch({type: 'INCREMENT'})}> + </button>
                    <button onClick={()=>newStore.dispatch({type: 'DECREMENT'})}> - </button>
                </div>
                <hr />
                <h5>items:</h5>

                <ul>
                    {this.props.items.slice(0,10).map((item) => (
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