import React from "react";

//函数式组件
// function SonF(props) {
//     //props是一个对象，里面存着通过父组件传入的所有数据
//     console.log(props);
//     //解构赋值
//     const {msg,list,getMes,child,person }=props
//     return <>
//         <div>我是函数子组件,
//             {msg},
//             {person.name},
//             <button onClick={getMes}>触发父组件传入函数</button>
//             {child}
//             {list.map(item => {
//                 return (
//                     <p>{ item}</p>
//                 )
//             }) }
//         </div>
//         </>
// }
function SonF({msg,list,getMes,child,person }) {
    
    return <>
        <div>我是函数子组件,
            {msg},
            {person.name},
            <button onClick={getMes}>触发父组件传入函数</button>
            {child}
            {list.map(item => {
                return (
                    <p>{ item}</p>
                )
            }) }
        </div>
        </>
}

//类组件
class SonC extends React.Component{
    render() {
         //类组件必须用过this关键词，去获取这里的props是固定的
        return <div>  
            我是类子组件{this.props.msg}
            
            
        </div>
    }
}


class Parent extends React.Component{

    state = {
        message: ",我是信息？",
        list: [1, 2, 3, 4],
        person: {
            name: 'max',
            age:'18'
        },

    }
    getMes = () => {
        console.log("父组件中的函数");
    }
    

    render() {
        //msg的名字随便取
        return <>
            
            <SonC msg={this.state.message}></SonC>
            <SonF
                msg={this.state.message}
                list={this.state.list}
                person={this.state.person}
                getMes={this.getMes}
                child={<span>this is span</span>}

            ></SonF>
        
        </>
    }
}
export default Parent