const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public'), {
    extensions: ['html']
}));

// GET
const getData = require('./get_data.js');
app.get('/get-all-tasks', (req, res) => getData.getAllData(req, res));
app.get('/get-task', (req, res) => getData.getDataById(req, res));

// ADD
const addTask = require('./add_task.js');
app.post('/add-task', (req, res) => addTask(req, res));

app.get('*/*', (req, res) => res.status(404).send('Page not found'));

app.listen(3000, console.log('Server is running on 3000 port'));