const express =  require('express');
const cors = require('cors');
const path = require('path');
const { Router } = require('express');
const router = require('./src/routes');

const { json, urlencoded } = express;

const app = express();

const port = process.env.PORT || 7001;

app.use(json());
app.use(urlencoded({ extended: false}));
const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));

app.use(router);

app.use('/', (req, res) => {
    res.send('ola mundo')
})

app.listen(port, () =>{
    console.log('Server rodando na porta ' + port)
});