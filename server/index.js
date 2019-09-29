const express = require('express')
const app = express()
const port = parseInt(process.env.PORT || 3000, 10);

app.post('/', (req, res) => {
    let name = req.query.name || 'foo';
    res.send(`hello ${name}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))