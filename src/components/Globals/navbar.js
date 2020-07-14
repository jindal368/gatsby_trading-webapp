import React ,{ Component} from 'react'
import {Link} from "gatsby";
import logo from "../../images/logo.jpg";
import { FaCartPlus } from 'react-icons/fa';
export default class navbar extends Component{
    
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
                path:'/about',
                text:'about'
            },
            {
                id:3,
                path:'/add',
                text:'Sell'
            },
            {
                id:4,
                path:'/Login',
                text:'Login'
            },
            {
                id:5,
                path:'/Signup',
                text:'Signup'
            },
        ]
        };
        navbarHandler = () =>{
           this.state.navbarOpen?this.setState({navbarOpen:false,css:"collapse navbar-collapse"}):this.setState({navbarOpen:true,css:"collapse navbar-collapse show"});
    };

   render(){
       return(
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
        <li className="nav-item ml-lg-5 ">
          <FaCartPlus className="cart snipcart-checkout"/>
        </li>
           </ul>
          </div>
          </nav>
       )
   }

}