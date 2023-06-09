
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#24406C',
        },
        secondary: {
            main: '#e0e0e0',
        },
        background: {
            main: '#ffffff',
        },
        secondary_background: {
            main: '#f4f4f4',
        },
        secondary_button: {
            main: '#a10e25',
        },
        notifications: {
            main: '#5cb85c',
        },
        alerts: {
            main: '#ff7700',
        },
    },
    typography: {
        button: {
        fontSize: 12,
        }
    },
});

export {theme};