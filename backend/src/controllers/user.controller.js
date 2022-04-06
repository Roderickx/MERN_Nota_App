const userCtrl = {};
const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users)
}
userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.send('User Created')
}
/*
userCtrl.deleteUser = async (req, res) =>{
    User.findByIdAndDelete(req.params.id);
    res.send('user deleted');
}*/

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}



module.exports = userCtrl;