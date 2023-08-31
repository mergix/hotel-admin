"use client";
import React from 'react'
import { useState  } from 'react';
import styles from "./page.module.css"
import AuthContext from "../context/AuthProvider"

import axios from 'axios';
import { useRouter } from 'next/navigation';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()



  const login = e =>{
    e.preventDefault();  
   axios.post('https://localhost:7043/LoginAdmin', 
   {
    userEmail: email,
    userPassword: password,
   }).then(res => {
    console.log(res.data)
    router.push("/")
   }).catch(err => console.log(err))
  }
  return (
    <div className={styles.container}>
             <div className = {styles.LoginWrapper}>
      <form className= {styles.form} onSubmit={login}>
      <h1>Login to your account</h1>
         <label>
           <p>E-mail Address</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input
           className={styles.input} 
           name="email" 
           onChange={(e) => setEmail(e.target.value)} />
         </label>

         <label>
           <p>Password</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input 
           className={styles.input}
           name="password"
           onChange={(e) => setPassword(e.target.value)} />
         </label>

         {/* <a href='#' className ={"forgot"}> Forgot Password?</a> */}
         <p> Don't have an account? <a href='/login/register' className ={"forgot"}>Register here</a></p>
       <button 
       type="submit"
       className={styles.button}>Sign In
       </button>
      </form>

     </div>
    </div>
  )
}

export default Login