import React from 'react'


//class组件需要继承react。component 需要render方法
//点击修改ishot state显示到页面yy
//下面rever不是函数方程所以需要bind很麻烦
class MyTask extends React.Component{
    
    // constructor(props) {
    //     super(props);
    //     this.state = { isHot: false }
    //     // this.rever = this.rever.bind(this);
    // }

    state = {
        isHot: true
    };

    rever() {
       // this.setState({ isHot: !this.state.isHot });  
        console.log("ss");
        this.setState({
            isHot: !this.state.isHot
            
        })
        
    }
    
    render() {
        console.log(this);
        return<>
            <h2 onClick={this.rever}>我是类组件,今天天气{this.state.isHot ? 'hot' : 'not hot'}</h2>
            
            </>
    }

}
    

export default MyTask;