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
import Jobs from './Home/Jobs';
import NotFound from './NotFound'
import { QueryClient, QueryClientProvider } from 'react-query';

axios.defaults.baseURL = 'https://helpful-woolens-elk.cyclic.app';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="*" element={<NotFound />}/>
            <Route exact path="/hirejobs" element={< LandingPage />} />
            <Route exact path="/hirejobs/login" element={< Login />} />
            <Route exact path="/hirejobs/register" element={< Register />} />
            <Route exact path="/hirejobs/login/confirmation_code" element={< Token />} />
            <Route exact path="/hirejobs/jobs" element={<Jobs/>}/>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
