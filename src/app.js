const express = require ("express")
const morgan = require ("morgan")
const mongoose = require ("mogoose")
const cors = require("cors")
const app = express()
const authRouters = require("./routes/auth.routes")


//Configuraciones
app.set("port", process.env.PORT || 3000)

//Middlewares
app.use(morgan("dev"))
app.use(cors())

//Rutas
app.use("/auth", authRouters)

//Inicio del servidor
app.listen(app.get("port"), ()=>{
    console.log("Server Running")
})
