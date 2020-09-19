const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Initiate middleware
app.use(express.json({ extended: true }));

//Connecting Database
connectDB();

//Define Routes
app.use('/api/v1/todo', require('./routes/todo.js'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
