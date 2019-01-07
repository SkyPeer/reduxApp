import React, {Component} from 'react';
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        /*items: state.items,
        total: state.total*/
        ...state
    };
}

class ReduxFetch extends Component {

    componentDidMount(){
        this.getDataAction()
    }

    changeDataInStore = (items) => {
        this.props.dispatch({ type: 'CHANGESTORE', items: items });
    };

    getDataAction = () => {
            fetch('http://5826ed963900d612000138bd.mockapi.io/items')
                .then((response) => {return response})
                .then((response) => response.json())
                .then((items) => this.changeDataInStore(items))
    };


    render() {
        return (

            <div>
            <hr />
                <h2>ReduxFetch</h2>
                <button onClick={()=>this.getDataAction()}>---TEST---</button>
                 <div>
                     <span><b>TOTAL: {this.props.total}</b></span>
                     <ul>
                         {this.props.items.slice(0,10).map((item) => (
                             <li key={item.id}>
                                 {item.label}
                             </li>
                         ))}
                     </ul>
                 </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ReduxFetch);