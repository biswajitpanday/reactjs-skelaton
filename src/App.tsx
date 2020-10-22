import React from 'react';
import './App.css';
import Login from './features/login/login';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <Login/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
