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
import axios from "axios";

axios.defaults.baseURL = 'https://helpful-woolens-elk.cyclic.app';

function App() {
  
  const [flag, setFlag] = React.useState(false);
  const [otp, setOtp] = React.useState('');
  const [token, setToken] = React.useState('');

  const LoginIn= (accesToken, flagValue)=>{
    setToken(accesToken);
    setFlag(flagValue)
    console.log(token)
  }

  return (
    <Router>
      <div>
        <Navbar flag={flag}/>
        <Routes>
          <Route exact path="/hirejobs" element={< LandingPage />} />
          <Route exact path="/hirejobs/login" element={< Login setter={setOtp} />} />
          <Route exact path="/hirejobs/register" element={< Register />} />          
          <Route exact path="/hirejobs/login/confirmation_code" element={< Token  setter={LoginIn} otplink={otp}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
