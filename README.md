# CRUD_app-
A simple CRUD app built using Express.js for the backend. It performs basic Create, Read, Update, and Delete operations.

How you create this 
we have to work this at express js first you need to install it 

first initialize the project 

cd my-crud-app
npm init -y

next Install the necessary packages:

npm install express mongoose body-parser cors dotenv
npm install --save-dev nodemon

Set up your package.json scripts to use Nodemon:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

Create a .env file for environment variables (like your database URI):
PORT=3000
DB_URI=mongodb://localhost:27017/mycrudapp

Create a basic file structure:

my-crud-app/
├── .env
├── package.json
├── app.js
├── Controller/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js



