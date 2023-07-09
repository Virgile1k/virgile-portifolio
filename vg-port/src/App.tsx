 // App.tsx
// import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import Routes from '../src/routes/index';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  ); 
}

export default App;