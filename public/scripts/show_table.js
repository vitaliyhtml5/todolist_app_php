'use strict'

const showTable = data => {
    const tbody = document.querySelector('#tbody-main');
    const paginationWrap = document.querySelector('.paging-wrap');
    const start = 0;
    const end = 10;
    let status;

    createTable(start, end);
    makePagination();
    function createTable(start, end) {
        for (let i = start; i < end; i++) {
            if (data[i].status === 'incomplete') {
                status = `<span class="task-status" title="Mark as complete"></span>`;
            } else {
                status = `<span class="task-status task-status_complete" title="Mark as incomplete"></span>`;
            }
    
            tbody.innerHTML += 
            `<tr>
            <td>${status}${data[i].task}</td>
            <td>${data[i].comment}</td>
            <td>
                <ul class="action-list">
                    <li class="action-info"><span class="material-icons-outlined">info</span>Info<i>Created at<br>${data[i].created}</i></li>
                    <li><span class="material-icons-outlined">edit</span>Edit</li>
                    <li><span class="material-icons-outlined">delete</span>Remove</li>
                </ul>
            </td>
        </tr>`;
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

export {showTable};