import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';

const Login = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="90vh"
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
                    <Button variant="contained" color="primary">Login</Button>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Login

