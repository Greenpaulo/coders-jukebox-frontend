import ContextProvider from '../context/ContextProvider';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Router from 'next/router';


const App = ({ Component, pageProps }) => {

  let token = null;

  useEffect(() => {
    // Check for token in local storage once the component mounts - i.e. code is now run in the browser (instead of on the server)
    token = localStorage.getItem('token');
    if (token) {
      setAuthState({...authState, authenticated: true, token: token});
    }
  }, [])

  // State
  const [authState, setAuthState] = useState({
    authenticated: false,
    userId: null,
    token: null,
    tokenExpiration: null
  });

  const [userState, setUserState] = useState({
    user: null
  });

  const [videoState, setVideoState] = useState({
    video: null
  });

  const [commentState, setCommentState] = useState({
    comment: null
  });



  // Auth actions

  // Login a user
  const login = async (email, password) => {

    // Make a API query to get a token
    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId,
            token
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(res.status !== 200 && res.status !== 201) {
        throw new Error('Login failed!');
      } 

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors){
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Set state with returned auth data
      const { userId, token} = data.data.login;

      setAuthState({...authState, authenticated: true, userId, token});

      // Save token to local storage
      localStorage.setItem('token', token)

      // Redirect to home page
      Router.push('/');
      
    } catch (err) {
      console.log(err);
    }
  }

  
  // Register a user
  const register = async(firstName, lastName, email, password) => {
    console.log('register action called in _app.js')

    // Make a API query to get a token
    const requestBody = {
      query: `
      mutation {
        createUser(firstName: "${firstName}", lastName: "${lastName}", email: "${email}, password: "${password}") {
          userId,
          token
        }
      }
    `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(res.status);

      // if(res.status != 200 || res.status != 201) {
      //   throw new Error('Login failed!');
      // } 

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      const id = data.data.user;
      console.log(id);



    } catch (err) {
      console.log(err);
    }
    
  }

  // Logout a user
  const logout = () => {
    // Clear the authState
    setAuthState({
      authData: null
    })
    // Remove token from localStorage
    localStorage.removeItem('token');
  }

  
  
  
  
  return (
    <ContextProvider value={{
      authState,
      userState,
      videoState,
      commentState,
      login, 
      logout
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default App;