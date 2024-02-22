const crypto = require("crypto")
const fs = require("fs")


const clients = readDB()


function readDB() {
    const data = fs.readFileSync("./database/db.json", "utf-8")

    return JSON.parse(data)
}

function writeDB(client) {
    fs.writeFileSync("./database/db.json", JSON.stringify(client , null , 4))
}


const routes = [
    {
        method: "POST",
        path: "/",
        handler: (req, res) => {
            try {
                if (req.body) {
                    const newClient =
                    {
                        id: crypto.randomUUID(),
                        nome: req.body.nome,
                        idade: req.body.idade,
                        email: req.body.email,
                        celular: req.body.celular,
                    }
                    clients.push(newClient);
                    writeDB(clients);
                    res.status(200).send("Cliente adicionado a lista!");
                }
            } catch (error) {
                console.error(error)
            }
            

        }
    },
    {
        method: "GET",
        path: "/",
        handler: (req , res) => {
            res.status(200).json(JSON.stringify(clients))
        }
    },
    {
        method: "PUT",
        path: 

    }

]


module.exports = routes