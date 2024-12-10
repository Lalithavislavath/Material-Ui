import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
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
        <TextField variant="outlined" required />

        <Typography variant="h6">Email:</Typography>
        <TextField variant="outlined" required />

        <Typography variant="h6">Password:</Typography>
        <TextField variant="outlined" required />

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
