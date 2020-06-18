import {useRef, useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Router from 'next/router';
import colors from '../css-variables/colors'

const Auth = () => {
  
  const [ newUserEmail, setNewUserEmail ] = useState('');

  useEffect(() => {
    // const container = document.getElementById('container');
  }, [])


  const context = useContext(GlobalContext);

  // Create refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const loginPasswordRef = useRef();
  const loginEmailRef = useRef();
  
  // Handle login form submit
  const loginHandler = (e) => {
    e.preventDefault();
    
    // Get credentials from refs
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    // Check if email or password is empty
    if (email.trim().length === 0 || password.trim().length === 0){
      return;
    }

    // console.log(email, password)

    // Call login action to fetch token from API and change the global state
    context.login(email, password);
  };


  // Handle register form submit
  const registerHandler = async (e) => {
    e.preventDefault();
    
    // Get credentials from refs
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value

    // Check if any field is empty
    if (firstName.trim().length === 0 || lastName.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0){
      return;
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
      // ***********************ADD FLASH ERROR MESSAGING IN HERE*****************
      return;

    }

    // Call register action to send a post request to API and change the local and global state
    const newEmail = await context.register(firstName, lastName, email, password);

    // Prefill the sign up from with the newly registered email
    setNewUserEmail(newEmail);

    // Clear the register form
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passwordConfirm').value = '';
  };


  // console.log(container)

  const signUpButtonHandler = () => {
    // console.log('click')
    container.classList.add("right-panel-active");
  }

  const signInButtonHandler = () => {
    // console.log('click')
    container.classList.remove("right-panel-active");
  }

  
  return (
    <section id="auth">

    
    <div className="container" id="container">
      <div className="form-container sign-up-container">
          <form onSubmit={(e) => registerHandler(e)}>
          <h1>Create Account</h1>
          <input type="text" id="firstName" ref={firstNameRef} placeholder="First Name"/>
          <input type="text" id="lastName" ref={lastNameRef} placeholder="Last Name"/>
          <input type="email" id="email" ref={emailRef} placeholder="Email"/>
          <input type="password" id="password" ref={passwordRef} placeholder="Password"/>
          <input type="password" id="passwordConfirm" ref={passwordConfirmRef} placeholder="Confirm Password"/>
            <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={(e) => loginHandler(e)}>
          <h1>Sign in</h1>
          <input type="email" id="loginEmail" defaultValue={newUserEmail} ref={loginEmailRef} placeholder="Email"/>
          <input type="password" id="loginPassword" ref={loginPasswordRef} placeholder="Password" />

          {/* <a href="#">Forgot your password?</a> */}
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={signInButtonHandler}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={signUpButtonHandler}>Sign Up</button>
          </div>
        </div>
      </div>
      </div>

    



        <style jsx>{`

        section#auth {
          background: ##dd00ff;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          /* font-family: 'Montserrat', sans-serif; */
          /* height: 100vh; */
          margin: 5rem 0 50px;
        }

        h1 {
          font-weight: bold;
        }
          
        h2 {
          text-align: center;
        }

        p {
          font-size: 14px;
          font-weight: 100;
          line-height: 20px;
          letter-spacing: 0.5px;
          margin: 20px 0 30px;
        }

        span {
          font-size: 12px;
        }

        a {
          color: #333;
          font-size: 14px;
          text-decoration: none;
          margin: 15px 0;
        }

        button {
          border-radius: 20px;
          border: 1px solid ${colors.primary};
          background-color: ${colors.primary};
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: text-shadow 0.2s, box-shadow 0.2s;
        }

        button:hover {
          text-shadow: 0px 0px 8px rgb(255, 255, 255);
          box-shadow: 0px 0px 8px rgb(255, 255, 255);
          /* transform: scale(1); */
        }

        button.ghost {
          background-color: transparent;
          border-color: #fff;
        }

        form {
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 50px;
          height: 100%;
          text-align: center;
        }

        input {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
          border-radius: 5px;
        }

        .container {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
            0 10px 10px rgba(0,0,0,0.22);
          position: relative;
          overflow: hidden;
          width: 768px;
          max-width: 100%;
          min-height: 480px;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
        }

        .sign-in-container {
          left: 0;
          width: 50%;
          z-index: 2;
        }

        .container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .sign-up-container {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }

        .sign-up-container button, .sign-in-container button {
          margin-top: 0.8rem;
        }

        .sign-up-container h1, .sign-in-container h1 {
          margin-bottom: 0.8rem;
        }

        .container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        }

        @keyframes show {
          0%, 49.99% {
            opacity: 0;
            z-index: 1;
          }
          
          50%, 100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.6s ease-in-out;
          z-index: 100;
        }

        .container.right-panel-active .overlay-container{
          transform: translateX(-100%);
        }

        .overlay {
          /* background: #FF416C; */
          /* background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C); */
          /* background: linear-gradient(to right, #FF4B2B, #FF416C); */
          background: ${colors.reverseGradient};
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 0 0;
          color: #fff;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
            transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .container.right-panel-active .overlay {
            transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 40px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .overlay-left {
          transform: translateX(-20%);
        }

        .container.right-panel-active .overlay-left {
          transform: translateX(0);
        }

        .overlay-right {
          right: 0;
          transform: translateX(0);
        }

        .container.right-panel-active .overlay-right {
          transform: translateX(20%);
        }

        

      `}</style>
      
      </section>
  )
};

export default Auth;