import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { theme } from '../Style/Theming';


const Navbar = (flag) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            HireJobs
                        </Typography>
                        { !flag ?
                            (<Box sx={{ flexGrow: 0.05 }} display="flex" justifyContent="space-between">
                                <Button variant="outlined" color="inherit">Login</Button>
                                <Button variant="outlined" color="inherit">Register</Button>
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