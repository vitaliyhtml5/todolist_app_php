'use strict'

import {showGetContent} from './content/get.js';
import {showAddContent} from './content/add.js';
import {showEditContent} from './content/edit.js';
import {showDeleteContent} from './content/delete.js';

const sidebarItem = document.querySelectorAll('.sidebar-list li');
const content = document.querySelector('#content');

class Menu {
    constructor(item, content) {
        this.item = item;
        this.content = content;
    }

    changeMenu() {
        this.item.forEach( (el, index) => {
            el.onclick = () => {
                this.item.forEach(element => element.classList.remove('sidebar-active'));
                el.classList.add('sidebar-active');

                this.changeContent(index);
            }
        });
    }
    
    changeContent(index) {
        this.content.scrollTo(0,0);
        const contentData = [showGetContent(), showAddContent(), showEditContent(), showDeleteContent()];
        this.content.innerHTML = contentData[index];
    }
}

const menu = new Menu(sidebarItem, content);
menu.changeMenu();
menu.changeContent(0);