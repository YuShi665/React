import React from "react";
//childern属性，
//可以穿 文本， 标签元素，函数，jsx
//接收要为children 不能写child
function Son({ children }) {
   children[1]()
    return (
        
        <div>ListItem,{children[0] }</div>
    )
}

class Parent extends React.Component{
    render() {
        return (
            <div>
                <Son>
                    {/* 文本 */}
                    this is child
                    {/* 标签 */}
                    {/* <div>this is child</div> */}
                    {/* 函数 */}
                    { ()=>{console.log("sss");}}
            </Son>
        </div>
        )
    }
}
export default Parent