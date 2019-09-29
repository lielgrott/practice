const express = require('express')
const app = express()
const port = parseInt(process.env.PORT || 3000, 10);

const userRouter = require('./users/users.router');

app.use('/users', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))