const express = required("express")
const router = express.Router()
const msg = require("../helpers/messages")
const User = require("../models/user")
const authService = require("../services/auth.service")

router.post("/register", async (req, res)=>{
    try {
        const user = new User (req.body)
        const token = await authService.register(user)
        res.status(token.code).json(token);
    } catch (error) {
        res.send(error)
    }
})

router.post("login", async (req, res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json(msg.fieldRequired)
        }
        const token = await authService.login(req.body)
        res.status(token.code).jason(token)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router