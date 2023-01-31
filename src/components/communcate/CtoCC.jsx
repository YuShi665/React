import React, { createContext} from "react"

// Parent->B->A

//导入creatContext方法
const {Provider,Consumer } = createContext()

function ComA() {
    return (
        //通过consumer使用value
        <div>
            我是组件A
            <Consumer>
                {value => <span>{ value}</span>}
            </Consumer>

        </div>
    )
}
function ComB() {
    return (
        <div>
            我是组件B
            <ComA></ComA>

        </div>
    )
}

class Parent extends React.Component{

    state = {
        msg:"this is message from parent"
    }
    render()
    {
        //provider包裹跟组件
        return(
        <Provider value={this.state.msg}>
            <ComB></ComB>
        </Provider>
        )
    }
}

export default Parent