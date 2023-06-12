import * as React from 'react';
import { ThemeProvider, Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { theme } from '../../Style/Theming';
import Img from "../../assets/image.png";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo-bckBlue.png';


const LandingPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                height="70%"
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="left"
                    height="90vh"
                    width="40%"
                    >
                    <Typography variant="h3" gutterBottom>
                        ABOUT US
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{my:5}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        et dolore magna aliqua. Morbi tincidunt ornare massa 
                        eget egestas purus.Sagittis aliquam malesuada bibend
                        um arcu vitae ele Vulputate dignissim suspendisse in e
                        st ante in nibh. Eget lorem dolor sed viverra ipsum 
                    </Typography>
                    <Link to="/hirejobs/register" style={{ color: '#FFFFFF' }} >
                        <Button variant="contained" color="primary" sx={{ py:2, px:4}}>Register Now</Button>
                    </Link>
                </Box>
                <img src = {Img} alt='logo' width="30%"/>
            </Box>
            <Box  sx={{ flexGrow: 1 }}>
                <AppBar position="static">   
                    <Toolbar>
                        <Box display="flex" justifyContent="space-around" alignItems="center" width="100%">
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left" width="100%">
                                <Typography variant="overline" gutterBottom>
                                    Copyright © 2023 HireJob.
                                </Typography>
                                <Typography variant="overline" gutterBottom>
                                    All rights reserved
                                </Typography>
                            </Box>
                            <img src = {Logo} alt='logo' width="10%"/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default LandingPage

