import Express from "express"

const app = Express()

import { routes } from "./routes.js"

const PORT = 3030


app.set("port", process.env.PORT)

app.use(Express.json());


routes.forEach(route => {
    app[route.method.toLowerCase()](route.path, route.handler)
});



app.listen(PORT, () => {
    console.log(`Server open in ${PORT}`)
})