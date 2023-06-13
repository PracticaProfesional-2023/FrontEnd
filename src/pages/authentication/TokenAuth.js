import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button, Typography } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import { Link } from 'react-router-dom';

const Token = ({setter, otplink}) => {
    const handleClick=()=>{
        setter(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                sx={{mt:4}}
                >
                <Card
                    backgroundcolor="secondary"
                    
                    sx={{ 
                        width: '50%', 
                        boxShadow: 'none'
                        }}
                    style={{background: "#e0e0e0"}}
                    >
                    <Box 
                        display= 'flex'
                        flexDirection= 'column'
                        justifyContent= 'space-around'
                        alignItems= 'center'
                        sx={{my:5}}
                        >
                        <img src = {Logo} alt='logo' width="25%"/>
                        <Box display="flex"
                            justifyContent="space-between"
                            width= "90%"
                            sx={{my:1}}>
                            <Typography variant="h6" gutterBottom>
                                Continue with email
                            </Typography>
                            <Link to="/hirejobs/login">
                                <Typography variant="h7" gutterBottom>
                                    Edit email
                            </Typography></Link>
                        </Box>
                        <Box display="flex"
                            justifyContent="start"
                            width= "90%"
                            sx={{my:2}}>
                            <TextField id="tokenchar1" label="#" variant="outlined" 
                                inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "8vh", height: "25%", mx:0.5}} />
                            <TextField id="tokenchar2" label="#" variant="outlined" 
                                inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "8vh", height: "25%", mx:0.5}} />
                            <TextField id="tokenchar3" label="#" variant="outlined" 
                                inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "8vh", height: "25%", mx:0.5}} />
                            <TextField id="tokenchar4" label="#" variant="outlined" 
                                inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "8vh", height: "25%", mx:0.5}} />
                            <TextField id="tokenchar5" label="#" variant="outlined" 
                                inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "8vh", height: "25%", mx:0.5}} />
                            <TextField id="tokenchar6" label="#" variant="outlined" 
                                inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "8vh", height: "25%", mx:0.5}} />
                        </Box>
                        <Box display="flex"
                            justifyContent="space-between"
                            flexDirection= 'column'
                            width= "90%"
                            >
                            <Link to={otplink} target='_blank'>
                                <Typography variant="h7" gutterBottom >
                                    Link to code
                                </Typography>
                            </Link>
                            <Typography variant="h7" gutterBottom sx={{ my: 0.5}} width="50%">
                                <p>By continuing, you agree that we create an acount for you {'('}Unless already created{')'}, 
                                and accept our Terms and Conditions and Privacy Policy</p>
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary" onClick={handleClick}>Continue</Button>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

/*    
export default function Child ({setter}) {
    setter('Data from Child');
    return (<></>)
} */

export default Token



