const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('./db/mongoConnect');
require('./models/Contact');

const PORT = process.env.PORT || 3000;

const Contact = mongoose.model("Contact");

const app = express();
app.use(express.static('public'))
    .use(morgan())
    .use(bodyParser.urlencoded({ extended: true }));

app.use('/contact', async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.send({
            results: contacts,
            status: 'success'
        })
    }catch{
        res.send({
            problem: 'Problem in getting data',
            status: 'failed'
        })
    }
});

app.post('/', async (req, res) => {
    try {
        const contactMake = new Contact();
        contactMake.name = req.body.name;
        contactMake.email = req.body.email;
        contactMake.phone = req.body.phone;
        contactMake.msg = req.body.msg;
        contactMake.save();
        await res.send({
            data: contactMake,
            status: "success"
        });
    } catch{
        res.send({
            status: "failed"
        })
    }
});

app.listen(PORT, (req, res) => {
    console.log('I am running at ' + PORT);
})