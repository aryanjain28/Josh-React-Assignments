import logo from './logo.svg';
import './App.css';
import LoginContainer from './containers/LoginContainer'

import { useState } from 'react';
import { AuthContext } from './context/Auth'


function App() {

  const [authTokens, setAuthTokens] =  useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data)
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }} >
        <LoginContainer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;