import { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Inital State
const initialState = {
  isLoggedIn: false,
  user: null,
  video: null,
  comment: null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider value={{
      isLoggedIn: state.isLoggedIn
    }}>
      {children}
    </GlobalContext.Provider>
  )
}