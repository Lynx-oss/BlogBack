const User = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

// Registro de usuario
exports.registerUser = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    // Validar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "El usuario ya existe" });

    // Crear nuevo usuario
    const user = await User.create({ nombre, email, password });

    res.status(201).json({
      id: user._id,
      nombre: user.nombre,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Inicio de sesión
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.status(200).json({
      id: user._id,
      nombre: user.nombre,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
