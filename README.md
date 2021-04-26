# Web Components CRUD App

Simple demo app with CRUD operations with web components.
This is to explore the framework-free UI development based on Web Components and custom events.

Run in terminal: http-server
Go to http://127.0.0.1:8080/src/

Done:
0. Add data/users.json file
1. Add json-server with users.json
npm install -g json-server
https://github.com/typicode/json-server
cd data 
json-server --watch users.json
http://localhost:3000/users

To Dos:

See fetch+GET and 
add fetch+POST, fetch+PUT, fetch+DELETE

Good example!!!!
But there are even some better ones using lit-html templates.

Not so good here: Adding a new field needs changes in 17 places in the code.
Therefore this example is quite complicate for usage in generating web apps from database schema.

See the following URLs for better examples

https://github.com/AdamBien/bce.design
https://github.com/AdamBien/webcomponents-with-redux.training
