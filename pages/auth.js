import {useRef, useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Router from 'next/router';

const Auth = () => {
  
  const [ newUserEmail, setNewUserEmail ] = useState('');


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
  
  return (
      <section id="auth" className="container">
        <div className="form-container">
          <h1>Sign In</h1>
          <form onSubmit={(e) => loginHandler(e)}>
            <div className="form-control">
              <label htmlFor="loginEmail">Email</label>
              <input type="email" id="loginEmail" defaultValue= {newUserEmail} ref={loginEmailRef}/>
            </div>
            <div className="form-control">
              <label htmlFor="loginPassword">Password</label>
              <input type="password" id="loginPassword" ref={loginPasswordRef}/>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="form-container">
          <h1>Create Account</h1>
          <form onSubmit={(e) => registerHandler(e)}>
            <div className="form-control">
              <label htmlFor="firstName">First Name </label>
              <input type="text" id="firstName" ref={firstNameRef}/>
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" ref={lastNameRef}/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={emailRef}/>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordRef}/>
            </div>
            <div className="form-control">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input type="password" id="passwordConfirm" ref={passwordConfirmRef}/>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>



        <style jsx>{`

        #auth {
          display: flex;
          justify-content: space-around;
        }

        h1 {
          font-size: 2rem;
        }
      
        .form-control {
          margin: 1.5rem 0;
        }

        input {
          padding: 0.2rem;
        }

        label {
          display: block;
          font-size: 1.2rem;
        }

        button {
          color: white;
          padding: 0.5rem 1rem ;
          border-radius: 5px;
          font-size: 1rem;
          background-color: #3cbc3e;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #42af44;
        }
        

      `}</style>
      
      </section>
  )
};

export default Auth;