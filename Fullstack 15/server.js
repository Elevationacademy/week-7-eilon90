const express = require('express');
const path = require('path');
const app = express();
const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost/DB_NAME", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const Schema = mongoose.Schema

const dataschema = new Schema({
    data: String
})

const Data = mongoose.model('Data', dataschema);

app.post('/data', async function(req, res) {
    const d1 = await new Data({...req.body});
    await d1.save();
    res.end();
})

app.get('/data', async function(req, res) {
    const data = await Data.find({});
    res.send(data);
})

const port = 3000;
app.listen(port, function() {
    console.log('Running');
})