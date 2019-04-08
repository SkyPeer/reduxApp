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


class ReduxFetch2019 extends Component {

    state={
        items: []
    }

    // componentDidMount(){
    //     // this.props.fetchData('123')
    //     // console.log('this.props.items = ', this.props.items)
    // }

    
    componentDidUpdate()    {
        console.log("componentDidUpdate")
     
        }
    

    getData = (page) =>{
        fetch('http://5826ed963900d612000138bd.mockapi.io/items')
        .then((response) => {return response})
        .then((response) => response.json())
        .then((items) => this.dataHandler(items, page))
};
    


    dataHandler = (array, page) =>
    {
        console.log("dataHandler", array.length)
        let a = 5
        page == null ? a = 5 : a = page

            let newArray = array.slice(0, a)
            newArray.push({id: null, label: 'more: ' + (array.length - 5)})
            this.setState({items: newArray}, ()=>console.log(this.state.items))
        
    }
    


    render() {
        
        return (

            <div>
            <hr />
                <h2>ReduxFetch 2019</h2>
                 <div>
                     <span><b>TOTAL: {this.props.total}</b></span>
                     
                     {/* <button onClick={()=>{this.props.fetchData()}}> TEST PROVIDER</button> */}

                     <button onClick={()=>{this.getData()}}> TEST PROVIDER</button>

                        <div>  </div>
                        <div>  </div>
                     {/* <ul>
                         {this.props.items.map((item) => (
                             <li key={item.id}>
                                 <div onClick={()=>alert(item.label + ' ' + item.id)}>{item.label}</div>
                             </li>
                         ))}
                     </ul> */}

                    <ul>
                         {this.state.items.map((item, id) => (
                             <li key={item.id}>
                                 <div onClick={()=>
                                    
                                {
                                    if(item.id == null){
                                        this.getData(id + 5)
                                    }else{
                                        alert('IIITEM' + item)
                                    }
                                }
                                

                                }>{item.label + item.id}</div>
                             </li>
                         ))}
                     </ul>
                 </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFetch2019);