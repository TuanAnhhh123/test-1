import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string,
    age:number,
    address:string,
}


export default class Class extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state = {
            name:"minh thu",
            age:25,
            address:"hà nội"
        }

    }
        //khái báo hàm trên render
        handleChange=()=>{
            // khi muốn cập nhật state
            this.setState({
                age:26,
                name:"Lan"
            })
        }
  render() {
    return (
      <div>
        {/* 
        Trong class để quản lý state
        */}
        {this.state.name} năm nay {this.state.age} tuổi
        {/* Cập nhật state đối với class */}
        <button onClick={this.handleChange}>change age</button>
      </div>
    )
  }
}
