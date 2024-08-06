const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const key = `content`;
app.get('/', (req, res) => {
    res.send(`This app will run on Postman/Thunderclient <br>
     create post requst on <a href="http://localhost:${port}/login">http://localhost:${port}/login</a> <br>
      and use generated token on <a href="http://localhost:${port}/profile">http://localhost:${port}/profile</a> `)
})

app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
})