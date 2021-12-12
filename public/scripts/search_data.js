'use strict'

import {showTable} from './show_table.js';
import {showEmptyResults,removeEmptyResults} from './empty_state.js';

const searchData = data => {
    const input = document.querySelector('#search-field');
    const clearBtn = document.querySelector('.search-wrap button');
    const dataAll = data;

    document.querySelector('.search-wrap').addEventListener('input', e => {
        e.preventDefault();
        let dataSearch = [];

        input.value.length > 0 ? clearBtn.style.display = 'block' : clearBtn.style.display = 'none';

        for (let i in data) {
            if (data[i].task.toLowerCase().includes(input.value.toLowerCase()) || data[i].comment.toLowerCase().includes(input.value.toLowerCase())) {
                dataSearch.push(data[i]);
            }
        }

        if (dataSearch.length > 0) {
            removeEmptyResults();
            document.querySelector('.paging-wrap').style.display = 'flex';
            showTable(dataSearch);
        } else {
            showEmptyResults();
            document.querySelector('.paging-wrap').style.display = 'none';
            return;
        }     
    });

    clearBtn.onclick = () => {
        removeEmptyResults();
        document.querySelector('.paging-wrap').style.display = 'flex';
        input.value = '';
        clearBtn.style.display = 'none';
        showTable(dataAll);
    }  
}

export {searchData};