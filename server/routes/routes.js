const express = require("express")
const login = require("../controllers/login")
const register = require("../controllers/signUp")
const resetPassword = require("../controllers/resetPassword")
const sendMail = require("../middlewares/sendToken")
const updateMail = require("../controllers/updateMail")
const forgotPassword = require("../controllers/forgotPassword")

const route = express.Router()

route.post("/api/login", login)

route.post("/api/register", register, sendMail)

route.get("/users/:id/verify/:token", updateMail)

route.post("/reset-Password/:id/:token", resetPassword )

route.post("/forgot-password", forgotPassword)

module.exports = route