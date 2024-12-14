const express = require('express');
const authRouter = require('./routes/auth');

const app = express();

const axios = require('axios'); // Import axios using require

const token = localStorage.getItem('token'); // Supposons que le token est stocké dans le localStorage

axios.get('https://votre-api/protected-resource', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});

// ... other configurations

app.use('/api/auth', authRouter);