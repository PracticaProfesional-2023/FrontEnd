import * as React from 'react';
import Navbar from '../components/Navbar';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

function LandingPage() {
  
  return (
    <Router>
      <div>
        <Navbar flag={false}/>
        <Routes>
          <Route exact path="/hirejobs" element={<p>LandingPage</p>} />
          <Route exact path="/hirejobs/login" element={<p>login</p>} />
          <Route exact path="/hirejobs/register" element={<p>register</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default LandingPage;
