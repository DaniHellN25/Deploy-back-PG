import {Router} from "express";
const {ForgotPassword } = require('./nodemailer');



const nodemailerRoutes: Router = Router();

nodemailerRoutes.put("/rememberpassword", ForgotPassword);


module.exports = nodemailerRoutes;