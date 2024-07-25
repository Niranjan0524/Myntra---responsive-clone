import React from 'react';
import { Link } from "react-router-dom";

const LoginSignup = () => {
    return (
        <>
        <div className="loginPage">
            
                
            <div className="loginImage">
                <img src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg" id="loginImage" alt="Sale..." />
            </div>
            <div className="userInfo">
                <form action="">
                    
              <label htmlFor="Name">Name:</label>
              <input type="text" placeholder=' Name' />
                
              <label htmlFor="Username">UserName:</label>
              <input type="text" name="username" id="usrN" placeholder='Username' />

              <label htmlFor="Email">Email:</label>
              <input type="email" name="email" id="mail" placeholder='Email' />

              <label htmlFor="Contact">Contact No:</label>
              <input type="tel" name="contact" placeholder='Mobile Number' />

              <label htmlFor="password">Password</label>
              <input type="password"  name="password" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='password'/>


                </form>
            </div>
            
            <div className="loginButtons">
                
            <button type="login" class="btn btn-primary x">Signup</button>
            <p>or <Link className="loginText" to="/loginPage">Login</Link></p>
            </div>
           
        </div>

        </>
    )
};

export default LoginSignup;
