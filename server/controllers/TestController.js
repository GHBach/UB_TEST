const app = require("express");
const router = app.Router();
const TestService = require("../services/TestService")
var cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


/* hash */
router.post("/encryptstr", async (req, res) => {
    const { str } = req.body;
    console.log(">>> [TestController] encryptStr");
    try {
        const result = bcrypt.hashSync(str, saltRounds, (err, encryptedPW) => {
            //callback
            if(err) return err;
            return encryptedPW
        })
        res.send({
            success: true,
            result: result
        })
    } catch (error) {
        res.send({
            success: false,
            error,
            result: null
        })
    }
})

/* hash 검증 */
router.post("/comparestr", async (req, res) => {
    const { str , encstr } = req.body;
    console.log(">>> [TestController] compareStr");
    try {
        const result = await bcrypt.compareSync(str , encstr, (err, same) => {
            if(err) return err;
            return same;
        })
        if (result === true) {
            res.send({
                success: true,
                result: true
            }) 
        } else {
            res.send({
                success: true,
                result: false
            }) 
        }
        
    } catch (error) {
        res.send({
            success: false,
            error,
            result: null
        })
    }
})

module.exports = router;
