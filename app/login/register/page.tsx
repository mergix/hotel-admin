import React from 'react'
import styles from "./page.module.css"

function Register() {
  return (
    <div className={styles.container}>
    <div className = "register-wrapper">
   <form className= "formBox" >
   <h1>Create Account</h1>
    <div className = "twobytwo">

<fieldset >
         <label>
           <p>First Name</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="firstName"  />
         </label>
       </fieldset>
<fieldset >
         <label>
           <p>Last Name</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="lastName"  />
         </label>
       </fieldset>
    </div>
    <div className = "twobytwo">

<fieldset>
         <label>
           <p>E-mail Address</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="userEmail" />
         </label>
       </fieldset>
<fieldset>
         <label>
           <p>Password</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="userPasswordHash"  />
         </label>
       </fieldset>
    </div>

<div className = "twobytwo">

       <fieldset >
         <label>
           <p>Address</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="address"  />
           <input name="address2" />
           <input name="address3" />
         </label>
       </fieldset>
       <fieldset >
         <label>
           <p>Phone No</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="phoneNo" />
         </label>
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