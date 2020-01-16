const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://EuricoDev:euricodev8143@cluster0-6wmj8.mongodb.net/test?retryWrites=true&w=majority',{
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,  
    

});

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(8080);