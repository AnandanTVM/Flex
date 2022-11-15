const { response } = require('express');
let express = require('express');
let router = express.Router();
let userHelper = require('../helpers/userHelpers')


//sing up
router.post('/api/register', async (req, res) => {
    console.log(req.body)

    userHelper.userRegister(req.body).then((response) => {

        if (response.phoneFound) {
            res.json({ status: 'error', error: 'Duplicate email' })
        } else {
            res.json({ status: 'Successfull updated' })
        }

    }).catch((error) => {
        res.json({ status: 'error', error: 'Duplicate email' })
    })
})
//login

router.post('/api/login', (req, res) => {
    console.log("here");
    userHelper.douserLogin(req.body).then((response) => {
        console.log(response);
        if (response.status) {

            return res.json({ status: 'ok', user: true, response })
        } else {

            res.json({ status: 'error', user: false })
        }

    })
})

// router.post('/api/login', async (req, res) => {
//     console.log(req.body);
//     console.log("iam here");

//     const user = await User.findOne({
//         email: req.body.email
//     })
//     console.log(user);
//     if (user) {
//         
//     } else {
//        
//     }


// })
module.exports = router;