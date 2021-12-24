'use strict'

// Doc for PUT and PATCH method
const showEditContent = () => `
    <div>
        <h2>Edit a task</h2>
        <i class="task-desc">Allows to edit all values of the task</i>
        <div class="method"><span class="method-put">PUT</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/php_scripts/edit_task.php</i>
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
    "id": 2,
    "task":"Play computer games",
    "comment":"Play them all day long",
    "status": "incomplete"
}</code>
            <i class="body-comment"><span>*</span> status must be complete or incomplete</i>
        </div>
        <div class="desc-block response-block">
            <h3>Response:</h3>
            <b>1. All data is added correctly</b> 
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>
            <h4>Result:</h4>   
<code>{
    "message": "task was edited"
}</code>
            <b>2. id does not exist</b>
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i> 
            <h4>Result:</h4>  
<code>{
    "message": "task does not exist"
}</code>
            <b>3. Some data is missed</b>
            <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
            <h4>Result:</h4>                
<code>{
    "code": 400,
    "message": "some data is missed"
}</code> 
            <b>4. Incorrect value of status</b>
            <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
            <h4>Result:</h4>                
<code>{
    "code": 400,
    "message": "value of status is incorrect"
}</code>
        </div>
    </div>
    <div class="topic-section-last">
        <h2>Edit a status of task</h2>
        <i class="task-desc">Allows to change a status of the task</i>
        <div class="method"><span class="method-patch">PATCH</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/php_scripts/edit_status.php</i>
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
    "id": 2,
    "status": "complete"
}</code>
            <i class="body-comment"><span>*</span> status must be complete or incomplete</i>
        </div>
        <div class="desc-block response-block">
            <h3>Response:</h3>
            <b>1. All data is added correctly</b> 
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>
            <h4>Result:</h4>   
<code>{
    "message": "status was changed"
}</code>
            <b>2. id does not exist</b>
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i> 
            <h4>Result:</h4>  
<code>{
    "message": "task does not exist"
}</code>
            <b>3. Some data is missed</b>
            <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
            <h4>Result:</h4>                
<code>{
    "code": 400,
    "message": "some data is missed"
}</code>
            <b>4. Incorrect value of status</b>
            <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
            <h4>Result:</h4>                
<code>{
    "code": 400,
    "message": "value of status is incorrect"
}</code>
        </div>
    </div>`;

export {showEditContent};