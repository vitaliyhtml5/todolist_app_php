'use strict'

const overlay = document.querySelector('.overlay');
const getModal = data => {
    document.querySelector('.tools-add-btn').addEventListener('click', addTaskModal);
}

function addTaskModal() {
    createModal('add');
    const field = document.querySelectorAll('.modal textarea');
    const btnModal = document.querySelectorAll('.modal-btn-wrap button');
    field[0].focus();
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
    }
}

function showOverlay() {
    overlay.style.animation = 'openModal 1s forwards';
    document.addEventListener('keydown', e => {
        e.preventDefault();
        if (e.code === 'Escape') closeOverlay();
    });
}
function closeOverlay() {
    overlay.style.animation = 'closeModal 0.5s forwards';
    overlay.innerHTML = ``;
}

export {getModal};