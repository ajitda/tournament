import React, { useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import { getToken, setIntendedUrl, setToken } from '../utils/auth';
import axios from 'axios';

const AuthContext = React.createContext();

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};

function AuthProvider ({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const authenticated = useMemo(() => !!currentUser, [currentUser]);

  const initAuth = () => {
    const access_token = getToken();
    return getToken()
      ? axios.get('/api/user', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      : Promise.resolve(null);
  };

  useEffect(() => {
    initAuth().then((res) => {
      if (res && res.data.success){

        setCurrentUser(res.data.data);
      }
      setInitializing(false);
    }).catch(error=>{ 
      setInitializing(false);
      setToken('');
      setIntendedUrl('/login');
     });
  }, []);

  return (
    <AuthContext.Provider value={{
      initializing,
      authenticated,
      currentUser,
      setToken,
      setCurrentUser }
    }> { children }
    </AuthContext.Provider>
  );
}

function useAuth () {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}

export { AuthProvider, useAuth };