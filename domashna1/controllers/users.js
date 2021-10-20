const User = require ('../models/users');

module.exports= {
    registerUser: async(req, res) => {  
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email.toLowerCase(),
            password: req.body.password });
        res.send(user);
    },
    logInUser: async(req ,res) => {
        if (await User.findOne({email: req.body.email.toLowerCase(), password: req.body.password})){
            res.send('OK');
        } else{
            res.send('Cela da e');
        }
    }
}