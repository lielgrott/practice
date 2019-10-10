const express = require('express')
const app = express()
const port = parseInt(process.env.PORT || 3000, 10);

const userRouter = require('./users/users.router');
const postRouter = require('./posts/posts.router');

app.use(express.json());

app.use('/users', userRouter);
//app.use('/posts', postRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))