import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button, Avatar, Select, MenuItem, OutlinedInput, InputLabel, FormControl } from '@mui/material';
import { theme } from '../../Style/Theming';
import { useForm, Controller } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/http/auth.service';
import { getDeparments } from '../../services/http/utils.service';
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate();
    const { data: departments, isLoading } = useQuery({
        queryKey: 'departments',
        queryFn: getDeparments,
    });
    const { mutate } = useMutation({
        mutationKey: 'registerUser',
        mutationFn: signUp,
        onSuccess: (data) => {
            toast.dismiss();
            toast.success(data.message, { position: toast.POSITION.BOTTOM_LEFT })
            navigate("/hirejobs/login", { replace: true });
        },
        onMutate: () => {
            toast.loading("Please wait...", { position: toast.POSITION.BOTTOM_LEFT })
        },
        onError: (error) => {
            toast.dismiss();
            toast.error(error.response.data.message, { position: toast.POSITION.BOTTOM_LEFT })
        }
    });
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            names: '',
            lastNames: '',
            document: '',
            municipality: 0
        }
    });

    const onSubmit = (data) => {
        mutate({
            ...data,
            municipality: parseInt(data.municipality),
            documentType: 'DUI'
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginTop: '8rem',
                }}
            >
                <Card
                    backgroundcolor="secondary"
                    sx={{
                        minWidth: '90vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        boxShadow: 'none',
                        paddingBlock: '6rem',
                        rowGap: '2rem'
                    }}
                    style={{ background: "#e0e0e0" }}
                >
                    <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: '15vh', height: '15vh' }} />
                    <h1>Register an account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' style={{
                            rowGap: '1rem'
                        }}>
                            <Controller
                                name="names"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error }, }) => (
                                    <TextField
                                        sx={{ width: '50vh' }}
                                        id="first-name"
                                        label="First Name"
                                        variant="outlined"
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        inputProps={{ style: { fontSize: 12 } }}
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        value={value}
                                        onChange={onChange} />
                                )}
                                rules={{
                                    required: 'First Name required',
                                }}
                            />
                            <Controller
                                name="lastNames"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error }, }) => (
                                    <TextField
                                        sx={{ width: '50vh' }}
                                        id="last-name"
                                        label="Last Name"
                                        variant="outlined"
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        inputProps={{ style: { fontSize: 12 } }}
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        value={value}
                                        onChange={onChange} />
                                )}
                                rules={{
                                    required: 'Last Name required',
                                }}
                            />
                            <Controller
                                name="document"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error }, }) => (
                                    <TextField
                                        sx={{ width: '50vh' }}
                                        id="dui"
                                        label="DUI"
                                        variant="outlined"
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        inputProps={{ style: { fontSize: 12 } }}
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        value={value}
                                        onChange={onChange} />
                                )}
                                rules={{
                                    required: 'DUI required',
                                    pattern: {
                                        value: /^\d{9}$/,
                                        message: 'Invalid DUI',
                                    }
                                }}
                            />
                            <Controller
                                name="municipality"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error }, }) => (
                                    <FormControl>
                                        <InputLabel id="municipality">Municipality</InputLabel>
                                        <Select
                                            sx={{ width: '50vh' }}
                                            displayEmpty
                                            id="municipality"
                                            error={!!error}
                                            input={<OutlinedInput label="Municipality" />}
                                            value={departments?.find((department) => department.value === value) ? value : ''}
                                            onChange={onChange} >
                                            {
                                                isLoading && <MenuItem value="" disabled>Loading...</MenuItem>
                                            }
                                            {
                                                departments && departments.map((department) => (
                                                    <MenuItem key={department.value} value={department.value}>{department.label}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                )}
                                rules={{
                                    required: 'Municipality required',
                                }}
                            />
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error }, }) => (
                                    <TextField
                                        sx={{ width: '50vh' }}
                                        label="Email"
                                        variant="outlined"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="email"

                                    />
                                )}
                                rules={{
                                    required: 'Email required',
                                    pattern: {
                                        value: /^[\w.-]+@[\w.-]+\.\w+$/,
                                        message: 'Invalid email address'
                                    }
                                }}
                            />
                            <Button type='submit' variant="contained" color="primary">Register</Button>
                        </Box>
                    </form>
                </Card>
            </Box >
        </ThemeProvider >
    );
}

export default Register