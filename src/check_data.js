const checkExistedId = (data, id) => data.findIndex(item => item.id == id);

function checkEmptyData() {
    for (let i in arguments) {
        if (arguments[i] === '') return false;
    }
    return true;
}

module.exports = {checkExistedId, checkEmptyData};