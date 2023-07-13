import React, { forwardRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const FormInputOtpText = forwardRef(({ name, control, err }, ref) => {
  useEffect(() => {
    const inputElement = ref.current;
    

    const handleKeyPress = (event) => {
      if (event.target.value.length === 1) {
        inputElement.blur();
        const nextInput = inputElement.nextSibling;
        if (nextInput && nextInput.focus) {
          nextInput.focus();
        }
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Backspace' && event.target.value.length === 0) {
        const previousInput = inputElement.previousSibling;
        if (previousInput && previousInput.focus) {
          previousInput.focus();
        }
      }
    };

    inputElement.addEventListener('input', handleKeyPress);
    inputElement.addEventListener('keydown', handleKeyDown);

    return () => {
      inputElement.removeEventListener('input', handleKeyPress);
      inputElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }}) => (
        <TextField
          label="#"
          variant="outlined"
          value={value}
          onChange={onChange}
          error={err}
          autoComplete='off'
          inputProps={{ maxLength: 1, style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
          sx={{ width: "8vh", height: "25%", mx: 0.5 }}
          inputRef={ref}
        />
      )}
    />
  );
});

export default FormInputOtpText;
