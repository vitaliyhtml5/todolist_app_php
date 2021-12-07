const fs = require('fs');
const getData = require('./get_data.js');
const checkData = require('./check_data.js');

const editTask = (req, res) => {
    try {
        getData.readData(res, './fs/tasks.json', (data) => {
            const taskIndex = checkData.checkExistedId(data, req.body.id);
             
            if (req.body.id === undefined || req.body.task === undefined || req.body.comment === undefined || req.body.created === undefined || req.body.status === undefined || !checkData.checkEmptyData(req.body.id, req.body.task, req.body.comment, req.body.created, req.body.status)) {
                res.status(400).send({code: 400, message: 'some data is missed'});
            } else if (taskIndex === -1) {
                res.send({message: 'task is not exist'});
            } else {
                rewriteFile(data);
            }
        });
    } catch (e) {
        res.status(500).send('something went wrong');
    }

    const rewriteFile = data => {
        const editedTask = {
            id: req.body.id,
            task: req.body.task,
            comment: req.body.comment,
            created: req.body.created,
            status: req.body.status
        }

        data.splice(req.body.id - 1, 1, editedTask);
        
        fs.writeFile('./fs/tasks.json', JSON.stringify(data), (err) => {
            if (err) {
                return res.send(err);
            } else {
                res.send({message: 'task was edited'});
            }
        });
    }
}

module.exports = editTask;