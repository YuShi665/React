import React from "react";

class InputItem extends React.Component{



    //声明用来控制input value的react组件自己的状态
    state = { msg: "this is msg" };

    //回调函数
    handler = (e) => {
        console.log("xx");
        console.log(e);
        //拿到输入框的最新值交给state中的message
        this.setState({ msg: e.target.value })
    }



    render() {
        return <>
            {/* //给input框的value属性绑定react state */}
            <input type={"text"}  value={this.state.msg} onChange={this.handler}></input>
        </>
    }
}
export default InputItem