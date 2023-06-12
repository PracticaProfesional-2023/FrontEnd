import * as React from 'react';
import Navbar from '../components/Navbar';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Login from './authentication/login';
import LandingPage from './landingPage/landingPage';
import Register from './authentication/register';
import Token from './authentication/TokenAuth';

function App() {
  
  return (
    <Router>
      <div>
        <Navbar flag={false}/>
        <Routes>
          <Route exact path="/hirejobs" element={< LandingPage />} />
          <Route exact path="/hirejobs/login" element={< Login />} />
          <Route exact path="/hirejobs/register" element={< Register />} />          
          <Route exact path="/hirejobs/login/confirmation_code" element={< Token />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
