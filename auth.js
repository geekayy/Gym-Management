const User = require('./user');
const jwt = require('jsonwebtoken');

async function signin(req, res){
    const {email, password} = req.body
    console.log(req.body)
    const user = await User.findByEmail(email);
   
    if (!user) {
        res.statusMessage = "Invalid Email"
        res.status(401).end()
    } else {
        
        if (password === user.pass) {
            const token = jwt.sign({ userEmail: user.email }, 'secret');
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: 'Logged in', token: token });
            
        } else {
            res.statusMessage = "Password is not correct"
            res.status(401).end()
        }
    }
  
    
};

async function signup(req, res){
    const {email, password, first_name, last_name, phone} = req.body
    const user_details = {email, password, first_name, last_name, phone}
    const user = await User.create(user_details);
    // console.log(user)
    if (!user) {
        res.statusMessage = "Cannot insert details"
        res.status(401).end()
    } else {
        res.status(200).json({ message: 'User Inserted'});
    }

}


module.exports = {signin, signup}




