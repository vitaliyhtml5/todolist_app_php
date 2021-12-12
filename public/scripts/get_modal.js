'use strict'

import {addData} from './add_data.js';
import {editData} from './edit_data.js';
import {removeData} from './remove_data.js';
import {getTask} from './components.js'

const overlay = document.querySelector('.overlay');
const getModal = () => document.querySelector('.tools-add-btn').addEventListener('click', addTaskModal);

const getEditModal = data => {
    document.querySelectorAll('.edit-task').forEach((el, index) => {
        el.onclick = () => {
            const id = document.querySelectorAll('.id-task')[index].textContent;
            const task = getTask(data, id);
            editTaskModal(task);
        }
    });

    document.querySelectorAll('.remove-task').forEach((el, index) => {
        el.onclick = () => {
            const id = document.querySelectorAll('.id-task')[index].textContent;
            const task = getTask(data, id);
            removeTaskModal(task);
        }
    });
}

const closeOverlay = () => {
    overlay.style.animation = 'closeModal 0.5s forwards';
    overlay.innerHTML = ``;
}

function addTaskModal() {
    createModal('add');
    const btnModal = document.querySelectorAll('.modal-btn-wrap button');
    document.querySelectorAll('.modal textarea')[0].focus();
    
    btnModal[0].addEventListener('click', addData);
    btnModal[1].addEventListener('click', closeOverlay);
}

function editTaskModal(taskData) {
    createModal('edit');
    const btnModal = document.querySelectorAll('.modal-btn-wrap button');
    const field = document.querySelectorAll('.modal textarea');
    const radio = document.querySelectorAll('.edit-radio input');

    field[0].value = taskData.task;
    field[1].value = taskData.comment;
    taskData.status === 'incomplete' ? radio[0].checked = true : radio[1].checked = true; 

    btnModal[0].addEventListener('click', () => editData(taskData.id));
    btnModal[1].addEventListener('click', closeOverlay);
}

function removeTaskModal(taskData) {
    createModal('remove');
    const btnModal = document.querySelectorAll('.modal-remove-btn button');
    document.querySelector('.modal-remove-text>span').textContent = taskData.task;

    btnModal[0].addEventListener('click', () => removeData(taskData.id));
    btnModal[1].addEventListener('click', closeOverlay);
}

function createModal(type) {
    showOverlay();
    if (type === 'add') {
        overlay.innerHTML = `
        <div class="modal">
            <h3>Create task</h3>
            <label>Title:
                <textarea></textarea>
                <span class="error-message"></span>
            </label>
            <label>Comment:
                <textarea></textarea>
                <span class="error-message"></span>
            </label>
            <div class="modal-btn-wrap">
                <button class="button-primary">Add</button>
                <button class="button-primary">Cancel</button>
            </div>
        </div>`;
    } else  if (type === 'edit') {
        overlay.innerHTML = `
        <div class="modal">
            <h3>Edit task</h3>
            <label>Title:
                <textarea></textarea>
                <span class="error-message"></span>
            </label>
            <label>Comment:
                <textarea></textarea>
                <span class="error-message"></span>
            </label>
            <label class="edit-radio">
                <input type="radio" name="status">
                <span></span>
                Inomplete
            </label>
            <label class="edit-radio">
                <input type="radio" name="status">
                <span></span>
                Complete
            </label>
            <div class="modal-btn-wrap">
                <button class="button-primary">Edit</button>
                <button class="button-primary">Cancel</button>
            </div>
        </div>`;
    } else if (type === 'remove') {
        overlay.innerHTML = `
        <div class="modal modal-remove">
            <h3>Create task</h3>
            <p class="modal-remove-text">Do you really want to remove the task <span></span> ?</p>
            <div class="modal-btn-wrap modal-remove-btn">
                <button class="button-primary">Remove</button>
                <button class="button-secondary">Cancel</button>
            </div>
        </div>`;
    }
}

function showOverlay() {
    overlay.style.animation = 'openModal 1s forwards';
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') closeOverlay();
    });
}

export {getModal,getEditModal,closeOverlay};