
const User = require('../models/model.user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    if(!req.body.old_password)
        res.send("Old Password Required");

    try{
        const user = await User.findById(req.params.id);

        if(await bcrypt.compare(req.body.old_password, user.password)){
            next();
        }else{
            res.json({message: 'Password is incorrect'});
        }
    }catch(err)
    {
        res.json({message: err.message});
    }
}