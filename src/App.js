import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Authenticator';
// import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
// import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <Auth />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;
