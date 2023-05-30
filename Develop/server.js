const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const fs = require("fs");
const app = express();
const PORT = 3001;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post

// Bonus
app.delete

app. get