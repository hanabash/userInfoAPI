const User = require('../models/userModel.js')

//would be good to add consistent logging
const getUserByIdIfOver21 = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).where('age').gt(21);

        if(!user) {
            //can make more specific by first checking user by ID
            //if found, only then check if age > 21
            //else, return this error
            return res.status(404).json({message: "User not found."});
        }

        return res.status(200).json(user);
    }
    catch(error) {
        return res.status(400).json({message: "Error retrieving user information."});
    }
}

module.exports = {
    getUserByIdIfOver21
}