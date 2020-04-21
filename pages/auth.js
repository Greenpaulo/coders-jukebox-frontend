import {useRef, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
// import withApollo from 'next-with-apollo';
// import withApollo from '../lib/withApollo';



const Auth = () => {

  // Connect to our global state
  // const { login } = useContext(GlobalContext);
  // console.log(context)
  
  // Create refs
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const submitHandler = (e, context) => {
    e.preventDefault();
    console.log('submit handler called')
    console.log(context)
    // console.log(context);
    
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;

    // if (email.trim().length === 0 || password.trim().length === 0){
    //   return;
    // }

    // Call action creator to fetch a token from the API and change the global state using a reducer
    context.login(email, password);

    // console.log(email, password);

  };
  
  return (
    <GlobalContext.Consumer>
      {context => (

      <section id="auth" className="container">
        <h1>Login</h1>
        <form onSubmit={(e) => submitHandler(e, context)}>
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
      )}

    </GlobalContext.Consumer>
  )
};

// export default withApollo(Auth);
export default Auth;