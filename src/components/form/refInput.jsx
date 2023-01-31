import React, { createRef } from "react" 

//拿到输出内容但不re render
class RefInput extends React.Component{
    msgRef = createRef()

    getValue = () => {
        //通过msgRef获取input value值
        // console.log(this.msgRef);
        console.log(this.msgRef.current.value);
    
    }



    render() {
        return <>
            <input type={"text"} ref={this.msgRef} ></input>
            <button onClick={this.getValue}>点击获取输入框的值</button>
        </>
    }
}

export default RefInput 