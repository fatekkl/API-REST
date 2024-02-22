const express = require('express')
const app = express()

const routes = require("./routes.js")

const PORT = 3030


app.set("port" , process.env.PORT)

app.use(express.json());


routes.forEach(route => {
    app[route.method.toLowerCase()](route.path , route.handler)
});



// respond with "hello world" when a GET request is made to the homepage


app.listen(PORT , () => {
    console.log(`Server open in ${PORT}`)
})