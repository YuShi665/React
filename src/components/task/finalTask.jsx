import React from "react";

class FinalTask extends React.Component{

    state = {
        isHot: false,
        count: 0,
        list: [1, 2, 3],
        person: {
            name: "max",
            age:18
        }
    };

    rev = () => {
        // const isHot = this.state.isHot;
        this.setState({isHot : !this.state.isHot})
    }

    //如何传递事件
    handler = (e) => {
        e.preventDefault();
        console.log(e);
    }
    
       //这里如果不用箭头函数点击事件不会改变state的值
    clik = () => {
        this.setState({ count: this.state.count + 1 ,
            list: [...this.state.list, 4, 5],
            person: {
                ...this.state.person,
                name : "vv"
        }});
    }
    render() {
        return <>
            <a href="http://www.baidu.com/" onClick={this.handler} >百度</a>

            <button onClick={this.clik}>按钮{this.state.count}</button>

            <ul>{this.state.list.map((item) => {
                return <li>{item }</li>
            })}</ul>
            <h1 onClick={this.rev}>今天气温{this.state.isHot?"hot":"not Hot" }</h1>
        </>
    }

}

export default FinalTask