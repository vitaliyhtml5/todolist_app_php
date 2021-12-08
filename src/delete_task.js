const fs = require('fs');
const getData = require('./get_data.js');
const checkData = require('./check_data.js');

//delete-task?id=6
const deleteTask = (req, res) => {
    try {
        getData.readData(res, './fs/tasks.json', (data) => {
            const taskIndex = checkData.checkExistedId(data, req.query.id);
            if (req.query.id === undefined || !checkData.checkEmptyData(req.query.id)) {
                res.status(400).send({code: 400, message: 'id is required'});
            } else if (taskIndex === -1) {
                res.send({message: 'task does not exist'});
            } else {
                rewriteFile(data);
            }
        });
    } catch (e) {
        res.status(500).send('something went wrong');
    }

    const rewriteFile = data => {
        data.splice(req.query.id - 1, 1);
        
        fs.writeFile('./fs/tasks.json', JSON.stringify(data), (err) => {
            if (err) {
                return res.send(err);
            } else {
                res.send({message: 'task was removed'});
            }
        });
    }
}

module.exports = deleteTask;