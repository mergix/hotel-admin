import React from 'react'
import styles from "./page.module.css"

function Login() {
  return (
    <div className={styles.container}>
             <div className = "login-wrapper">
      <form className= {"formBox"}>
      <h1>Login to your account</h1>
      <fieldset>
         <label>
           <p>E-mail Address</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="email"  />
         </label>
       </fieldset>
       <fieldset>
         <label>
           <p>Password</p>
           {/* <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a> */}
           <input name="password"  />
         </label>
       </fieldset>
         <a href='#' className ={"forgot"}> Forgot Password?</a>
         <p> Don't have an account? <a href='/login/register' className ={"forgot"}>Register here</a></p>
       <button type="submit">Sign In</button>
      </form>

     </div>
    </div>
  )
}

export default Login