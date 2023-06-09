import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { theme } from '../Style/Theming';
import { Link } from 'react-router-dom';


const Navbar = ({flag}) => {
    var link
    if(!flag)
        link = "/hirejobs"
    else
        link = ""

    return (
        <ThemeProvider theme={theme}>
            <Box height="10%" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            <Link to={link} style={{ color: '#FFFFFF',textDecoration: 'none' }}>HireJobs</Link>
                        </Typography>
                        { !flag ?
                            (<Box sx={{ flexGrow: 0.05 }} display="flex" justifyContent="space-between">
                                <Link to="/hirejobs/login" style={{ color: '#FFFFFF' }} >
                                    <Button variant="outlined" color="inherit">Login</Button>
                                </Link>
                                <Link to="/hirejobs/register" style={{ color: '#FFFFFF' }} >
                                    <Button variant="outlined" color="inherit">Register</Button>
                                </Link>
                            </Box>) : 
                            (<Button variant="outlined" color="inherit" >Logout</Button>)                                
                        }   
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default Navbar