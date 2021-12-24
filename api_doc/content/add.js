'use strict'

// Doc for POST method
const showAddContent = () => `
    <div>
        <h2>Create a task</h2>
        <i class="task-desc">Allows to create a new task</i>
        <div class="method"><span class="method-post">POST</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/php_scripts/add_task.php</i>
        </div>
        <div class="desc-block">
            <h3>Parameters:</h3>
        </div>
        <div class="desc-block desc-block-header">
            <h3>Headers:</h3>
            <p>Content-Type: application/json</p>
        </div>
        <div class="desc-block">
            <h3>Body:</h3>
<code>{
    "task": "make dinner",
    "comment": "cook rice"
}</code>
        </div>
        <div class="desc-block response-block">
            <h3>Response:</h3>
            <b>1. All data is added correctly</b> 
            <h4 class="status-header">Status:</h4><i class="status status-success">201 Created</i>
            <h4>Result:</h4>   
<code>{
    "code": 201,
    "message": "task was created"
}</code>
            <b>2. Some data is missed</b>
            <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
            <h4>Result:</h4>                
<code>{
    "code": 400,
    "message": "some data is missed"
}</code>  
        </div>
    </div>`;

export {showAddContent};