const dotenv = require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const { errorHandler } = require('./Middleware/errorMiddleware')
const goals =  require('./Routes/goalsRoute');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));



app.use('/api/goals', goals)

app.use(errorHandler)

app.listen(port, () => { console.log(`Server started at port: ${port}`) });





