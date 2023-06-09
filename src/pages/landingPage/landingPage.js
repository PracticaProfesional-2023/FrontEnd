import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../Style/Theming';


const LandingPage = () => {
    return (
        <ThemeProvider theme={theme}>
        
        </ThemeProvider>
    );
}

export default LandingPage