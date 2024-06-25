import express from "express"
const router = require('./routes/noteRoutes');
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(router)


//connect to the DataBase
const mongoURI = process.env.mongoURI
const port = Number(process.env.port || "3000")

if (mongoURI === undefined) {
    console.log("Error while connection to the Database")
}
else {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected successfully to the DB...")
            app.listen(port)
        })
        .catch((err) => {
            console.log("Database connection failed...")
        })

    app.use((req, res) => {
        res.render('404', { title: "Error" })
    })
}
