const User = require('./user');

async function contact_details(req, res){
    const {name, email, subject, message} = req.body
    const contact_form_details = {name, email, subject, message}
    const contact = await User.create_contact_details(contact_form_details);
    // console.log(user)
    if (!contact) {
        res.statusMessage = "Cannot insert contact details"
        res.status(401).end()
    } else {
        res.status(200).json({ message: 'Contact details Inserted'});
    }

}

module.exports = {contact_details}