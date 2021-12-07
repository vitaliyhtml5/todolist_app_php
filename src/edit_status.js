const fs = require('fs');
const getData = require('./get_data.js');
const checkData = require('./check_data.js');

const editStatus = (req, res) => {
    try {
        getData.readData(res, './fs/tasks.json', (data) => {
            const taskIndex = checkData.checkExistedId(data, req.body.id);
            
            if (req.body.status === undefined || req.body.id === undefined || !checkData.checkEmptyData(req.body.status, req.body.id)) {
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
        const status = req.body.status;
        data[req.body.id-1].status = req.body.status;
        
        fs.writeFile('./fs/tasks.json', JSON.stringify(data), (err) => {
            if (err) {
                return res.send(err);
            } else {
                res.send({message: 'status was changed'});
            }
        });
    }
}

module.exports = editStatus;