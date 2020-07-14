import React, { Component } from 'react';
export default class Auth extends Component {

    login(){
        console.log("state",this.state);
        fetch('/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <input type="text" onChange={(e) => {this.setState({email:e.target.value})}}/><br></br>
                    <input type="text" onChange={(e) => {this.setState({password:e.target.value})}}/><br></br>
                    <button onClick={() =>this.login()}>Login</button>
                </div>
            </div>
        )
    }
}
