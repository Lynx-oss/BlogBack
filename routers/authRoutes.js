const express = require("express");
const {check, validationResult} = require("express-validator");
const { register, login } = require("../Controllers/authController");
const router = express.Router();

const validateRegister = [
    check("nombre").notEmpty().witrhMessage("El nombre es requerido"),
    check("email").isEmail().withMessage("El email es requerido"),
    check("password").isLength({min: 6}).withMessage("La contraseña debe tener 6 digitos")

]

const validateLogin = [
    check("email").isEmail().withMessage("El email es requerido"),
    check("password").isLength({min: 6}).withMessage("La contraseña debe tener 6 digitos")

]

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

router.post("/register", validateRegister, handleValidationErrors, register);

router.post("/login", validateLogin, handleValidationErrors, login);                

module.exports = router

