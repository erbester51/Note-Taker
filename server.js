const express = require('express');
const path = require('path');
const notesData = require('db');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));