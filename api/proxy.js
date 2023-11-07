const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.post('/batch', async (req, res) => {
    try {
        const response = await axios.post('https://ip-api.com/batch', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});