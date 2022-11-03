import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import users from './models/users.js';
import mongoose from 'mongoose'


const app = express();
const PORT = 7000;
import('dotenv').config

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.render('index', {title: 'Login Page' });
    
});

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));



