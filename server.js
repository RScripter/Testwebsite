const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let scripts = [];

app.get('/scripts', (req, res) => {
    res.json(scripts);
});

app.post('/scripts', (req, res) => {
    const { title, owner, type, gameName, script } = req.body;
    if (title && owner && script) {
        scripts.push({ title, owner, type, gameName, script });
        res.status(201).send('Script added');
    } else {
        res.status(400).send('Invalid data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
