import { createContext, useReducer} from 'react';
import gql from 'graphql-tag';
import AppReducer from './AppReducer';
import { useQuery } from '@apollo/react-hooks';

// Inital State
const initialState = {
  authenticated: false,
  authData: null,
  user: null,
  video: null,
  comment: null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const login = (email, password) => {

    // Make a API query to get a token
    const LOGIN_QUERY = gql`
      query LoginQuery{
        login(email: ${email}, password: ${password}) {
          userId,
          token
        }
      }
    `;
    const { data } = useQuery(LOGIN_QUERY);

    dispatch({
      type: 'LOGIN',
      payload: {
        data
      }
    });
  }

  return (
    <GlobalContext.Provider value={{
      authenticated: state.authenticated,
      login: login
    }}>
      {children}
    </GlobalContext.Provider>
  )
}