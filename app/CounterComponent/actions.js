let actions = {

    countervalue: function(arg) {
        console.log('actionThis:', this.props, 'arg = ', arg);
        this.props.dispatch({type: 'COUNTERVALUE', value: arg})
    }


};

export default actions
