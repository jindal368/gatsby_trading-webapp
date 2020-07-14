import React , {useState} from 'react';
import '../components/login.css';
import '../components/bootstrap.min.css';
import axios from 'axios';
export default function Login() {
  
   const [e , setEmail] =useState('');
   const [p, setpassword] = useState('');
   
    const Email = (event) =>{
        setEmail(event.target.value);
        console.log(event.target.value);
    };

    const Password = (event) =>{
        setpassword(event.target.value);
        console.log(event.target.value);
    };

    const Submit = (event) =>{
       event.preventDefault();
            
     
      //generating token

       const data = {
          email : e,
          password : p
       }
       axios({
        url:'http://localhost:5000/users/login',
        method:'POST',
        data:data
      })
      .then(()=>{
        console.log("Data is authenticating : ",data);
        
      })
      .catch((err)=>{
        console.log("Error",err);
      });

      axios.get('http://localhost:5000/users/profile')
      .then((res)=>{
          const token  = res.token;
          if(token){
           console.log("login successfully");
          }
          else
          alert("Login failed due to invalid credentials !!");
      })
      .catch((err) =>{
        console.log("error",err);
      })
    };

    return (
        <div>
         <div className="container">
           <div className="card card-container">
            <img className="profile-img-card"alt="user" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"  /> 
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"alt="profile" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={Submit} method="POST">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" onChange={Email} className="form-control" placeholder="Email address" required autofocus/>
                <input type="password" id="inputPassword" onChange={Password} className="form-control" placeholder="Password" required/>
                <div id="remember" className="checkbox">
                   
                        <input type="checkbox" value="remember-me"/> Remember me
                   
                </div>
              
               
                <button className="btn btn-lg btn-primary btn-block btn-signin"  type="submit">Sign in</button>
           <hr w-25></hr>
         

               
            </form>
            <a href="/update" className="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>
        </div>
    );
}
