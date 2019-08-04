import React from 'react';
import { App as Application } from 'framework7-react';
import logo from './logo.svg';
import './App.css';

export const params = {
  id: 'io.app.myapp',
  name: 'My App',
  // Automatic theme detection
  theme: 'auto'
};

function App() {
  return (
    <Application params={params}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Application>
  );
}

export default App;
