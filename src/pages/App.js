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
  const [flag, setFlag] = React.useState(false);
  const [otp, setOtp] = React.useState('');

  return (
    <Router>
      <div>
        <Navbar flag={flag}/>
        <Routes>
          <Route exact path="/hirejobs" element={< LandingPage />} />
          <Route exact path="/hirejobs/login" element={< Login setter={setOtp} />} />
          <Route exact path="/hirejobs/register" element={< Register />} />          
          <Route exact path="/hirejobs/login/confirmation_code" element={< Token  setter={setFlag} otplink={otp}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
