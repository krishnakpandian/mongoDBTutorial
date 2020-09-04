const model = '../models.js';

const createUser = (req,res) => {
    res.status(200).send({message: "Hello World"});
}

const getUser = (req,res) => {
    res.status(200).send({message: "Hello World"});
}

const getAllUsers = (req,res) => {
    res.status(200).send({message: "Hello World"});
}

const updateUser = (req,res) => {
    res.status(200).send({message: "Hello World"});
}

const deleteUser = (req,res) => {
    res.status(200).send({message: "Hello World"});
}

module.exports = {createUser, getUser, getAllUsers, updateUser, deleteUser}