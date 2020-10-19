const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');

const dbConnect = require('./db');

const companyRoutes = require('./routes/company');

const app = express();


app.use(cors())
app.use(bodyparser.json())


app.use(dbConnect)
app.use(companyRoutes)

app.use(errors());


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})