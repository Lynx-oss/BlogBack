const {registerUser,loginUser} = require("../Services/authServices")

const register = async (req, res) => {
  try {
    const {nombre, email, password} = req.body;
    const user = await registerUser(nombre, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.status(200).json({
      message: "Inicio de sesion correcto",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
}

module.exports = {
  register,
  login 
}