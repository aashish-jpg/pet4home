import React from "react";
import './../css/signup.css';
import dogs from './../images/dogs.webp'
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

function SignUp() {
  
  return (
    <div className="container mt-10">
        <span><img src={dogs} alt="" /></span>
    <form className="Signup font-serif " >
      <h1 className="text-3xl font-serif font-semibold ml-64 h-12 w-44 bg-white ">
        Sign Up
      </h1>
      
      <div className="inputs" >
        <label htmlFor="fullname" className="form-label">
          full name
        </label><br />
        <input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="user name"
          className="form-input "
         
        />
       
      </div>
      <div className="inputs">
        <label htmlFor="email"  className="form-label">
          email
        </label><br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="name@example.com"
          className="form-input "
          
        />
      </div>
      <div className="inputs">
        <label htmlFor="password" className="form-label">
          password
        </label><br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="form-input "
         
        />
      </div>
      <div className="inputs">
        <label htmlFor="password2" className="form-label">
         confirm password
        </label><br />
        <input
          id="password2"
          type="password"
          name="password2"
          placeholder="re-enter password"
          className="form-input "
        
        />
      </div>
      <div className="inputs">
        <label htmlFor="contact" className="form-label">
          contact
        </label><br />
        <input
          id="contact"
          type="contact"
          name="contact"
          placeholder="+977"
          className="form-input "
         
        />
      </div>
        <button className="form-submit-btn bg-slate-200" type="submit">
        Sign Up
        </button>
        <div className="icons bg-white ">
          <FacebookIcon className="face "/>
          <GoogleIcon />

        </div>
        <div className="switch">
             <a href="" className="bg-white ml-6">Already have an Account? LOG IN</a>
        </div>
    </form>
    </div>
  );
}

export default SignUp;
