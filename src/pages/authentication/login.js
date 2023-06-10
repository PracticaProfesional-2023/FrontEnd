import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                >
                <Card
                    backgroundcolor="secondary"
                    sx={{ 
                        minHeight: '70vh', 
                        minWidth: '90vh', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        boxShadow: 'none'
                        }}
                    style={{background: "#e0e0e0"}}
                    >
                    <img src = {Logo} alt='logo' width="30%"/>
                    <TextField id="Email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} />
                    <Link to="/hirejobs/login/confirmation_code" style={{ color: '#FFFFFF' }} >
                        <Button variant="contained" color="primary">Login</Button>
                    </Link>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Login

