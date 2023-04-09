import express from 'express'

const app = express()

app.get("/" , (req, res) => {
    res.send("Graphql is running ")
})

const portNumber = 6061
app.listen(portNumber,() => console.log("Server is running on port localhost:" + portNumber))