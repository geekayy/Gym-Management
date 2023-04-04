const User = require('./user');

async function send_plan_query(req, res){
    const {email, plan_type} = req.body
    const details = await User.getDetails(email);
    if (!details) {
        res.statusMessage = "Cannot find details"
        res.status(401).end()
    } else {
        res.status(200).json({ message: 'Details fetched', details:details });
        console.log(details)
    }

}

module.exports = {send_plan_query}