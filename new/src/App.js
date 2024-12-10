import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const Form = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    const passwordPattern = /^[a-zA-Z0-9]{6,10}$/;
    if (!formData.password.trim()) {
      tempErrors.password = 'Password is required';
    } else if (!passwordPattern.test(formData.password)) {
      tempErrors.password = 'Password must be 6  characters and can include letters, numbers';
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          mx: 'auto',
          mt: 5,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h3" align="center">
          Form Application
        </Typography>

        <Typography variant="h6">Name:</Typography>
        <TextField
          variant="outlined"
          value={formData.name}
          onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors.name}
          required
        />

        <Typography variant="h6">Email:</Typography>
        <TextField
          variant="outlined"
          value={formData.email}
          onChange={handleChange('email')}
          error={!!errors.email}
          helperText={errors.email}
          required
        />

        <Typography variant="h6">Password:</Typography>
        <TextField
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          error={!!errors.password}
          helperText={errors.password}
          required
        />

        <Button type="submit" variant="contained" color="warning" fullWidth>
          Submit
        </Button>
      </Box>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Form Submitted Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
