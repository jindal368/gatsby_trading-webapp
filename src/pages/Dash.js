import React, { Component } from 'react';
import {Link} from 'gatsby';
import logo from "../images/logo.jpg";
export default class Dash extends Component {
  state ={
    navbarOpen:false,
    css:'collapse navbar-collapse show',
    links:[
        {
            id:1,
            path:'/',
            text:'home'
        },
        {
            id:2,
            path:'/profile',
            text:'profile'
        },
        {
            id:3,
            path:'/add',
            text:'Sell'
        },
        {
            id:4,
            path:'/Login',
            text:'Logout'
        },
        {
            id:5,
            path:'/contactUs',
            text:'#'
        },
    ]
    };
    navbarHandler = () =>{
       this.state.navbarOpen?this.setState({navbarOpen:false,css:"collapse navbar-collapse"}):this.setState({navbarOpen:true,css:"collapse navbar-collapse show"});
};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">
              <img src={logo} alt="Tradeweb"/>
          
          </Link>
          <button className="navbar-toggler" type="button"onClick={this.navbarHandler}>
              <span className="navbar-toggler-icon"></span>

          </button>
          <div className={this.state.css}>
           <ul className="navbar-nav mx-auto">
            {
                 this.state.links.map(link =>{
                     return(
                         <li key ={link.id} className="nav-item">
                             <Link to={link.path} className="nav-link ">
                                 {link.text}
                             </Link>
                         </li>
                     )
                 })

            }
            </ul>
      </div>
      </nav>
      </div>
    )
  }
}
