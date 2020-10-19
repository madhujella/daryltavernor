const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const winston = require('winston');
const expressWinston = require('express-winston');

const { dbConnect } = require('./db');

const companyRoutes = require('./routes/company');

const app = express();

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: true,
    expressFormat: true,
    colorize: true,
}));

app.use(cors())
app.use(bodyparser.json())


app.use(dbConnect)
app.use(companyRoutes)

app.use(errors());

app.use((req, res, next) => {
    res.json({ statusCode: 404, message: 'not found' })
    next()
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})