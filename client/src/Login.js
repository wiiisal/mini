import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import './Login.css'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import {useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';

export default function Login() {
 const navigate=useNavigate()
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const login=(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
        })
        .catch((e) => alert(e.message));
    }
    const register=(e)=>{
        e.preventDefault();
         createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
    }
  return (
    <div className='login'>
      <div>
        <Link to="/">
            <img className='login_logo' src='https://cdn.shopify.com/s/files/1/0656/6779/3127/files/2mini_logo.jpg?v=1658934969' alt='image'/>
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event=>setEmail(event.target.value)} type='text'/>
                <h5>Password</h5>
                <input value={password} onChange={e=>setPassword(e.target.value)} type='text'/>
                <button onClick={login}>Sign In</button>
            </form>
          <button onClick={register}>create account</button>
        </div>
      </div>
    </div>
  )
}
