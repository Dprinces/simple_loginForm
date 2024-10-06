import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container } from '@mui/material';
import useLogin from '../hooks/useLogin';

const LoginForm = ({ darkMode }) => {
  const { login } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    }),
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <span>Enter your email below to login to your account</span>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
          InputProps={{
            style: { color: darkMode ? '#fff' : '#000' },
          }}
          InputLabelProps={{
            style: { color: darkMode ? '#fff' : '#000' },
          }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
          InputProps={{
            style: { color: darkMode ? '#fff' : '#000' },
          }}
          InputLabelProps={{
            style: { color: darkMode ? '#fff' : '#000' },
          }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign in
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
