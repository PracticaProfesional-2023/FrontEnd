import * as React from 'react';
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";


const FormInputOtpText = ({ name, control, label }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={""}
            render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} label={label} 
                    variant="outlined" autoComplete='off'
                    inputProps={{ maxLength: 1, style: {fontSize: 18} }} InputLabelProps={{style: {fontSize: 18}}} 
                    sx={{width: "8vh", height: "25%", mx:0.5}} />
                )} />
    )}

export default FormInputOtpText