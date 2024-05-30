const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    fs.appendFileSync('data.txt', `Username: ${username}, Password: ${password}\n`);
    res.json({ message: 'Data saved successfully!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
