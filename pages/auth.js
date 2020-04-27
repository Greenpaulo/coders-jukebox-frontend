import {useRef, useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Router from 'next/router';

const Auth = () => {

  const context = useContext(GlobalContext);

  // Create refs
  const emailRef = useRef();
  const passwordRef = useRef();
  
  // Handle login form submit
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit handler called')
    
    // Get credentials from refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Check if email or password is empty
    if (email.trim().length === 0 || password.trim().length === 0){
      return;
    }

    // Call login action to fetch token from API and change the global state
    context.login(email, password);
  };
  
  return (
      <section id="auth" className="container">
        <h1>Login</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef}/>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef}/>
          </div>
          <button type="submit">Login</button>

        </form>


        <style jsx>{`

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