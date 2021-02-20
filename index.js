const express = require('express');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send('First Route!')
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})