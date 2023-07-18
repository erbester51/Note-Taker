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

// GET
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
  });
  
  app.get('/api/notes', (req, res) => res.json(notesData));
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });

app.post('/api/notes', req, res) => {
    const { title, text } = req.body;
    const id = uuidv4();

    const newData = {
        title,
        text, 
        id
    }
}

// Bonus
app.delete

