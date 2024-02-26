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
            console.log(clients)
            res.status(200).json(JSON.stringify(clients))
        }
    },
    {
        method: "GET",
        path: "/:id",
        handler: (req , res) => {
            const index = clients.findIndex((i) => {return i.id === req.params.id})

            if (index !== -1) {
                res.status(200).json(clients[index])
            } else {
                res.status(400).json(`Cliente não encontrado, verifique se o ID está correto:${req.params.id}`)
            }
        }
    },
    {
        method: "PUT",
        path: "/:id",
        handler: (req , res) => {
            clients.forEach((client) => {
            
                try {
                    if (client.id == req.params.id) {

                        const index = clients.findIndex((i) => {return i.id === client.id})

                        clients[index] = {id: client.id , ...req.body}

                        writeDB(clients)
        
                        res.status(200).json(`Seus dados foram atualizados!`)
                    }
                    
                } catch (error) {
                    res.status(400).send(console.error(error))
                }
                
            })
        }
    },
    {
        method: "DELETE",
        path: "/:id",
        handler: (req , res) => {
            const index = clients.findIndex((i) => {return i.id === req.params.id})
            clients.splice(index , 1)
            console.log(clients)
            writeDB(clients)
            res.status(200).json("Cliente deletado!")
        }
    }

    

]


module.exports = routes