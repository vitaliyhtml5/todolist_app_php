'use strict';

import {getDataAPI} from '../script.js';
import {setFilter,applyFilter} from './set_filter.js';
import {getEditModal} from './get_modal.js';
import {editStatus} from './edit_status.js';

const showTable = data => {
    const tbody = document.querySelector('#tbody-main');
    const paginationWrap = document.querySelector('.paging-wrap');
    const start = 0;
    const end = 10;
    const allTasks = data;
    let status;
    tbody.innerHTML = ``;
    paginationWrap.innerHTML = ``;

    createTable(start, end);
    makePagination();
    applyFilter(allTasks);

    function createTable(start, end) {
        data = setFilter(allTasks);
        if (data.length < 10)  end = data.length;

        for (let i = start; i < end; i++) {
            setStatus(data[i].status);
    
            tbody.innerHTML += 
            `<tr>
                <td class="id-task">${data[i].id}</td>
                <td>${status}${data[i].task}</td>
                <td>${data[i].comment}</td>
                <td>
                    <ul class="action-list">
                        <li class="action-info"><span class="material-icons-outlined">info</span>Info<i>Created at<br>${data[i].created}</i></li>
                        <li class="edit-task"><span class="material-icons-outlined">edit</span>Edit</li>
                        <li class="remove-task"><span class="material-icons-outlined">delete</span>Remove</li>
                    </ul>
                </td>
            </tr>`;
        }
        getEditModal(data);
        editStatus(data);

        function setStatus(statusValue) {
            if (statusValue === 'incomplete') {
                status = `<span class="task-status" title="Mark as complete"></span>`;
            } else {
                status = `<span class="task-status task-status_complete" title="Mark as incomplete"></span>`;
            }
        }
    }

    function changePage() {
        const btnPage = document.querySelectorAll('.paging-wrap button');
        
        btnPage.forEach((el, index) => {
            el.onclick = () => {
                tbody.innerHTML = ``;
                btnPage.forEach(el => el.classList.remove('paging-btn-active'));
                el.classList.add('paging-btn-active');
                let step = index * end;

                if (index === 0) {
                    createTable(start, end);
                } else {
                    if (data.length - (step + end) < 0) {
                        createTable(step, data.length);
                    } else {
                        createTable(step, step + end);
                    }
                }
            }
        });
    }

    function makePagination() {
        let pageCount = Math.ceil(data.length/end);

        if (pageCount === 1) {
            return;
        } else {
            for (let i = 0; i < pageCount; i++) {
                paginationWrap.innerHTML += `<button class="button-primary">${i+1}</button>`;
            }

            setDefaultPagination(document.querySelectorAll('.paging-wrap button'));
            changePage();
        }
    }
    
    function setDefaultPagination(btnPage) {
        btnPage[0].classList.add('paging-btn-active');
        if (btnPage.length > 5) {
            btnPage.forEach((el, index) => {
                if (index > 4) el.style.display = 'none';
            });
            paginationWrap.innerHTML += `<span class="material-icons-outlined extra-pagination-prev">navigate_before</span><span class="material-icons-outlined extra-pagination-next">navigate_next</span>`;
            paginationWrap.prepend(document.querySelector('.extra-pagination-prev'));
            
            changePagination();
        }
    }
    
    function changePagination() {
        const pagePrevBtn = document.querySelector('.extra-pagination-prev');
        const pageNextBtn = document.querySelector('.extra-pagination-next');
        const btnPage = document.querySelectorAll('.paging-wrap button');
        const showEl = el => el.style.display = 'block';
        const hideEl = el => el.style.display = 'none';
        let count = 0;

        hideEl(pagePrevBtn);

        pageNextBtn.onclick = () => {
            showEl(pagePrevBtn);
            count += 4;

            if (count + 5 >= btnPage.length) hideEl(pageNextBtn);

            btnPage.forEach((el, index) => {
                (index > count && index <= count + 4) ? showEl(el) : hideEl(el);
            });
        }
        pagePrevBtn.onclick = () => {
            showEl(pageNextBtn);
            count -= 4;

            btnPage.forEach((el, index) => {
                (index > count && index <= count + 4) ? showEl(el) : hideEl(el);
            });

            if (count === 0) {
                hideEl(pagePrevBtn);
                showEl(btnPage[0]);
            }
        } 
    }
}

const updateTable = () => {
    document.querySelector('#tbody-main').innerHTML = ``;
    document.querySelectorAll('.filter-wrap input').forEach(el => el.checked = false);
    document.querySelector('#search-field').value = '';
    document.querySelector('.search-wrap button').style.display = 'none';
    document.querySelector('.sort-wrap b').style.transform = 'rotate(0deg)';
    getDataAPI();
}

export {showTable,updateTable};