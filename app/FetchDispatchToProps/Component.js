import React, {Component} from 'react';
import {connect} from "react-redux";
//import {getDataProvider, getData} from "./providers";

import {getDataAction} from './actions'

function mapStateToProps(state) {
    return {
        /*items: state.items,
        total: state.total*/
        ...state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (arg) => dispatch(getDataAction(arg))
    };
};


class ReduxFetchDispatchToProps extends Component {

    componentDidMount(){
        this.props.fetchData('123')
        console.log('this.props.items = ', this.props.items)
    }

    /*changeDataInStore = (items) => {
        this.props.dispatch({ type: 'CHANGESTORE', items: items });
    };*/



    /*async function getData() {
        let testData = await getDataProvider();
        console.log(testData)
    }*/



    render() {
        return (

            <div>
            <hr />
                <h2>ReduxFetch (with DispatchToProps)</h2>
                 <div>
                     <span><b>TOTAL: {this.props.total}</b></span>
                     <button onClick={()=>{this.props.fetchData(333333)}}> TEST PROVIDER</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFetchDispatchToProps);