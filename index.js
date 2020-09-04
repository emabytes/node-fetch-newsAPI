const express = require("express")
const app = express()
const fetch = require("node-fetch")
const config = require("./.env")
const apiKey = config.apikey

app.use(express.static("public"))
app.set("view engine", "ejs")

let data =[]

fetch(`http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(json => data=json.articles);

app.get("/", (req, res) => {
    res.render("home", { apiData: data })
})

app.listen(4040, () => console.log("server running at http://localhost:4040"))