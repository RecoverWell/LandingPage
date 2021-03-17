import React from 'react';
import logo from './full-logo.png';
import './App.css';
import { PageClipForm } from './PageClipForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{marginTop: '20px',
    fontStyle: 'italic'}}>
          Streamlining Access to Recovery
        </p>
      </header>
      <header className="App-header2">
        <p>
          <code>Sign up here for more information:</code>
        </p>
      </header>
      <PageClipForm />
    </div>
  );
}


export default App;
