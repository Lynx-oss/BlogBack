const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Acceso denegado. No se proporcionó un token." });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: "Token inválido." });
    }
  };
  
  module.exports = verifyToken;