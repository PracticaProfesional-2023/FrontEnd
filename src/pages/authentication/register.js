import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button, Avatar } from '@mui/material';
import { theme } from '../../Style/Theming';


const Register = () => {
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
                        minHeight: '90vh', 
                        minWidth: '90vh', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        boxShadow: 'none'
                        }}
                    style={{background: "#e0e0e0"}}
                    >
                    <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: '15vh', height: '15vh' }}/>
                    <TextField id="Email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} />
                    <TextField id="Email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} />
                    <TextField id="Email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} />
                    <TextField id="Email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} />
                    <TextField id="Email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} />
                    <Button variant="contained" color="primary">Register</Button>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Register