import React from "react";
//导入包 有各种各样内置校验规则
 import { ReactPropTypes } from "react";
// import PropTypes from 'prop-types';

//校验需要安装 prop-types
//npm add prop-types
//组件名.propType={} 给组件添加校验规则

function Test({list }) {
    return (
        <div>
            {list.map(item =><p> item</p>)}
    </div>)
}
//定义规则
Test.propTypes = {
    list : ReactPropTypes.array //限定这里的list参数类型必须时数组类型
}

class App extends React.Component{
    render() {
        return(
        <div>
                <Test list={ [1,2,3]}>
                    
            </Test>
        </div>
        )
    }
}

export default App