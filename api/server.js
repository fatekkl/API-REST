const express = require('express')
const app = express()

const routes = require("./routes")

const PORT = 3030


app.set("port" , process.env.PORT)

app.use(express.json());


routes.forEach(route => {
    app[route.method.toLowerCase()](route.path , route.handler)
});



app.listen(PORT , () => {
    console.log(`Server open in ${PORT}`)
})