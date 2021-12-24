'use strict'

// Doc for GET method
const showGetContent = () => `
    <div>
        <h2>Get all tasks</h2>
        <i class="task-desc">Returns all fields of the task</i>
        <div class="method"><span class="method-get">GET</span> method</div>
        <div class="desc-block-url">
            <h3>URL:</h3>
            <i>/php_scripts/get_all_tasks.php</i>
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
        "comment": "Watch a comedy",
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
    </div>`;

export {showGetContent};