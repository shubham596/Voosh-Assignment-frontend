// Login.js
import React, { useState } from 'react';
import '../Auth.css';  
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
const loginHandler=async()=>{
try{

  const provider= new GoogleAuthProvider();
  const {user}=await signInWithPopup(auth,provider)
  console.log(user)

}catch(error){
toast.error("Sign In Fail");
}
};

  return (
    <>
    
     <div className="auth-container">
     <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
         
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
         
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='btn' type="submit">Login</button>
      </form>


      <div className='AskAccount'>
      <b>Don't have an account? </b>  <Link to="/signup"> Signup</Link>
      </div>

      <div className='account'>
     <button className='GoogleBtn' onClick={loginHandler} >
     <span>
      Login with Google
     </span>
     </button>
     </div>

    </div>
    
    </>
  );
};

export default Login;
