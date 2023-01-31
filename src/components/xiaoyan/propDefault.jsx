import React from "react";
//导入包 有各种各样内置校验规则
import { ReactPropTypes } from "react";
//  import PropTypes from 'prop-types';

// function List(props) {
//     return (
//         <div>
//             {props.pageSize }
//         </div>
//     )
// }
//不推荐这么写
// List.defaultProps = {
//     pageSize : 10 //如果给我传pagesize就以传入位置，如果不穿就是10
    
// }
//推荐再prop里赋值当作默认值
function List({ pageSize = 10 }) {
    return (
        <div>
            {pageSize }
        </div>
    )
}



export default class App extends React.Component{
    render() {
        return (
            <div>
                {/* <List ></List> */}
                  <List pageSize={100}></List>
            
            </div>
        )
    }
}