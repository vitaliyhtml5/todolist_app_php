const fs = require('fs');
const getData = require('./get_data.js');

const addTask = (req, res) => {
    try {
        getData.readData(res, './fs/tasks.json', (data) => {
            writeFile(data);
        })
    } catch (e) {
        res.status(500).send('something went wrong');
    }

    const writeFile = data => {
        const setDate = (item) => {
            if (String(item).length === 1) return `0${item}`;
            else return item;
        }
        const date = new Date();
        const created = `${setDate(date.getDate())}.${setDate(date.getMonth()+1)}.${date.getFullYear()} ${setDate(date.getHours())}:${setDate(date.getMinutes())}`;

        let newId;
        data.length === 0 ? newId = 1 : newId = data[data.length - 1].id + 1;

        const newTask = {
            id: newId,
            task: req.body.task,
            comment: req.body.comment,
            created: created,
            status: 'Incomplete'
        }

        data.push(newTask);

        fs.writeFile('./fs/tasks.json', JSON.stringify(data), (err) => {
            if (err) {
                return res.send(err);
            } else {
                res.status(201).send('task was created');
            }
        })
    }
}

module.exports = addTask;