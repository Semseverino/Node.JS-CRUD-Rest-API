import {  v4 as uuidv4  } from 'uuid';
import mongoose from 'mongoose';
import express from 'express'



const app = express();

let users = [ ]

app.set('view engine', 'ejs');
app.set('views', '../views');

export const getUsers =  (req, res) => {

    res.send(users);
};

export const createUser =  (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
     res.status(201).send(user);
};

export const userProfile = (req, res) => {
    res.render('profile', { title: 'Profile Page'})
};

export const getUser =  (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUser =  (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from database`);
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, Password, Email} = req.body;
    const user = users.find((user) => user.id === id);
    
    if(name) {
        user.name = name;
    };
    if(Password) {
        user.Password = Password;
    };
    if(Email) {
        user.Email = Email;
    };
    
    res.send(`user with the id ${id} has been updated`);
};
export const getById = (req, res) => {
    const {id} = req.body;
    const look = users.find((user) => id === user.body);
    res.send(look, req.body());
};

export const userLogin = (req, res) => {
    let username = req.body.username
    let password = req.body.password
    res.send(`Username: ${username} Password: ${password}`);
}

export default uuidv4;

