// src/App.js
import React from 'react';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Configuration Values</h1>
        <p><strong>API URL:</strong> {config.apiUrl}</p>
        <p><strong>API Key:</strong> {config.apiKey}</p>
        <p><strong>Feature Toggle:</strong> {config.featureToggle ? 'Enabled' : 'Disabled'}</p>
      </header>
    </div>
  );
}

export default App;
