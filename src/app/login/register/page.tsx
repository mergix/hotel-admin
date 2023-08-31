"use client";
import React from 'react'
import { useState  } from 'react';
import styles from "./page.module.css"
import axios from 'axios';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [phone, setPhone] = useState(null);


    const register = e =>{
        e.preventDefault();  
       axios.post('https://localhost:7043/Admin', 
       {
        firstName: firstName,
        lastName: lastName,
        userEmail: email,
        userPasswordHash: password,
        phoneNo: 0,
        address: address1,
        address2: address2,
        address3: address3
       }).then(res => {
        console.log(res.data)
       }).catch(err => console.log(err))
      }
  return (
    <div className={styles.container}>
    <div className = {styles.registerWrapper}>
   <form className=  {styles.form} onSubmit={register} >
   <h1>Create Account</h1>
    <div className = {styles.twobytwo}>
        <fieldset >
           <p>First Name</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="firstName" onChange={(e) => setFirstName(e.target.value)} />
       </fieldset>
       <fieldset >
           <p>Last Name</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="lastName" onChange={(e) => setLastName(e.target.value)} />
       </fieldset>
    </div>
<div className = {styles.twobytwo}>
<fieldset>

           <p>E-mail Address</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="userEmail" onChange={(e) => setEmail(e.target.value)} />
       </fieldset>
<fieldset>

           <p>Password</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="userPasswordHash" onChange={(e) => setPassword(e.target.value)} />

       </fieldset>
    </div>

<div className = {styles.twobytwo}>

       <fieldset>
           <p>Address</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="address" onChange={(e) => setAddress1(e.target.value)} />
           <input name="address2" onChange={(e) => setAddress2(e.target.value)} />
           <input name="address3"  onChange={(e) => setAddress3(e.target.value)}/>

       </fieldset>
       <fieldset >
           <p>Phone No</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="phoneNo" onChange={(e) => setPhone(e.target.value)} />
       </fieldset>
</div>
       <p> Already have an account? <a href='#' className ="forgot">Login here</a></p>
       <button type="submit">Sign Up</button>
   </form>

        </div>
    </div>
  )
}

export default Register