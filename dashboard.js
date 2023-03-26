const User = require('./user');

async function dashboard(req, res){
    const email = req.headers["email"]
    const details = await User.getDetails(email);
    if (!details) {
        res.statusMessage = "Cannot find details"
        res.status(401).end()
    } else {
        const format_date = details.join_date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        details["join_date_formatted"] = format_date
        res.status(200).json({ message: 'Details fetched', details:details });
       
    }
  
    
};

module.exports = {dashboard}