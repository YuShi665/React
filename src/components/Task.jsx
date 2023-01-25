import React from 'react'

class MyTask extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {isHot : false}
    }
    
    render() {
        console.log(this);
        return <h2 onClick={rever}>我是类组件,今天天气{this.state.isHot?'hot':'not hot' }</h2>
    }

}
    function rever() {
    
        console.log("object");
        
    }

export default MyTask;