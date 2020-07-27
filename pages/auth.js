import {useRef, useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Router from 'next/router';
import colors from '../css-variables/colors'
import FlashMessage from '../components/FlashMessage';

const Auth = () => {


  
  const [ newUserEmail, setNewUserEmail ] = useState('');

  const [loginError, setLoginError] = useState({
    status: false,
    message: ''
  });

  const [registerError, setRegisterError] = useState({
    status: false,
    message: ''
  });

  const [registerSuccess, setRegisterSuccess] = useState({
    status: false,
    message: ''
  });
  

  useEffect(() => {
    // const container = document.getElementById('container');
  }, [])


  const { login, register } = useContext(GlobalContext);

  // Create refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const loginPasswordRef = useRef();
  const loginEmailRef = useRef();
  
  // Handle login form submit
  const loginHandler = async (e) => {
    e.preventDefault();
    
    // Get credentials from refs
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    // Check if email or password is empty
    if (email.trim().length === 0 || password.trim().length === 0){
      setLoginError({
        status: true,
        message: 'Please fill in all fields'
      })
      setTimeout(() => {
        setLoginError({
          status: false,
          message: ''
        })
      }, 4000);
      return;
    }

    // Call login action to fetch token from API and change the global state
    const response = await login(email, password);

    console.log(response);
    
    // Check for errors
    if (response.error) {
      setLoginError({
        status: true,
        message: response.error[0].message
      })
      setTimeout(() => {
        setLoginError({
          status: false,
          message: ''
        })
      }, 4000);
      document.getElementById('loginPassword').value = '';
      return;
    };
  }


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
      setRegisterError({
        status: true,
        message: 'Please fill in all fields'
      })
      setTimeout(() => {
        setRegisterError({
          status: false,
          message: ''
        })
      }, 4000);
      return;
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
      setRegisterError({
        status: true,
        message: 'Passwords do not match!'
      })
      setTimeout(() => {
        setRegisterError({
          status: false,
          message: ''
        })
      }, 4000);
      document.getElementById('password').value = '';
      document.getElementById('passwordConfirm').value = '';
      return;

    }

    // Call register action to send a post request to API and change the local and global state
    const response = await register(firstName, lastName, email, password);

    //Check for errors
    if (response.error.length > 0) {
      setRegisterError({
        status: true,
        message: response.error[0].message
      })
      setTimeout(() => {
        setRegisterError({
          status: false,
          message: ''
        })
      }, 4000);
      return;
    }

    // Prefill the sign up from with the newly registered email
    setNewUserEmail(response.newUserEmail);

    // Clear the register form
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passwordConfirm').value = '';

    // Switch the panels to sign-in form
    container.classList.remove("right-panel-active");

    // Show register success flash message
    setRegisterSuccess({
      status: true,
      message: 'Registration successful!'
    })
    setTimeout(() => {
      setRegisterSuccess({
        status: false,
        message: ''
      })
    }, 4000);
  };


  const signUpButtonHandler = () => {
    console.log('click')
    container.classList.add("right-panel-active");
  }

  const signInButtonHandler = () => {
    container.classList.remove("right-panel-active");
  }

  
  return (
    <section id="auth">
      <div className="container" id="container">
        <div id="form-parent">
          <div className="form-container sign-up-container">
              <form onSubmit={(e) => registerHandler(e)}>
                <h1>Create Account</h1>
                {registerError.status &&
                  <FlashMessage message={registerError.message} type="error"/>
                }
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
              {loginError.status &&
                <FlashMessage message={loginError.message} type="error" />
              }
              {registerSuccess.status &&
                <FlashMessage message={registerSuccess.message} type="success" />
              }
              <input type="email" id="loginEmail" defaultValue={newUserEmail} ref={loginEmailRef} placeholder="Email"/>
              <input type="password" id="loginPassword" ref={loginPasswordRef} placeholder="Password" />

              {/* <a href="#">Forgot your password?</a> */}
              <button type="submit">Sign In</button>
            </form>
          </div>
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
              <p>Enter your personal details and start your journey with us</p>
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
          /* Glow effect */
          text-shadow: 0px 0px 8px rgb(255, 255, 255);
          box-shadow: 0px 0px 8px rgb(255, 255, 255);
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


        /* Media queries */
        @media (max-width: 930px) {
          .container {
            max-width: 650px;
          }
        }

        @media (max-width: 740px) {
          #container {
            display: flex;
            flex-direction: column;
            min-height: 800px;
            max-width: 75vw;
          }

          .form-container {
            width: 100%;
            height: 50%;
          }

          .overlay-container {
            top: 50%;
            width: 100%;
            left: 0;
            height: 50%;
          }
          
          .container.right-panel-active .sign-in-container {
            transform: translateY(100%);
          }

          .container.right-panel-active .sign-up-container {
            transform: translateY(90%);
          }

          .container.right-panel-active .overlay-container{
            transform: translateY(-100%);
          }

          .overlay-panel {
            transform: translateY(0);
            position: static;
            width: 100%;
            min-height: 100%;
            /* top: 50%; */
          }

          .overlay {
            /* transform: translateY(20%); */
            width: 100%;
            left: 0%;
            display: flex;
            flex-direction: column;
          }

          .container.right-panel-active .overlay {
            transform: translateY(-20%);
          }

          .overlay-left {
            transform: translateY(-100%);
          }

          .container.right-panel-active .overlay-left {
            transform: translateY(10%);
          }

          .overlay-right {
            right: 0;
            transform: translateY(-100%);
          }

          .container.right-panel-active .overlay-right {
            transform: translateY(0%);
          }

          form {
            width: 75%;
            margin: auto;
          }

        }

        @media (max-width: 650px) {
          form {
            width: 80%;
            padding: 0;
          }
        }

        @media (max-width: 500px) {
          #container {
            max-width: 85vw;
          }
        }

        @media (max-width: 740px) and (max-height: 1040px) {
          #container {
            min-height: 75vh;
          }
        }

        @media (max-width: 740px) and (max-height: 950px) {
          #container {
            min-height: 80vh;
          }

          section#auth {
            margin-top: 3rem;
          }
        }

        @media (max-width: 740px) and (max-height: 900px) {
          .overlay-left p {
            display: none;
          }

          .overlay-left h1 {
            margin-bottom: 2rem;
          }
          

          section#auth {
            margin-top: 3rem;
          }

          .container.right-panel-active .sign-up-container{
            transform: translateY(84%);
          }

          .container.right-panel-active .overlay {
            transform: translateY(-32%);
          }

          .container.right-panel-active .overlay-right {
            opacity: 0;
          }

          .container.right-panel-active .overlay-left {
            transform: translateY(16%);
          }
        }

        @media (max-width: 740px) and (max-height: 820px) {
          .overlay-left h1 {
            margin-bottom: 1.5rem;
          }
          
          .container.right-panel-active .overlay {
            transform: translateY(-38%);
          }

          .container.right-panel-active .overlay-left {
            transform: translateY(18%);
          }
        }

        @media (max-width: 740px) and (max-height: 810px) {
          .overlay-left h1 {
            margin-bottom: 1.5rem;
          }
          
          .container.right-panel-active .overlay {
            transform: translateY(-45%);
          }

          .container.right-panel-active .overlay-left {
            transform: translateY(24%);
          }

          .container.right-panel-active .sign-up-container{
            transform: translateY(78%);
          }

          .container.right-panel-active .sign-in-container {
            opacity: 0;
          }
        }

        @media (max-width: 740px) and (max-height: 760px) {
          section#auth {
            margin-top: 2rem;
          }

          .overlay-left h1 {
            /* display: none; */
          }

          .container.right-panel-active .sign-in-container {
            opacity: 0;
          }
        }

        @media (max-width: 740px) and (max-height: 740px) {
          section#auth {
            margin-top: 2rem;
          }
        }

        @media (max-width: 740px) and (max-height: 710px) {
          .overlay-left h1 {
            display: none;
          }

          .container.right-panel-active .overlay {
            transform: translateY(-63%);
          }

          .container.right-panel-active .overlay-left {
            transform: translateY(32%);
          }

          .container.right-panel-active .sign-up-container{
            transform: translateY(69%);
          }
        }

        @media (max-width: 740px) and (max-height: 660px) {

          section#auth {
            margin-top: 1rem;
          }

          #container {
            min-height: 82vh;
          }
        }
        

      `}</style>
      
      </section>
  )
};

export default Auth;