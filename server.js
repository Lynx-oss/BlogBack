const express = require("express")
const dotenv = require ("dotenv")
const connectBD = require("./config/Database")
const authRoutes = require("./routes/authRoutes")


dotenv.config()
connectBD()

const app = express();

app.use(express.json())

app.use("../routes/authRoutes") 

app.use((err, req, res, next)=>{
    res.status(500).json({error: err.message})

})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Servidor corriendo en el puerto ${PORT}`))