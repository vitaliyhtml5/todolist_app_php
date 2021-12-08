'use strict'

// Doc for GET method
const showGetContent = () => `
    <div>
        <h2>Get all tasks</h2>
        <i class="task-desc">Returns all fields of the task</i>
        <div class="method"><span class="method-get">GET</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/get-all-tasks</i>
        </div>
        <div class="desc-block">
            <h3>Parameters:</h3>
        </div>
        <div class="desc-block">
            <h3>Headers:</h3>
        </div>
        <div class="desc-block">
            <h3>Body:</h3>
        </div>
        <div class="desc-block response-block">
            <h3>Response:</h3>
            <b>1. At least one task exists</b> 
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i>
            <h4>Result:</h4>   
<code>[
    {
        "id": 1,
        "task": "Make breakfast",
        "comment": "Cook sandwich",
        "created": "05.02.2021 18:02",
        "status": "complete"
    },
    {
        "id": 2,
        "task": "Watch TV",
        "comment": "Watch a comedy film",
        "created": "05.12.2021 20:59",
        "status": "incomplete"
    }
]</code>
            <b>2. Tasks haven\'t been created</b>
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i> 
            <h4>Result:</h4>                
<code>{
    "message": "no tasks yet"
}</code>  
        </div>
    </div>
    <div class="topic-section topic-section-last">
        <h2>Get task by id</h2>
        <i class="task-desc">Returns a task according to the particular id</i>
        <div class="method"><span class="method-get">GET</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/get-task</i>
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
            <b>1. id exists</b>
            <h4 class="status-header">Status:</h4><i class="status status-success">200 OK</i> 
            <h4>Result:</h4>           
<code>[
    {
        "id": 1,
        "task": "Make breakfast",
        "comment": "Cook sandwich",
        "created": "05.02.2021 18:02",
        "status": "complete"
    }
]</code>
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

export {showGetContent};