'use strict'

// Doc for DELETE method
const showDeleteContent = () => `
    <div>
        <h2>Delete a task by id</h2>
        <i class="task-desc">Allows to remove a task by id</i>
        <div class="method"><span class="method-delete">DELETE</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/delete-task</i>
        </div>
        <div class="desc-block header-param">
            <h3>Parameters:</h3>
            <h4>id</h4><span>*</span><i>required</i>
        </div>
        <div class="desc-block">
            <h3>Headers:</h3>
        </div>
        <div class="desc-block">
            <h3>Body:</h3>
        </div>
        <div class="desc-block response-block">
            <h3>Response:</h3>
            <b>1. All data is added correctly</b> 
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>
            <h4>Result:</h4>   
<code>{
    "message": "task was removed"
}</code>
            <b>2. id does not exist</b>
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i> 
            <h4>Result:</h4>  
<code>{
    "message": "task does not exist"
}</code>
            <b>3. id is missed</b>
            <h4 class="status-header">Status:</h4><i class="status status-unsuccess">400 Bad Request</i> 
            <h4>Result:</h4>                
<code>{
    "code": 400,
    "message": "id is required"
}</code>  
        </div>
    </div>`;

export {showDeleteContent};