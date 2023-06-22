import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image_Placeholder from '../assets/Image_Placeholder.png'
import {ThemeProvider} from '@mui/material';
import { theme } from '../Style/Theming';


function JobCards({jobTittle, descripcion }) {
    return (
        <ThemeProvider theme={theme}>
        <Card 
            sx={{ minWidth: 275 }}
        >
            <Box 
                display='flex'
                flexDirection="row"
                justifyContent="center"
                alignItems="left"
                sx={{ my: 2}}
            >
                <img src = {Image_Placeholder} alt='logo' width="20%"/>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {jobTittle}
                    </Typography>
                    <Typography variant="body2" sx={{mt: 1}}>
                        {descripcion}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" size="small">Apply</Button>
                </CardActions>
            </Box>
        </Card>
        </ThemeProvider>
    );
}

export default JobCards;
