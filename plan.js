const User = require('./user');

async function send_plan_query(req, res){
    const {email, plan_type} = req.body
    const details = await User.getDetails(email);
    if (!details) {
        res.statusMessage = "Cannot find details"
        res.status(401).end()
    } else {
        const  first_name = details.first_name
        const  last_name = details.last_name
        const  phone = details.phone_number
        const plan_query_details = {first_name, last_name, email, phone, plan_type}
        const plan_query_result = await User.send_plan_query(plan_query_details);

        if (!plan_query_result) {
            res.statusMessage = "Cannot insert plan query details"
            res.status(401).end()
        } else {
            res.status(200).json({ message: 'Plan query details Inserted'});
        }
        
    }

}

module.exports = {send_plan_query}