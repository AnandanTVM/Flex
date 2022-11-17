const { response } = require('express');
let express = require('express');
let router = express.Router();
let adminHelper = require('../helpers/adminHelper')
const jwt = require('jsonwebtoken')

//loginAdmin

router.post('/api/login', (req, res) => {
    console.log("admin here");
    console.log(req.body);
    adminHelper.doAdminLogin(req.body).then((response) => {

        if (response.status) {
            const token = jwt.sign({
                userId: response.user._id,
                name: response.user.name,
                email: response.user.email
            },
                'SKey5flwx'
            )
            return res.json({ status: 'ok', user: token })
        } else {

            res.json({ status: 'error', user: false })
        }

    })
})




module.exports = router;