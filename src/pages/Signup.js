import React, { useState } from 'react';
import '../components/signup.css';
import '../components/bootstrap.min.css';
import axios from 'axios';
export default function Signup() {
   const [firstname , setfirstName] = useState('');
   const [lastname , setlastName] = useState('');
   const [email , setemail] = useState('');
   const [password, setpassword] = useState('');
   const [cpassword, setcpassword] = useState('');
   const [phone , setphone] = useState('');
    const fname = (event) =>{
        console.log(event.target.value);
        setfirstName(event.target.value);
    };
    const lname = (event) =>{
        console.log(event.target.value);
        setlastName(event.target.value);
    };
    const mail = (event) =>{
        console.log(event.target.value);
        setemail(event.target.value);
    };
    const pass = (event) =>{
        console.log(event.target.value);
        setpassword(event.target.value);
    };
    const cpass = (event) =>{
        console.log(event.target.value);
        setcpassword(event.target.value);
    };
    const phoneno = (event) =>{
        console.log(event.target.value);
        setphone(event.target.value);
    };
 
    const resetInput = () =>{
         setfirstName('');
         setlastName('');
         setemail('');
         setpassword('');
         setcpassword('');
         setphone('');
    };

    const submit = (e) =>{
        if(password === cpassword){
        e.preventDefault();
      const data = {
          first_name : firstname,
          last_name : lastname,
          email : email,
          password : password,
          phone : phone
      }
      axios({
        url:'http://localhost:5000/users/register',
        method:'POST',
        data:data
      })
      .then(()=>{
        console.log("data has been sent",data);
        resetInput();
        alert("successfully registered!!");
        
      })
      .catch((err)=>{
        console.log("Error",err);
      });
      
        }
        else{
            alert("password MisMatched !!");
            
        }
   
    };

    return (
       <div>
        <div className=" register">
        <div className="row">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="icon"/>
                <h3>Welcome</h3>
                
            </div>
            <div className="col-md-9 register-right">
              
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading">SignUp in TradingWeb</h3>
                        <form onSubmit={submit}>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name *" onChange ={fname} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name *"  onChange ={lname} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *"  onChange ={pass}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                          
                                <div className="form-group">
                                    <input type="password" className="form-control"  placeholder="Confirm Password *" onChange={cpass} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *"  onChange ={mail}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmpPhone" className="form-control"  onChange ={phoneno} placeholder="Your Phone *" />
                                </div>
                                <div className = "form-group">
                                <input type="submit" className="btnRegister" value="Register"/>
                            </div>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    );
}
