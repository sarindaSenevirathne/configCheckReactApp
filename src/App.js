import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Configuration Values</h1>
        <p><strong>API URL:</strong> {window.config.apiUrl}</p>
        <p><strong>API Key:</strong> {window.config.apiKey}</p>
        <p><strong>Feature Toggle:</strong> {window.config.featureToggle ? 'Enabled' : 'Disabled'}</p>
      </header>
    </div>
  );
}

export default App;
