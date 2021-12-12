'use strict';

// Validation
const checkEmptyField = (field, message) => {
    let validation = false;
    if (field.value === '') {
        showErrorField(field, message, `Can't be blank`);
        field.addEventListener('input', () => hideErrorField(field, message));
    } else {
        validation = true;
        return validation;
    }
}

const checkLengthField = (field, message, length) => {
    let validation = false;
    if (field.value.length > length) {
        showErrorField(field, message, `Max length is ${length} chars`);
        field.addEventListener('input', () => hideErrorField(field, message));
    } else {
        validation = true;
        return validation;
    }
}

function showErrorField(field, message, text) {
    field.classList.add('field-error');
    message.style.display = 'block';
    message.textContent = text;
}

function hideErrorField(field, message) {
    field.classList.remove('field-error');
    message.style.display = 'none';
}

// Alerts
const showAlert = (text,result) => {
    const alert = document.querySelector('.alert');
    alert.innerHTML = `
    <span class="material-icons-outlined">lightbulb</span>
        <p>${text}</p>
    <button class="material-icons-outlined">close</button>`;
    
    result === 'success' ? alert.classList.remove('unsuccess') : alert.classList.add('unsuccess');

    alert.style.animation = 'showAlert 3s forwards';
    closeAlert(alert);
}

function closeAlert(alert) {
    setTimeout(() => alert.style.animation = 'none', 3000);
    document.querySelector('.alert button').onclick = () => alert.style.animation = 'none';
}

// Loader
const showLoaderMain = () => document.querySelector('.loader').style.display = 'block';
const closeLoaderMain = () => document.querySelector('.loader').style.display = 'none';

//Get id
const getTask = (data, id) => {
    const task = data.findIndex(item => item.id == id);
    return data[task];
}

export {checkEmptyField,checkLengthField,showAlert,showLoaderMain,closeLoaderMain,getTask};