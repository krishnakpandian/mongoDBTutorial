const userSchema = require('../models/models.js');

const createUser = (req,res) => {
    const user = new userSchema({
        fName: req.body.fName,
        lName: req.body.lName,
        age: req.body.age
    })
    user.save().then(() => {
        console.log('User Created'); 
        res.status(201).send({message: 'User Created'}); 
      }).catch((err) => {
        res.status(500).send({message: err});
      });
}

const getUser = (req,res) => {
    userSchema.find({_id: req.params.id}, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json({message: err});
        } else {
          res.status(200).json(results);
        }
      });
}

const getAllUsers = (req,res) => {
    data = userSchema.find()
    if (data) {
        console.log(data)
        res.status(200).send({message: "All Data retrieved"});
    }
    else {
        res.status(500).send({message: 'Could not get users'});
    }
    
}

const updateUser = async (req,res) => {
    const userUpdate = await userSchema.findOneAndUpdate({_id: req.params.id}, {
        $set: {
          fName: req.body.name,
          lName: req.body.lName,
          age: req.body.age
        },
      }, {new: true});
    
      if (userUpdate) {
        res.status(201).send({message: 'User Successfully updated'});
      } else {
        res.status(500).send({message: 'Could not update user'});
      }
}

const deleteUser = async (req,res) => {
    const userDelete = await userSchema.findByIdAndDelete({_id: req.params.id});
    if (userDelete) {
      res.status(200).json({message: 'User Successfully deleted'});
    } else {
      res.status(500).json({message: 'Could not delete user'});
    }
}

module.exports = {createUser, getUser, getAllUsers, updateUser, deleteUser}