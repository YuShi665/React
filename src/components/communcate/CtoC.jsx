import React from "react";

//目标： B组件中的数据传给A
// 先把B中的数据通过子传夫给parent
//再把parent接受的数据传给组件A

function SonA(props) {
    const {sendMsgToA}=props
    return <>
        <div>this is sonA,
            {sendMsgToA }

        </div>
    </>
}

function SonB(props) {
    const msg = "B组件的消息"
    const {getBMsg }=props
    const clickHandler = () => {
        getBMsg(msg)
    }
    return <>
        <div>this is sonB
            <button onClick={clickHandler}>点击</button>
        </div>
    </>
}



class Parent extends React.Component{

    state = {
        sendMsgToA :""
    }



    //声明一个传给B组件的方法

    getBMsg = (props) => {
        // console.log(props);
        this.setState({
            sendMsgToA:props
        })
    }

    render() {
        return <>
            <SonA sendMsgToA={this.state.sendMsgToA }></SonA>
            <SonB getBMsg={this.getBMsg}></SonB>
        </>
    }
}

export default Parent