const fs = require('fs');

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
            const taskIndex = data.findIndex(item => item.id == `${req.query.id}`);
            if (taskIndex === -1) {
                res.send({message: 'task is not exist'});
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