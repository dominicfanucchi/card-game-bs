// console.log('Hello, welcome to Bullshit');
// console.log('Goodbye');
// print -> dart

// importing modules
const express = require('express');
const http = require('http');
const firebase = require('firebase');

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL2lJQ88kZgDNx8wGJkFEUmlSsTqeIjJ0",
    authDomain: "calhacks-2022-e619e.firebaseapp.com",
    projectId: "calhacks-2022-e619e",
    storageBucket: "calhacks-2022-e619e.appspot.com",
    messagingSenderId: "704984036602",
    appId: "1:704984036602:web:2ed97641e4501dba438543"
};
var io = require('socket.io')(server);

// client -> middleware -> server
// middleware
app.use(express.json());

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.connect()


server.listen(port, '0.0.0.0', () => {
    console.log(`Server started and running on ${port}`);
});


