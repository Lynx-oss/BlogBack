const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModels");
const {generateToken} = require("../utils/generateToken")

const registerUser = async (nombre, email, password) =>{
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("El usuario ya existe");
    }

    const token = generateToken(user._id, "1d");

    

    const user = await User.create({
        nombre,
        email,
        password: hashedPassword,
    });

    const loginUser = async (email, password) => {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Credenciales inválidas");
        }   
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Credenciales inválidas");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" }); "1d" 
        return {user, token}
            
        
    }
    module.exports = {
        registerUser,
        loginUser   
    }
}