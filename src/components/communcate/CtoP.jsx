import React from 'react'


//父传子 props 函数
//子传父 子组件需要调用父组件传递过来的函数，并且把想要传递的数据当成参数传入即可
function Son(props) {
    const { getMsg } = props
    const clickHander = () => {
        getMsg("子组件传来的")
    }

    return <div>
        this is son
        {/* <button onClick={()=>getMsg("子组件传来的")}></button> */}
        <button onClick={clickHander}>按钮</button>
    </div>
}

class Parent extends React.Component{

    getSonMsg = (sonMsg) => {
        console.log(sonMsg);
    }


    render() {
        return <>
            <Son getMsg={this.getSonMsg }></Son>
        </>
    }

}

export default Parent