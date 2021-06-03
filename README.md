# Web Components CRUD App

See:
https://github.com/dieterjava/web-components-crud
forked from https://github.com/userhooke/web-components-crud

Simple demo app with CRUD operations with web components.<br>
This is to explore the framework-free UI development based on Web Components and custom events.<br>

Run in terminal: http-server<br>
Go to http://127.0.0.1:8080/src/<br>

Done:<br>
0. Add data/users.json file<br>
1. Add json-server with users.json<br>
npm install -g json-server<br>
https://github.com/typicode/json-server<br>
cd src\data <br>
json-server --watch db.json<br>
http://localhost:3000/users<br>
<br>
To Dos:<br>
<br>
See fetch+GET and <br>
add fetch+POST, fetch+PUT, fetch+DELETE<br>
<br>
Good example!!!!<br><br><br>
But there are even some better ones using lit-html templates.
<br><br>
Not so good here: <br>
Adding a new field needs changes in 17 places in the code.<br>
Therefore this example is quite complicate for usage in generating web apps from database schema.<br>

See the following URLs for better examples<br>

https://github.com/AdamBien/bce.design <br>
https://github.com/AdamBien/webcomponents-with-redux.training<br>
