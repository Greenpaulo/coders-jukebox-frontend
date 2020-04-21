import { GlobalContext, GlobalProvider } from '../context/GlobalState';
// import { login } from '../context/Actions';
import Layout from '../components/Layout';
import { useState } from 'react';

// import gql from 'graphql-tag';


const App = ({ Component, pageProps }) => {

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
  const login = async (email, password) => {
    console.log('login action called in _app.js')

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

      console.log(res.status);

      // if(res.status != 200 || res.status != 201) {
      //   throw new Error('Login failed!');
      // } 

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
      console.log(data.data.login);

      setAuthState({...authState, authenticated: true, userId, token});
      console.log(authState)
      
      
    } catch (err) {
      console.log(err);
    }


    


    // const LOGIN_QUERY = gql`
    //   query LoginQuery{
    //     login(email: ${email}, password: ${password}) {
    //       userId,
    //       token
    //     }
    //   }
    // `;
    // const { data } = useQuery(LOGIN_QUERY);

  }

  

  
  
  
  return (
    <GlobalContext.Provider value={{
      authState,
      userState,
      videoState,
      commentState,
      login
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

export default App;