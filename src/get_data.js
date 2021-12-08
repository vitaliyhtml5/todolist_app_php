const fs = require('fs');
const checkData = require('./check_data.js');

// Get All
const getAllData = (req, res) => {
    try {
        readData(res, './fs/tasks.json', (data) => {
            if (data.length === 0) {
                res.send({message: 'no tasks yet'});
            } else {
                res.send(data);
            }
        });
    } catch (e) {
        res.status(500).send('something went wrong');
    }
};

// Get by id  
//get-task?id=1
const getDataById = (req, res) => {
    try {
        readData(res, './fs/tasks.json', (data) => {
            const taskIndex = checkData.checkExistedId(data, req.query.id);

            if (req.query.id === undefined || !checkData.checkEmptyData(req.query.id)) {
                res.status(400).send({code: 400, message: 'id is required'});
            } else if (taskIndex === -1) {
                res.send({message: 'task does not exist'});
            } else {
                res.send(data[taskIndex]);
            }
        });
    } catch (e) {
        res.status(500).send('something went wrong');
    }
}

const readData = (res, filePath, callback) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            return callback(JSON.parse(data));
        }
    });
}

module.exports = {getAllData, getDataById, readData};